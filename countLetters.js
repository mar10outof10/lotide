const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let countedLetters = {};
  for (const letter of string) {
    if (countedLetters[letter]) {
      countedLetters[letter] += 1;
    } else {
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
}

//all true
assertEqual(countLetters('asdfasdfasdf')['a'], 3);
assertEqual(countLetters('heyaaaa what\'s going on')['\''], 1);
assertEqual(countLetters('jello')['j'], 1);
assertEqual(countLetters('delicious')['i'], 2);
assertEqual(countLetters('summer breeze')['e'], 4);
assertEqual(countLetters('3 potatoes 4 potatoes 5 potatoes more')['e'], 4);

//all false
assertEqual(countLetters('jello')[' '], 1);
assertEqual(countLetters('delicious')['c'], 2);
assertEqual(countLetters('summer breeze')['z'], 4);