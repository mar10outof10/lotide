const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  it("should return every element after the first of an array", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("should return undefined for an empty erray", () => {
    assert.deepEqual(tail([]), []);
  });
});