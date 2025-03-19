
const multer = require('multer');
const path = require('path');

const userImageStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads/userImages'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})


const productImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname, '../userImages')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extreme(file.originalname));
    }
  })
  const userImage = multer({
    storage: userImageStore,
    limits: { fileSize:5*1024*1024 }, // 1MB
    fileFilter: function (req, file, cb) {
      const extension = path.extname(file.originalname).toLowerCase();
      const mimetype = file.mimetype;
      const allowedExtensions ={
        jpeg:true,
        png:true,
        jpg:true
      }
      const allowedMimetype ={
        'image/jpeg': true,
        'image/png': true,
        'image/jpg': true
      }
      if (!allowedExtensions[extension] ||!allowedMimetype[mimetype]) {
        cb(new Error('File extension is not allowed.'));
      } else {
        cb(null, true);
      }
    }
  });
  
const productImages = multer({
  storage: productImageStore ,
  limits: { fileSize:5*1024*1024 }, // 1MB
  fileFilter: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase();
    const mimetype = file.mimetype;
    const allowedExtensions ={
      jpeg:true,
      png:true,
      jpg:true
    }
    const allowedMimetype ={
      'image/jpeg': true,
      'image/png': true,
      'image/jpg': true
    }
    if (!allowedExtensions[extension] ||!allowedMimetype[mimetype]) {
      cb(new Error('File extension is not allowed.'));
    } else {
      cb(null, true);
    }
  }
});
module.exports = {userImage,productImages};
