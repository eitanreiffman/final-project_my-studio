// const multer = require('multer')

// const storage = multer.diskStorage({
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     },
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//   })

// const upload = multer({ storage })

// app.post('/upload_files', upload.single('file'), (req, res) => {
//     res.send({ message: 'Successfully uploaded audio track' })
//   })

// module.exports = uploadSingle