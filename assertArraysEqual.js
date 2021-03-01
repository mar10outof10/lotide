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

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(["1", ["3", "2"]], ["1", ["3", "2"]]); // => true
// assertArraysEqual(["1", ["3", "2"]], ["1", ["2", "3"]]); // => false
// assertArraysEqual(["1", [1]], ["1", []]); // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

// assertArraysEqual('aslkas', 'aslkas'); //=> true
// assertArraysEqual('asdf', 'asfd'); // => false