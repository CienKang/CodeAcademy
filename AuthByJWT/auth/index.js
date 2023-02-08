const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;

const tokenValidationRoutes = require('./src/routes/tokenValidation.routes');
const addNewUserRoutes = require('./src/routes/addNewUser.routes');
const loginUserRoutes = require('./src/routes/loginUser.routes');
dotenv.config({ path: '.env' });

app.use(express.json());
app.use(addNewUserRoutes);
app.use(loginUserRoutes);
app.use(tokenValidationRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
