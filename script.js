// how to config wesbos
// https://www.youtube.com/watch?v=lHAeK8t94as

const {
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
  batch,
} = require('./cards_data.js');

const validateCred = (arr) => {
  const reversedArr = arr.slice().reverse();

  const sum = reversedArr.reduce((total, current, index) => {
    let digit = current;
    if (index % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    return total + digit;
  }, 0);
  return sum % 10 === 0;
};

const findInvalidCards = (nestedArr) =>
  nestedArr.filter((arr) => !validateCred(arr));

const idInvalidCardCompanies = (invalidCards) =>
  Array.from(
    new Set(
      invalidCards.map((card) => {
        if (card[0] === 3) return 'Amex';
        if (card[0] === 4) return 'Visa';
        if (card[0] === 5) return 'Mastercard';
        if (card[0] === 6) return 'Discover';
        return 'Company not found';
      }),
    ),
  );

module.exports = {
  validateCred,
  findInvalidCards,
  idInvalidCardCompanies,
};
