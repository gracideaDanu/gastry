let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization'];// Express headers are auto converted to lowercase
    try {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
    } catch (e) {
        res.status(404).send({
            message: "Sorry couldn't get token",
            error: e
        })
    }


    if (token) {
        jwt.verify(token, process.env.SECRET_OR_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                //req.decoded in this case is the user id in the mongo database, since in jwt.verfiy in login we pass the id as the payload.
                console.log(req.decoded);
                req.decoded = decoded;
                console.log(req.decoded);
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    checkToken: checkToken
}
