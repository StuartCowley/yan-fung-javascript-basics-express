const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateNum = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

const trueNum = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};
const oddNumber = (req, res) => {
  const oddNum = parseInt(req.params.oddnum, 10);
  if (Number.isNaN(oddNum)) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  return res.status(200).json({ result: isOdd(oddNum) });
};

const startWithGivenChar = (req, res) => {
  const char = req.params.letter;
  const word = req.params.string;
  if (char.length > 1) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(char, word) });
};

module.exports = {
  negateNum,
  trueNum,
  oddNumber,
  startWithGivenChar,
};
