const eqArrays = (actualArray, expectedArray) => {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }

  for (const [i, element] of actualArray.entries()) {
    if (Array.isArray(element) && eqArrays(element, expectedArray[i])) {
      continue;
    }
    if (element !== expectedArray[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;