module.exports = (req, res) => {
    res.render('choose', { user: req.verifiedUser })
}