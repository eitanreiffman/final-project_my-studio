module.exports = (req, res) => {
    res.render('choose', { userLoggedIn: req.verifiedUser })
}