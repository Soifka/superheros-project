const StarError = require('../errors/StarError');
const { Star } = require('../models/');


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
