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
