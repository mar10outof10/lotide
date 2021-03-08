const { assert } = require('chai');
const head = require('../head');

describe("#head", () => {
  it("should return the first element of an array", () => {
    assert.equal(head([1, 2, 3]), 1);
  });
  it("should return undefined for an empty erray", () => {
    assert.equal(head([]), undefined);
  });
});