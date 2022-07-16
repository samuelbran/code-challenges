(() => {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0) {
      console.log("Fizz");
      if (index % 5 === 0) console.log("FizzBuzz");
    } else if (index % 5 === 0 && index % 3 !== 0) {
      console.log("Buzz");
      if (index % 3 === 0) console.log("FizzBuzz");
    } else {
      console.log(index);
    }
  }
})();
