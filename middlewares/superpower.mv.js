const SuperpowerError = require('../errors/SuperpowerError');
const { Star, Superpower } = require('../models/');

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