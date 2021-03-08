const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true for two equal lists", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should return true for two empty lists", () => {
    assert.isTrue(eqArrays([], []));
  });
  it("should return false for two differently ordered lists", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("should return true for two equal lists containing multiple unique data types", () => {
    assert.isTrue(eqArrays([1, 2, "3"], [1, 2, "3"]));
  });
  it("should return true for two equal lists containing nested lists", () => {
    assert.isTrue(eqArrays([1, [2, "3"]], [1, [2, "3"]]));
  });
  it("should return true for two equal lists containing nested empty lists", () => {
    assert.isTrue(eqArrays([1, [2, "3", []]], [1, [2, "3", []]]));
  });
});