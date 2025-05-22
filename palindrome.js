let str = "madam"; 
let isPalindrome = true;
let start = 0;
let end = str.length - 1;

while (start < end) {
  if (str[start] !== str[end]) {
    isPalindrome = false;
    break;
  }
  start = start + 1;
  end = end - 1;
}

if (isPalindrome) {
  console.log(str + " is a palindrome.");
} else {
  console.log(str + " is not a palindrome.");
}