const { Router } = require('express');
const SuperpowerController = require('../controllers/Superpower.controller');

const superpowerRouter = Router();

superpowerRouter.post('/', SuperpowerController.createSuperpower);

module.exports = superpowerRouter;