const StarError = require("./errors/StarError");
const GlobalError = require("./errors/GlobalError");
const SuperpowerError = require("./errors/SuperpowerError");
const { ValidationError } = require('yup');


module.exports.errorHandler = async(err, req, res, next) => {
    if(err instanceof StarError || err instanceof SuperpowerError || err instanceof GlobalError) {
        return res.status(err.code).send(err.message);
    } else if(err instanceof ValidationError) {
        return res.status(400).send(`Check the entered data; ${err.errors}`)
    } else {
        console.log(err)
        return res.status(err.status ? err.status : 400).send(`Something is wrong: ${err.name}`);
    }
} 