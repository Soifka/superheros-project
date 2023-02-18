const yup = require('yup');

module.exports.STAR_CREATE_SCHEMA = yup.object({
    nickname: yup.string().required('Nickname of Star is required').min(3, 'Too short nickname'),
    realName: yup.string().required('Real name of Star is required').min(3, 'Real name of Star is required'),
    description: yup.string(),
    catchphrase: yup.string().required('Cathphrase of Star is required').min(3, 'Cathphrase of Star is required')
});

module.exports.STAR_UPDATE_SCHEMA = yup.object({
    nickname: yup.string().min(3, 'Too short nickname'),
    realName: yup.string().min(1, 'Too short real name'),
    description: yup.string(),
    catchphrase: yup.string().min(3, 'Too short cathphrase')
});