function romanNumeral(string) {
  const len = string.length;
  const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  switch (len) {
    case 0:
      return 0;
    case 1:
      return dict[string];
    default:
      const a = dict[string[0]];
      const b = dict[string[1]];
      if (a >= b) {
        return len === 2 ? a + b : a + romanNumeral(string.slice(1));
      }
      else {
        return b - a + romanNumeral(string.slice(2));
      }
  }
}

if (require.main === module) {
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 11");
  console.log(romanNumeral('XI'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 300");
  console.log(romanNumeral('CCC'));

  console.log("");

  console.log("Expecting: 409");
  console.log(romanNumeral('CDIX'));
}

module.exports = romanNumeral;

/**
 * 
 */