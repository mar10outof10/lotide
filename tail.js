const assertArrays = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
};

const tail = function(array) {
  return array.slice(1);
};