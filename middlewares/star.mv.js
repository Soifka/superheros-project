const { Star } = require('../models/');
const { STAR_SCHEMA } = require('../schemas/star.schema');
const StarError = require('../errors/StarError');

module.exports.findStar = async(req, res, next) => {
    try {
        const { params: {starId} } = req;
        const star = Star.findByPk(starId);
        if(starInstance) {
            req.starInstance = star;
            next();
        } else {
            throw new StarError(`Star with id ${starId} not found`);
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateStar = async(req, res, next) => {
    try {
        const { body } = req;
        const validatedBody = await STAR_SCHEMA.validate(body);
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
}