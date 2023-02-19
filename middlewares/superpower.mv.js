const SuperpowerError = require('../errors/SuperpowerError');
const { Superpower } = require('../models/');
const { SUPERPOWER_SCHEMA } = require('../schemas/superpower.schema');

module.exports.findSuperpower = async(req, res, next) => {
    try {
        const { params: {superpowerId} } = req;
        const superpower = await Superpower.findByPk(superpowerId);
        if(superpower) {
            req.superpowerInstance = superpower;
            next();
        } else {
            throw new SuperpowerError(404, `Cannot find superpower with id ${superpowerId}`);
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateSuperpower = async(req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await SUPERPOWER_SCHEMA.validate(body);
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
};