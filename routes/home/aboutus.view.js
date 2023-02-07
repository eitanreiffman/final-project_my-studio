module.exports = (req, res) => {
    res.render('aboutus', { user: req.verifiedUser })
}