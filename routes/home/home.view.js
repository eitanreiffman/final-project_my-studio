module.exports = (req, res) => {
    res.render('index', { user: req.verifiedUser })
}