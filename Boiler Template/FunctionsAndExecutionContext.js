var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log("inside function a : " + x);
}
function b() {
  var x = 100;
  console.log("inside function b : " + x);
}
//output
// inside function a : 10
// inside function b : 100
//  1
