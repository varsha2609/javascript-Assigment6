let original = "varsha";
let reversed = ""; 

for (let i = original.length - 1; i >= 0; i--) {
  reversed = reversed + original[i];
}

console.log("Reversed string:", reversed);