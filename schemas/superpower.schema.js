const yup = require('yup');

module.exports.SUPERPOWER_SCHEMA = yup.object({
    description: yup.string().required('Description is required').min(3, 'Too short description')
});