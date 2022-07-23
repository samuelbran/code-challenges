const flattening = (array) => {
  return array.reduce((prev, current) => prev.concat(current));
};

module.exports = flattening;
