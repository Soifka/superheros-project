const yup = require('yup');

module.exports.STAR_SCHEMA = yup.object({
    nickname: yup.string().required().min(1),
    realName: yup.string().required().min(1),
    description: yup.string(),
    catchphrase: yup.string().required().min(1)
});