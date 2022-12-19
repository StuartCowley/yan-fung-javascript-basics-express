const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addNum = (req, res) => {
  const s1 = parseInt(req.params.string1);
  const s2 = parseInt(req.params.string2);

  if (Number.isNaN(s1) || Number.isNaN(s2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: add(s1, s2) });
};

const substractNum = (req, res) => {
  const s1 = parseInt(req.params.string1);
  const s2 = parseInt(req.params.string2);

  if (Number.isNaN(s1) || Number.isNaN(s2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: subtract(s2, s1) });
};

const multiplyNum = (req, res) => {
  const var1 = req.body.a;
  const var2 = req.body.b;
  const num1 = parseInt(var1);
  const num2 = parseInt(var2);

  if (!var1 || !var2) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: multiply(num1, num2) });
};

const divideNum = (req, res) => {
  const var1 = req.body.a;
  const var2 = req.body.b;
  const num1 = parseInt(var1);
  const num2 = parseInt(var2);

  if (num2 === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (num1 === 0 && num2 !== 0) {
    return res.status(200).json({ result: divide(num1, num2) });
  }
  if (!var1 || !var2) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: divide(num1, num2) });
};

const reminderNum = (req, res) => {
  const var1 = req.body.a;
  const var2 = req.body.b;
  const num1 = parseInt(var1);
  const num2 = parseInt(var2);

  if (var2 === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (var1 === 0 && var2 !== 0) {
    return res.status(200).json({ result: remainder(var1, var2) });
  }
  if (!var1 || !var2) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(var1, var2) });
};

module.exports = {
  addNum,
  substractNum,
  multiplyNum,
  reminderNum,
  divideNum,
};
