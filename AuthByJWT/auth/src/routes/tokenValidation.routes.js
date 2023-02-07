const express = require('express');
const app = express.Router();

app.route('/token/validate')
    .post();

module.exports = app;