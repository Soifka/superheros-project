const { Router } = require('express');
const SuperpowerController = require('../controllers/Superpower.controller');
const { findSuperpower } = require('../middlewares/superpower.mv');

const superpowerRouter = Router();

superpowerRouter.post('/', SuperpowerController.createSuperpower);
superpowerRouter.get('/:superpowerId', findSuperpower, SuperpowerController.getOneSuperpower);


module.exports = superpowerRouter;