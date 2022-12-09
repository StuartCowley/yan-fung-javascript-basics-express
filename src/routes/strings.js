const express = require('express');

// importing response controller
const stringsController = require('../controllers/strings');

// creating express router
const stringsRouter = express.Router();

// handling request using router
stringsRouter.get('/hello/:string', stringsController.hello);
stringsRouter.get('/upper/:string', stringsController.upper);
stringsRouter.get('/lower/:string', stringsController.lower);
stringsRouter.get('/first-character/:string', stringsController.firstChar);
stringsRouter.get('/first-characters/:string', stringsController.firstChars);

module.exports = stringsRouter;
