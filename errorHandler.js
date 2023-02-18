const StarError = require("./errors/StarError");
const GlobalError = require("./errors/GlobalError");
const { ValidationError } = require('yup');

module.exports.errorHandler = async(err, req, res, next) => {
    if(err instanceof StarError) {
        return res.status(err.code).send(err.message);
    } else if(err instanceof GlobalError) {
        console.log((err))
        return res.status(err.code).send(err.message);
    } else if(err instanceof ValidationError) {
        return res.status(400).send(`Check the entered data; ${err.errors}`)
    } else {
        // console.log(err)
        return res.status(err.status).send(`Something is wrong. Error type: ${err.type}`);
    }
} 