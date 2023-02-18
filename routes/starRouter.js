const { Router } = require('express');
const StarController = require('../controllers/Star.controller');
const { findStar, validateStar } = require('../middlewares/star.mv');

const starRouter = Router();

starRouter.post('/', validateStar, StarController.createStar);

module.exports = starRouter;