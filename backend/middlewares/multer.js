const multer = require('multer');


// const storage1 = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null,__dirname,'../userImages')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })

const userImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, Path.join(__dirname, "../uploads/userImages"));
    },
    filename: function (req,file,cb){
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() *1E9);
      cb(null,file.filename + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const userImage = multer({
  storage: userImageStore ,
  limits:{fileSize:5*1024*1024},
  fileFilter: (req,file,cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const mimetype = file.mimetype;
    const allowedExtension = {
      jpeg:true,
      png:true,
      jpg:true
    }

    const allowedMimetype = {
      "image/jpeg":true,
      "image/png":true,
      "image/jpg":true
    }
    if(allowedExtension[extension] && !allowedMimetype[mimetype]){
      cb(new Error("File extension not allowed"))
    }else{
      cb(null,true)
    }
  }
});

module.exports = {userImage};
  



  // const uploadUserImage = multer({ storage: storage1 })

  // module.exports = uploadUserImage;
