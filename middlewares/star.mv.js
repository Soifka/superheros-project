const { Star } = require('../models/');
const { STAR_CREATE_SCHEMA, STAR_UPDATE_SCHEMA } = require('../schemas/star.schema');
const StarError = require('../errors/StarError');

module.exports.findStar = async(req, res, next) => {
    try {
        const { params: {starId} } = req;
        const star = await Star.findByPk(starId);
        if(star) {
            req.starInstance = star;
            next();
        } else {
            throw new StarError(404, `Star with id ${starId} not found`);
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateStar = async(req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await STAR_CREATE_SCHEMA.validate(body, {abortEarly: false});
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateToUpdateStar = async(req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await STAR_UPDATE_SCHEMA.validate(body, {abortEarly: false});
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
};