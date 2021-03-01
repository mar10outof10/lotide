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

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArrays(result, ["Lighthouse", "Labs"]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertArrays(words.length, 3); // original array should still have 3 elements!