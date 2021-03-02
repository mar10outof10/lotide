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

const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  
  if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    return array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2));
  }

};

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // true
console.log(assertArraysEqual(middle([]), [])); // true
console.log(assertArraysEqual(middle([1]), [])); // true
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // true
console.log(assertArraysEqual(middle([1, [2, 2], 3]), [[2, 2]])); // true
console.log(assertArraysEqual(middle([1, [2, 2], 3]), [2, 2])); // false (should be array within array)
console.log(assertArraysEqual(middle([1, [2, 3], 4, 5]), [[2, 3], 4])); // true
console.log(assertArraysEqual(middle([1, 2, [3, 4, 5]]), [2])); // true

