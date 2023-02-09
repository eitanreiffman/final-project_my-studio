module.exports = (req, res) => {
    res.render('login', { userLoggedIn: req.verifiedUser })
}