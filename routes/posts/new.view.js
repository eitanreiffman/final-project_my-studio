const { Post } = require("../../models")

module.exports = (req, res) => {
    res.render('posts/new', {
        userLoggedIn: req.verifiedUser,
         post: new Post()
    })
}