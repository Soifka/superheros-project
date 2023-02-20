const { Router } = require('express');
const PhotoController = require('../controllers/Photo.controller');
const { findStar } = require('../middlewares/star.mv');
const { findPhoto, validatePhoto, validateToRenamePhoto } = require('../middlewares/photo.mv');
const multer = require('multer');
const { STATIC_PATH } = require('../config/path.config');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  })

const upload = multer({ storage: storage })

const photoRouter = Router();

photoRouter.post('/:starId', findStar, upload.single('starPhoto'), validatePhoto, PhotoController.addPhotoToStar);
photoRouter.get('/:photoId', findPhoto, PhotoController.getOnePhoto);
photoRouter.get('/', PhotoController.getAllPhotos);
photoRouter.put('/:photoId', findPhoto, validateToRenamePhoto, PhotoController.renamePhoto);
photoRouter.delete('/:photoId', findPhoto, PhotoController.deletePhoto);


module.exports = photoRouter;