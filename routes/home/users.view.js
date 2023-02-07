module.exports = (req, res) => {
    res.render('users', { user: req.verifiedUser })
};