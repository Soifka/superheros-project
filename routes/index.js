const { Router } = require('express');
const starRouter = require('./starRouter');
const superpowerRouter = require('./superpowerRouter');
const photoRouter = require('./photoRouter');
const GlobalError = require('../errors/GlobalError');

const router = Router();

router.use('/stars', starRouter);
router.use('/superpowers', superpowerRouter);
router.use('/photos', photoRouter);

router.all('/*', async(req, res, next) => next(new GlobalError(404, 'Cannot get request. Check the entered URL')));

module.exports = router;
