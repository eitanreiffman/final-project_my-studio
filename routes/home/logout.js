module.exports = (req, res) => {
    res.cookie('JsonWebToken', '', { httpOnly: true });
    res.redirect('/')
}