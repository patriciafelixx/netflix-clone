const express = require('express');
const route = express.Router();

const IndexController = require('./controllers/IndexController');

route.get('/', IndexController.index);

module.exports = route;