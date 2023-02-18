const { Superpower } = require('../models/');
const SuperpowerError = require('../errors/SuperpowerError');

module.exports.createSuperpower = async(req, res, next) => {
    try {
        const { body } = req;
        const superpower = await Superpower.create(body);
        if(superpower) {
            return res.status(201).send(superpower);
        } else {
            throw new SuperpowerError(400, 'Cannot create Superpower');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.getOneSuperpower = async(req, res, next) => {
    try {
        const { superpowerInstance } = req;
        return res.status(200).send(superpowerInstance);
    } catch (error) {
        next(error);
    }
};

module.exports.addSuperpowerToStar = async(req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

