
let celsius = 25; 
let fahrenheit = 32; 
let i = 0;


let cTimes9 = 0;
while (i < celsius) {
  let j = 0;
  while (j < 9) {
    cTimes9++;
    j++;
  }
  i++;
}


let temp = cTimes9;
let div = 0;
while (temp >= 5) {
  temp = temp - 5;
  div++;
}


fahrenheit = div + 32;

console.log(celsius + "°C is approximately " + fahrenheit + "°F");


let f = 77; 
let tempMinus32 = 0;
let count = 0;

while (count < f - 32) {
  tempMinus32++;
  count++;
}


let multiplyBy5 = 0;
count = 0;
while (count < tempMinus32) {
  let innerCount = 0;
  while (innerCount < 5) {
    multiplyBy5++;
    innerCount++;
  }
  count++;
}

temp = multiplyBy5;
div = 0;
while (temp >= 9) {
  temp = temp - 9;
  div++;
}

console.log(f + "°F is approximately " + div + "°C");
