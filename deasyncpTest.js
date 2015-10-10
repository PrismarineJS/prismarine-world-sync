var deasyncp=require("./dist/deasyncp");
var Promise = require("babel-runtime/core-js/promise")["default"];


function sleep(ms) {
  return new Promise(function(r) {setTimeout(r, ms)});
}

function exampleP(message)
{
  return sleep(1000)
    .then(function(){return message;});
}

var f=deasyncp(exampleP);
var r=f("plop");

console.log(r);

function TestClass()
{
  this.a=5;
}

TestClass.prototype.exampleClassP=function() {
  return exampleP(this.a);
};

var test=new TestClass();

var fClass=deasyncp(test.exampleClassP.bind(test));
var rClass=fClass("plop");
console.log(rClass);