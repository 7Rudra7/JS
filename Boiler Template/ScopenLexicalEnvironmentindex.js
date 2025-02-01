function a() {
  console.log(b);
}
var b = 10;
a();
//OP 10

function a() {
  var b = 10;
}

a();
console.log(b);
//OP not defined.
