const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get the token from the request headers
    let token = req.headers['token-key'];

    if (!token) {
        return res.status(401).json({ status: 'fail', message: 'Token is required' });
    }

    // Verify the token
    jwt.verify(token, 'SecretKey123', (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: 'invalid token', data: err.message });
        }
        next();
    });
};
