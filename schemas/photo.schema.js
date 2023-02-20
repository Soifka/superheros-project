const yup = require('yup');

module.exports.PHOTO_SCHEMA = yup.object({
    name: yup.string().required('Name of Photo is required').min(3, 'Too short name'),
    path: yup.string().matches(/^([^\\/:*?"<>|])+\.(jpg|jpeg|png)$/i)./*required('Path is required').*/min(5, 'Too short path')
});

module.exports.PHOTO_RENAME_SCHEMA = yup.object({
    name: yup.string().required('Name of Photo is required').min(3, 'Too short name')
});