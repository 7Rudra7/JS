console.log(b); // undefined
console.log(a); // Uncaught refrence error because of let. Trying to access 'a' before initializaion, Temporal dead zone
let a = 10;
var b = 100;
