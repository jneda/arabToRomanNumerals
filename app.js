function arabToRomanDigit(value, n, roman) {
  // substract value from n and concatenate roman digit to roman string
  const ROMAN_DIGITS = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  return [n - value, roman.concat(ROMAN_DIGITS[value])];
}

function convertToRoman(n) {
  

  let roman = "";

  // thousands
  while (n >= 1000) {
    [n, roman] = arabToRomanDigit(1000, n, roman);
  }

  // hundreds
  if (n >= 900) {
    [n, roman] = arabToRomanDigit(900, n, roman);
  }

  if (n >= 500) {
    [n, roman] = arabToRomanDigit(500, n, roman);
  }

  if (n >= 400) {
    [n, roman] = arabToRomanDigit(400, n, roman);
  }

  while (n >= 100) {
    [n, roman] = arabToRomanDigit(100, n, roman);
  }

  // tens

  if (n >= 90) {
    [n, roman] = arabToRomanDigit(90, n, roman);
  }

  if (n >= 50) {
    [n, roman] = arabToRomanDigit(50, n, roman);
  }

  if (n >= 40) {
    [n, roman] = arabToRomanDigit(40, n, roman);
  }

  while (n >= 10) {
    [n, roman] = arabToRomanDigit(10, n, roman);
  }

  // units
  if (n >= 9) {
    [n, roman] = arabToRomanDigit(9, n, roman);
  }

  if (n >= 5) {
    [n, roman] = arabToRomanDigit(5, n, roman);
  }

  if (n === 4) {
    [n, roman] = arabToRomanDigit(4, n, roman);
  }
  
  while (n > 0) {
    [n, roman] = arabToRomanDigit(1, n, roman);
  }

  return roman;
}

module.exports = {
  arabToRomanDigit,
  convertToRoman
}