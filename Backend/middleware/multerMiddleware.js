import multer from 'multer'

const storage = multer.memoryStorage();

const upload = multer({storage});

export {
    upload
}


// const storage = multer.diskStorage({
//     destination : function(req, file, cb){
//         cb(null, "./public/temp")
//     },
//     filename : function (req, file, cb){
//         cb(null, file.originalname)
//     }
// })

// export const upload = multer({
//     storage,
// })