const parse = require('mineral/parser')
const stringify = require('json-stringify-safe')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  this.value = [source]
  return 'module.exports = ' + stringify(parse(source)) + ';'
}
