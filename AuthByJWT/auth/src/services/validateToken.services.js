const jwtUtils = require('../utils/jwtUtils');
const validateJWTToken = async (token) => {

    const result = await jwtUtils.verifyJWT(token);
    return result;
};

module.exports = { validateJWTToken };