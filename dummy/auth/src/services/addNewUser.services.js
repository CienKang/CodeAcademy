const { UserDetails } = require('../../database/models');
const hashedPasswordGenerator = require('../utils/bcryptUtils');

const addNewUserInDB = async (username, password) => {

    const hashedPassword = await  hashedPasswordGenerator.createHashedPassword(password);
    const newUser = await UserDetails.create({
        username: username,
        hashedPassword : hashedPassword
    },
    );

    if(!newUser) throw new Error('User could not be created');

    return newUser;

};

module.exports = { addNewUserInDB };