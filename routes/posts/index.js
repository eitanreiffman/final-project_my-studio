const express = require('express')
const PostRouter = express.Router()
// const multer  = require('multer')
// const upload = multer({ dest: '../../public/songs/' })


PostRouter.route('/')
    .get(require('./posts.view'))

PostRouter.route('/new')
    .get(require('./new.view'))
    .post(require('./new'))

PostRouter.route('/:id')
    .get(require('./viewPost'))
    .delete(require('./delete'))

PostRouter.route('/edit/:id')
    .get(require('./editPost.view'))
    .put(require('./editPost'))

// PostRouter.post('/new', upload.single('song'), (req, res) => {
//         console.log(req.file, req.body)
//     })

module.exports = PostRouter