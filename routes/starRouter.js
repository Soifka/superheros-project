const { Router } = require('express');
const StarController = require('../controllers/Star.controller');
const { findStar, validateStar, validateToUpdateStar } = require('../middlewares/star.mv');

const starRouter = Router();

starRouter.post('/', validateStar, StarController.createStar);
starRouter.post('/superpowers', StarController.createStarWithSuperpowers);
starRouter.get('/:starId', findStar, StarController.getOneStar);
starRouter.get('/', StarController.getAllStars);
starRouter.get('/:starId/superpowers', StarController.getStarWithSuperpowers);
starRouter.get('/:starId/photos', StarController.getStarWithPhotos);
starRouter.put('/:starId', validateToUpdateStar, findStar, StarController.updateStar);
starRouter.delete('/:starId', findStar, StarController.deleteStar);


module.exports = starRouter;