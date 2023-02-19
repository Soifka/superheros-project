const { Router } = require('express');
const StarController = require('../controllers/Star.controller');
const { findStar, validateStar, validateToUpdateStar } = require('../middlewares/star.mv');

const starRouter = Router();

starRouter.post('/', validateStar, StarController.createStar);
starRouter.get('/:starId', findStar, StarController.getOneStar);
starRouter.get('/', StarController.getAllStars);
starRouter.get('/:starId/superpowers', StarController.getStarWithSuperpowers);
starRouter.put('/:starId', validateToUpdateStar, findStar, StarController.updateStar);
starRouter.delete('/:starId', findStar, StarController.deleteStar);


module.exports = starRouter;