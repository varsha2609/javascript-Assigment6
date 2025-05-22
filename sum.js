let number = 12345;  
let sum = 0;

while (number > 0) {
  let digit = number % 10;
  sum += digit;
  number = (number - digit) / 10;
}

console.log("Sum of digits:", sum);