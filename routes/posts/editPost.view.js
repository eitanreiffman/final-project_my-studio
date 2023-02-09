
module.exports = async (req, res) => {
    res.render('posts/editPost', { userLoggedIn: req.verifiedUser })
}