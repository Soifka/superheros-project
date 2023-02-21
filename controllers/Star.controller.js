const GlobalError = require('../errors/GlobalError');
const StarError = require('../errors/StarError');
const { Star, Superpower, Photo } = require('../models/');


module.exports.createStar = async(req, res, next) => {
    try {
        const { body } = req;
        const createdStar = await Star.create(body);
        if(createdStar) {
            return res.status(201).send(createdStar);
        } else {
            throw new StarError(400, 'Star was not created');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.getOneStar = async(req, res, next) => {
    try {
        const { starInstance } = req;
        // console.log(starInstance)
        return res.status(200).send(starInstance);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllStars = async(req, res, next) => {
    try {
        const allStars = await Star.findAll();
        if(allStars) {
            return res.status(200).send(allStars);
        } else {
            throw new StarError(400, `Cannot get all Stars`);
        }
    } catch (error) {
        next(error);
    }
};

module.exports.updateStar = async(req, res, next) => {
    try {
        const { starInstance, body } = req;
        const updated = await starInstance.update(body);
        if(updated) {
            return res.status(200).send(updated);
        } else {
            throw new StarError(400, 'Cannot update');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.deleteStar = async(req, res, next) => {
    try {
        const { starInstance } = req;
        const deleted = await starInstance.destroy();
        if(deleted) {
            return res.status(200).send('Successfully deleted');
        } else {
            throw new StarError(400, 'Cannot delete');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.getStarWithSuperpowers = async(req, res, next) => {
    try {
        const {params: {starId}} = req;
        const starWithSuperpowers = await Star.findByPk(starId, {
            include: {
                model: Superpower
            }
        });
        if(starWithSuperpowers) {
            return res.status(200).send(starWithSuperpowers);
        } else {
            throw new StarError(400, `Cannot get Star (id ${starId}) with superpowers`)
        }
    } catch (error) {
        next(error);
    }
};

module.exports.getStarWithPhotos = async(req, res, next) => {
    try {
        const {params: {starId}} = req;
        const starWithPhotos = await Star.findByPk(starId, {
            include: {
                model: Photo
            }
        });
        if(starWithPhotos) {
            return res.status(200).send(starWithPhotos);
        } else {
            throw new StarError(400, `Cannot get Star (id ${starId}) with photos`)
        }
    } catch (error) {
        next(error);
    }
};
