module.exports = (req, res) => {
    res.render('posts/addRevision', { userLoggedIn: req.verifiedUser })
}