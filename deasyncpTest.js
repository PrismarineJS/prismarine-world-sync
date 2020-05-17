const deasyncp = require('./dist/deasyncp')
const Promise = require('babel-runtime/core-js/promise').default

function sleep (ms) {
  return new Promise(function (resolve) { setTimeout(r, ms) })
}

function exampleP (message) {
  return sleep(1000)
    .then(function () { return message })
}

const f = deasyncp(exampleP)
const r = f('plop')

console.log(r)

function TestClass () {
  this.a = 5
}

TestClass.prototype.exampleClassP = function () {
  return exampleP(this.a)
}

const test = new TestClass()

const fClass = deasyncp(test.exampleClassP.bind(test))
const rClass = fClass('plop')
console.log(rClass)
