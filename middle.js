const middle = array => {
  const length = array.length;
  if (length < 3) {
    return [];
  }
  
  if (length % 2 === 0) {
    return array.slice(length / 2 - 1, length / 2 + 1);
  } else {
    return array.slice(Math.floor(length / 2), Math.ceil(length / 2));
  }

};

module.exports = middle;