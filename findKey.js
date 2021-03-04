const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {

  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }

  return;
};

const findKeyExample = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(findKeyExample, "noma");

const findKeyExample2 = findKey({
  "Apple": { tastiness: 3 },
  "Pear": { tastiness: 5},
  "Riains": { isDry: true},
  "Orange": { tastiness: 7 },
  "Grape": { tastiness: 4 },
  "Clementine": { tastiness: 10 },
  "Banana": { tastiness: 5 }
}, x => x.tastiness >= 8); // => "Clementine"

assertEqual(findKeyExample2, "Clementine");