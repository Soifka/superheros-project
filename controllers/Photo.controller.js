const { Photo } = require('../models');
const PhotoError = require('../errors/PhotoError');

module.exports.addPhotoToStar = async(req, res, next) => {
    try {
        const {starInstance, body: {name}, file: {filename}} = req;
        const photo = await starInstance.createPhoto(
            {
                name,
                path: filename
            }
        );
        if(photo) {
            return res.status(201).send(photo);
        } else {
            throw new PhotoError(400, 'Cannot add the photo');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.getOnePhoto = async(req, res, next) => {
    try {
        const { photoInstance } = req;
        return res.status(200).send(photoInstance);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllPhotos = async(req, res, next) => {
    try {
        const allPhotos = await Photo.findAll();
        if(allPhotos) {
            return res.status(200).send(allPhotos);
        } else {
            throw new PhotoError(400, 'Cannot get all Photos');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.renamePhoto = async(req, res, next) => {
    try {
        const { photoInstance, body } = req;
        const updated = await photoInstance.update(body);
        if(updated) {
            return res.status(200).send(updated);
        } else {
            throw new PhotoError(400, 'Cannot update')
        }
    } catch (error) {
        next(error);
    }
};

module.exports.deletePhoto = async(req, res, next) => {
    try {
        const { photoInstance } = req;
        const result = await photoInstance.destroy();
        if(result) {
            return res.status(200).send('Photo was successfully deleted');
        } else {
            throw new PhotoError(400, 'Cannot delete');
        }
    } catch (error) {
        next(error);
    }
};