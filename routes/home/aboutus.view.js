module.exports = (req, res) => {
    res.render('aboutus', { userLoggedIn: req.verifiedUser })
}