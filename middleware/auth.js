const jwt = require('jsonwebtoken');
const unprotectedRoutes = [
    '/graphql',
    '/',
    'login'
];

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies?.JsonWebToken || ""
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.verifiedUser = verified.user;
        next()
    } catch(err) {
        console.log(err)
        if (unprotectedRoutes.includes(req.path)){
            next()
        } else {
            res.redirect('/login')
        };
    };
};

module.exports = { authenticate }