const { Router } = require('express');
const starRouter = require('./starRouter');
const GlobalError = require('../errors/GlobalError');


const router = Router();

router.use('/stars', starRouter);



module.exports = router;
