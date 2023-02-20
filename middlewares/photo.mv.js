const { Photo } = require('../models');

module.exports.findPhoto = async(req, res, next) => {
    try {
        const {params: {photoId}} = req;
        const photo = await Photo.findByPk(photoId);
        if(photo) {
            req.photoInstance = photo;
            next();
        } else {
            throw new PhotoError(404, `Cannot find the photo with id ${photoId}`)
        }
    } catch (error) {
        next(error);
    }
};