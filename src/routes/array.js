const express = require('express');

// importing response controller
const arrayController = require('../controllers/array');

// creating express router
const arrayRouter = express.Router();

// handling request using router
arrayRouter.post('/element-at-index/:num', arrayController.getNEle);
arrayRouter.post('/to-string', arrayController.arrToStr);
arrayRouter.post('/append', arrayController.addToArr2);
arrayRouter.post('/starts-with-vowel', arrayController.eleStartWithVowel);
arrayRouter.post('/remove-element', arrayController.removeNEle2);

module.exports = arrayRouter;
