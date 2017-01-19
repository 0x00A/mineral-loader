const parse = require('mineral/parser')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  return 'module.exports = ' + JSON.stringify(parse(source)) + ';'
}
