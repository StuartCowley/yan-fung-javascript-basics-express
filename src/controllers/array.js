const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const getNEle = (req, res) => {
  const array1 = req.body.array;
  const num1 = req.params.num;
  res.status(200).json({ result: getNthElement(num1, array1) });
};

const arrToStr = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

const addToArr2 = (req, res) => {
  const array1 = req.body.array;
  const element = req.body.value;
  res.status(200).json({ result: addToArray2(element, array1) });
};

const eleStartWithVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

const removeNEle2 = (req, res) => {
  const array1 = req.body.array;
  const removedEle = req.query.index;
  if (removedEle === undefined) {
    res.status(200).json({ result: removeNthElement2(0, array1) });
  }
  res.status(200).json({ result: removeNthElement2(parseInt(removedEle), array1) });
};

module.exports = {
  getNEle,
  arrToStr,
  addToArr2,
  eleStartWithVowel,
  removeNEle2,
};
