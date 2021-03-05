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
    if (Array.isArray(actualArray[i])) {
      if (!eqArrays(actualArray[i], expectedArray[i])) {
        return false;
      }
    } else if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }

  return true;
};

// Returns true if both keys have identical value
// Returns false otherwise
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {

      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }

    } else if (typeof(object1[key]) === 'object') {

      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};
// All assertions should pass.
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: { a: "1" }, d: ["2", 3] };
const dc = { d: ["2", 3], c: { a: "1" } };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const abc2 = { a: { b: "3", c: "5" }, b: [2, 3], c: 5 };
const cba = { c: 5, b: [2, 3], a: { b: "3", c: "5" } };
assertEqual(eqObjects(abc2, cba), true);
const cba2 = { c: 5, b: [2, 3], a: { b: "3", d: "5" } };
assertEqual(eqObjects(abc2, cba2), false);
const cba3 = { c: 5, b: [2, 3], a: { b: "4", d: "5" } };
assertEqual(eqObjects(abc2, cba3), false);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); 
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); 