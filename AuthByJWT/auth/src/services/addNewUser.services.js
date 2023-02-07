const { UserDetails } = require('../../database/models');
const hashedPasswordGenerator = require('../utils/hashedPasswordGenerator');

const addNewUserInDB = async (username, password) => {

    const hashedPassword = await  hashedPasswordGenerator.createHashedPassword(password);
    const newUser = await UserDetails.create({
        username: username,
        hashedPassword : hashedPassword
    },
    );

    if(!newUser) throw new Error('User could not be created');
    
    newUser.dataValues.hashedPassword = 'xxxxxxxxxxxxxx';

    return newUser;

};

module.exports = { addNewUserInDB };