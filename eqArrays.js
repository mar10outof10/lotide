const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// all assertions should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);