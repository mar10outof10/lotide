const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  it("Should return every element after the first of an array", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("Should return undefined for an empty erray", () => {
    assert.deepEqual(tail([]), []);
  });
});