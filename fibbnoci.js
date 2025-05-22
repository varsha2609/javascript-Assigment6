let n = 10;
let a = 0, b = 1, nextTerm;
let count = 1;

console.log("Fibonacci Series:");

while (count <= n) {
  console.log(a);
  nextTerm = a + b;
  a = b;
  b = nextTerm;
  count++;
}