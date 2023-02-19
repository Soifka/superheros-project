const { Superpower } = require('../models/');
const SuperpowerError = require('../errors/SuperpowerError');
const GlobalError = require('../errors/GlobalError');

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

module.exports.getAllSuperpowers = async(req, res, next) => {
    try {
        const superpowers = await Superpower.findAll();
        if(superpowers) {
            return res.status(200).send(superpowers);
        } else {
            throw new SuperpowerError(400, 'Cannot get all Superpowers');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.addSuperpowerToStar = async(req, res, next) => {
    try {
        const { starInstance, superpowerInstance } = req;
        const result = await starInstance.addSuperpower(superpowerInstance);
        if(result) {
            return res.status(200).send('Superpower successfully added');
        } else {
            throw new GlobalError(400, 'Something is wrong');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.updateSuperpower = async(req, res, next) => {
    try {
        const { superpowerInstance, body } = req;
        const updated = await superpowerInstance.update(body);
        if(updated) {
            return res.status(200).send(updated);
        } else {
            throw new SuperpowerError(400, 'Cannot update')
        }
    } catch (error) {
        next(error);
    }
};

module.exports.deleteSuperpower = async(req, res, next) => {
    try {
        const { superpowerInstance } = req;
        const result = await superpowerInstance.destroy();
        if(result) {
            console.log(result)
            return res.status(200).send('Superpower successfully deleted');
        } else {
            throw new SuperpowerError(400, 'Cannot delete');
        }
    } catch (error) {
        next(error);
    }
};
