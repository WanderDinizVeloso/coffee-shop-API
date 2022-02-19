const { PARSE_INT_RADIX } = require('../../utils/magicNumbers');

module.exports = (string) => parseInt(string, PARSE_INT_RADIX);
