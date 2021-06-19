const Validator = require('./validator');

let valid_number = new Validator();
console.log(valid_number.isNumber(11));
console.log(valid_number.isNumber("notanumber"));