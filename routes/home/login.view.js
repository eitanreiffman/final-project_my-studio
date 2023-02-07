module.exports = (req, res) => {
    res.render('login', { user: req.verifiedUser })
}