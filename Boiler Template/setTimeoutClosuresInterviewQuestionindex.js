function x() {
  var q = 1;
  setTimeout(function () {
    console.log(q);
  }, 3000);
  console.log("Namsaste JavaScript");
}
x();
//OP
// Namsaste JavaScript
// index.js:6
// 1
// JS waits for no one.

function t() {
  for (var i = 1; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
t();
//OP
//5
//5
//5
//5
//<video src="https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13"></video>;

function u() {
  for (let p = 1; p < 5; p++) {
    setTimeout(function () {
      console.log(p);
    }, p * 1000);
  }
}
u();
//1
//2
//3
//4

// Works with let becasue everytime a new copy is created but with var it points to same memory address
