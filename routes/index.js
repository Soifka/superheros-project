const { Router } = require('express');
const starRouter = require('./starRouter');
const GlobalError = require('../errors/GlobalError');


const router = Router();

router.use('/stars', starRouter);

router.all('/*', async(req, res, next) => next(new GlobalError(404, 'Requested page not found. Check the entered URL')));

module.exports = router;
