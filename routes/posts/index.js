const express = require('express')
const PostRouter = express.Router()
const multer  = require('multer')
const upload = multer({ dest: '../../public/songs/' })


PostRouter.route('/')
.get(require('./posts.view'))

PostRouter.route('/new')
    .get(require('./new.view'))
    .post(require('./new'))

// PostRouter.post('/new', (req, res) => {
//     console.log(req.body)
// })
        
PostRouter.get(('/:id'), (req, res) => {
    
})
    
// PostRouter.post('/new', upload.single('song'), (req, res) => {
//         console.log(req.file, req.body)
//     })

module.exports = PostRouter