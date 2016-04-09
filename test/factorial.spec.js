module.exports = function () {
    var math = require('./factorial'),
        number;
    if (!process.argv[2]) {
        console.log('Use "node factorial-spec.js <number>" to get the factorial');
        process.exit(0);
    }
    number = process.argv[2];
    console.log(math.factorial(number));
};
module.exports();
