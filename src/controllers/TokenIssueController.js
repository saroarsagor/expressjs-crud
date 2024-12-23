var jwt = require('jsonwebtoken');

exports.TokenIssue = (req, res) => {
    // Create the payload with proper syntax
    let payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),  // Expiry time (1 hour from now)
        data: {
            Name: "saroar",
            City: "Dhaka",
            admin: true
        }
    };

    // Secret key for signing the token
    const secretOrPrivateKey = "SecretKey123";

    // Generate the token
    let token = jwt.sign(payload, secretOrPrivateKey);

    // Send the token in the response
    res.send({ token: token });
};
