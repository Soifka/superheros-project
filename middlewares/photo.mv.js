const { Photo } = require('../models');
const { PHOTO_ADD_SCHEMA, PHOTO_RENAME_SCHEMA } = require('../schemas/photo.schema');

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

module.exports.validatePhoto = async(req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await PHOTO_ADD_SCHEMA.validate(body, {abortEarly: false});
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateToRenamePhoto = async(req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await PHOTO_RENAME_SCHEMA.validate(body, {abortEarly: false});
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
};