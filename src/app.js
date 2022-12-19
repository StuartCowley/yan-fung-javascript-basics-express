const express = require('express');

const app = express();

app.use(express.json());

// Importing all the routes
const stringsRouter = require('./routes/strings');
const arrayRouter = require('./routes/array');
const numbersRouter = require('./routes/numbers');
const booleansRouter = require('./routes/booleans');

// Handling routes request
app.use('/strings', stringsRouter);
app.use('/arrays', arrayRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);

module.exports = app;
