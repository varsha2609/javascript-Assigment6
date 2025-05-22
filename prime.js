let number = 29;
let isPrime = true;
let i = 2;

if (number <= 1) {
  console.log(number + " is neither prime nor composite.");
} else {
  do {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  } while (i <= Math.sqrt(number));

  if (isPrime) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is a composite number.");
  }
}