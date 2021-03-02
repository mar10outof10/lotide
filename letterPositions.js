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

const letterPositions = function(sentence) {
  const positions = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (positions[letter]) {
      positions[letter].push(i);
    } else {
      positions[letter] = [i];
    }
  }

  return positions;
};

// both correctly evaluate to true
// assertArraysEqual(letterPositions("lighthouse in the house")['u'], [7, 20]);
// assertArraysEqual(letterPositions('hello')['e'], [1]);

// Test to assert objects not created yet, coming soon!
// assertObjectsEqual(letterPositions("lighthouse in the house"), { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] })
// assertObjectsEqual(letterPositions('hello'), { h: [1], e: [2], l: [3, 4], o: [5]});