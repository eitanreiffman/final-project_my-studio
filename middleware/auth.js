const jwt = require('jsonwebtoken');
const unprotectedRoutes = [
    '/graphql',
    '/',
    '/login',
    '/aboutus'
];

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies?.JsonWebToken || ""
        console.log(token)
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.verifiedUser = verified.user;
        next()
    } catch(err) {
        console.log(req.path)
        if (unprotectedRoutes.includes(req.path)){
            next()
        } else {
            res.redirect('/')
        };
    };
};

module.exports = { authenticate }