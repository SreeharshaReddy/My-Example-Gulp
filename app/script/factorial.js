module.exports = (function () {
exports.factorial = function (n) {
        var fact = 1;
        while (n > 1) {
            fact *= n;
            n -= 1;
        }
        return fact;
    };
    return exports;
}());
