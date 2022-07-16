const loopingTriangle = () => {
  const s = "#######";
  let response = "";

  for (let index = 0; index < s.length; index++) {
    response += s.substring(0, index + 1) + "\n";
  }

  return response;
};

module.exports = loopingTriangle;
