const getEmptyArray = size => {
  if (size >= 0 && Math.floor(size) === size) {
    return Array.from(Array(size));
  }

  return [];
};

export {
  getEmptyArray,
};

