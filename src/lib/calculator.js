module.exports.sum = (num1, num2) => {
  if (Number.isNaN(parseInt(num1, 10)) || Number.isNaN(parseInt(num2, 10)))
    throw new Error('Cannot sum what is not a number');

  return +num1 + +num2;
};
