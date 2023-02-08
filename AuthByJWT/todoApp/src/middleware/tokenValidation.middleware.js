let userUtils = require('../utils/username');

const tokenValidation = async (req, res, next) => {
    const token = req.headers['authorization'];
    const result = await fetch('http://localhost:3000/token/validate',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        } )
        .then(res => res.json()) ;

    if(result.status === 401) {
        res.status(401).send('Unauthorized');
    }
    userUtils.USERNAME = result.username;
    console.log(userUtils.USERNAME);
    next();
};

module.exports = { tokenValidation } ;