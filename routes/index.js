const { Router } = require('express');
const starRouter = require('./starRouter');
const superpowerRouter = require('./superpowerRouter');
const GlobalError = require('../errors/GlobalError');

const router = Router();

router.use('/stars', starRouter);
router.use('/superpowers', superpowerRouter);

router.all('/*', async(req, res, next) => next(new GlobalError(404, 'Cannot get request. Check the entered URL')));

module.exports = router;
