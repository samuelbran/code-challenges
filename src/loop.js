const loop = (value, test, update, body) => {
  for (value; test(); update()) {
    body();
  }
};

module.exports = loop;
