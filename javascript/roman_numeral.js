function romanNumeral(string) {
  let conv = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

  let len = string.length;

  // Used if/else instead of a cleaner switch (1,2,default) so I could abstract the vars on lines 12-15.
  if (len === 1) {
    return conv[string[0]];
  }

  else {
    let toSum = conv[string[0]] >= conv[string[1]];
    let first = conv[string[0]];
    let sum = conv[string[0]] + conv[string[1]];
    let sub = conv[string[1]] - conv[string[0]];

    if (len === 2){
      return toSum ? sum : sub;
    }
    else {
      return toSum ? first + romanNumeral(string.slice(1)) : sub + romanNumeral(string.slice(2));
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
 * 1. paraphrase
 * 
 * I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
 * 
 * 2. tests
 * 
 * CCC
 * CDIX
 * 
 * 3. pseudocode
 * * Hold first letter in string. Look at second.
 * If second is greater than first, pair them. Find value. Add to sum and recurse with remaining string.
 * If first is greater, do not pair them. Find value of first, add to sum, recurse with remaining string (incl second).
 * 
 * 4. code
 * 5. refactor
 * 6. optimize if time
 * 
 */