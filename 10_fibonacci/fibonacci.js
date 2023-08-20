const fibonacci = function(n) {
    n = parseInt(n);
    if (n <= 0) {
      return "OOPS";
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    let a = 1, b = 1, c;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  };
  
  // Test cases
  console.log(fibonacci(4)); // 3
  console.log(fibonacci(6)); // 8

// Do not edit below this line
module.exports = fibonacci;
