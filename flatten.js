const flatten = function(array) {
  let flattenedArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (let flattened of (flatten(element))) {
        flattenedArray.push(flattened);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, [4, [5]]], 6, [7]])); // => [1, 2, 3, 4, 5, 6, 7]