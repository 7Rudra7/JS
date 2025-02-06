function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();
// OP ƒ y() {
//    console.log(a);
//}
// OP 7
// a was in lexical scope on y yet when we returend the function not only the function but its lexical scoep got returened this is nothing but closure.
