const express = require('express');

// importing response controller
const booleansController = require('../controllers/booleans');

// creating express router
const booleansRouter = express.Router();

// handling request using router
booleansRouter.post('/negate', booleansController.negateNum);
booleansRouter.post('/truthiness', booleansController.trueNum);
booleansRouter.get('/is-odd/:oddnum', booleansController.oddNumber);
booleansRouter.get('/:string/starts-with/:letter', booleansController.startWithGivenChar);

module.exports = booleansRouter;
