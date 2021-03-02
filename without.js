const eqArrays = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }
  for (let i = 0; i < actualArray.length; i++) {
    
    if (typeof(actualArray[i]) === 'object' && eqArrays(actualArray[i], expectedArray[i])) {
      continue;
    }
    if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let missingItems = [];
  for (let i = 0; i < source.length; i++) {
    if (i > itemsToRemove.length - 1) {
      missingItems.push(source[i]);
    } else if (!eqArrays(source[i], itemsToRemove[i])) {
      missingItems.push(source[i]);
    }
  }
  return missingItems;
};

// assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // true
// assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]); //true
// assertArraysEqual((without(["1", "2", "3"], [1, "2", "3"])), ["1", "2"]); //false

// assertArraysEqual((without([1, [2, 3]], [1, [2, 3]])), []); //true
// assertArraysEqual((without([1, [2, 3]], [1, [2, 3]])), [1]); //false

// assertArraysEqual((without([1, [5, 2, 3]], [1, []])), [5, [2, 3]]); // false
