const { Router } = require('express');
const SuperpowerController = require('../controllers/Superpower.controller');
const { findSuperpower, validateSuperpower } = require('../middlewares/superpower.mv');
const { findStar } = require('../middlewares/star.mv');


const superpowerRouter = Router();

superpowerRouter.post('/', SuperpowerController.createSuperpower);
superpowerRouter.get('/:superpowerId', findSuperpower, SuperpowerController.getOneSuperpower);
superpowerRouter.get('/', SuperpowerController.getAllSuperpowers);
superpowerRouter.put('/:superpowerId/:starId', findSuperpower, findStar, SuperpowerController.addSuperpowerToStar);
superpowerRouter.put('/:superpowerId', validateSuperpower, findSuperpower, SuperpowerController.updateSuperpower);
superpowerRouter.delete('/:superpowerId', findSuperpower, SuperpowerController.deleteSuperpower);


module.exports = superpowerRouter;