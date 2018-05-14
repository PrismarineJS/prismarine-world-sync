const deasync = require('deasync')

function deasyncP (fn) {
  return function () {
    let done = false
    let err
    let res = null

    fn.apply(this, arguments).then(function (r) {
      err = null
      res = r
      done = true
    }, function (e) {
      err = e
      res = null
      done = true
    })
    deasync.loopWhile(function () { return !done })
    if (err) { throw err }

    return res
  }
}

module.exports = deasyncP
