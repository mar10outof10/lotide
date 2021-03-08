const { assert } = require('chai');
const middle = require('../middle');


describe('#middle', () => {
  it("should return the middle 2 elements of an even length array", () =>{
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return the single middle element of an odd length array", () =>{
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return an empty array if the array length is less than 3", () =>{
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return a properly nested array if the middle elements are nested", () =>{
    assert.deepEqual(middle([1, [2, 2], 3]), [[2, 2]]);
  });
  it("should return a properly nested array if the middle elements are nested", () =>{
    assert.notDeepEqual(middle([1, [2, 2], 3]), [2, 2]); //expected should be nested
  });
});