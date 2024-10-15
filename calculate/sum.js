//basically module protects variables and functions from another module
var x = "hello world";
var z = "hello world";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

/* es modules pattern */
// export var x = "hello world";

// export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

// module.exports = { x: x, calculateSum: calculateSum };
module.exports = { x, calculateSum };
