const { Post } = require("../../models")

module.exports = (req, res) => {
    res.render('posts/new', {
         user: req.verifiedUser,
         post: new Post()
    })
}