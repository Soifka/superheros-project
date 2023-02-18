const express = require('express');
const { errorHandler } = require('./errorHandler');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/api', router);

app.use(errorHandler);


module.exports = app;



