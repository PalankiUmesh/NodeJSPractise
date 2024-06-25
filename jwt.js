const jwt = require('jsonwebtoken')

const jwdAuthMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization) return res.status(401).json({Error : 'Token not found'})
    const token = req.headers.authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err) {
        console.log(err);
        res.status(401).json({Error : 'Invalid token'});
    }
}

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET);
}

module.exports = {jwdAuthMiddleware, generateToken};