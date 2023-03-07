const client = require('redis').createClient();

client.connect().then(()=>{
    console.log('Redis connected');
});

const storeToken = async (token,username) =>{
    await client.set(token,username,'EX',process.env.TOKEN_EXPIRY);
};

const getToken = async (username) =>{
    const token = await client.get(username);
    return token;
};

module.exports = {
    storeToken,
    getToken
};