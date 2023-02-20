const { Photo, Star } = require('../models');
const GlobalError = require('../errors/GlobalError');

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
            throw new GlobalError(400, 'Cannot add the photo');
        }
    } catch (error) {
        next(error);
    }
};