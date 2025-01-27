// Hoisting in JS
printName();
console.log(x);
console.log(printName);
var x = 7;
function printName() {
  console.log("Hello World");
}

//Output
// Hello World
// undefined
// ƒ printName() {
//   console.log("Hello World");
// }

// Memeory is allocated in first phase
// A arrow function if used is treated a vaiable and only memory allocation is done in phase one and fuction itself is not stored.

// Arrow function
var getName = () => {
  console.log("I am arrow");
};
