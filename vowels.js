let str = "hello world";  
let vowels = 0;
let consonants = 0;
let i = 0;

while (i < str.length) {
  let ch = str[i];
  
  if (ch >= 'A' && ch <= 'Z') {
    
    ch = String.fromCharCode(ch.charCodeAt(0) + 32);
  }

  
  if (
    ch === 'a' ||
    ch === 'e' ||
    ch === 'i' ||
    ch === 'o' ||
    ch === 'u'
  ) {
    vowels = vowels + 1;
  } else if (
    (ch >= 'a' && ch <= 'z')
  ) {
    
    consonants = consonants + 1;
  }
  
  i = i + 1;
}

console.log("Number of vowels:", vowels);
console.log("Number of consonants:", consonants);
