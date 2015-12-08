/*globals exports*/

var fizzbuzz = {
    getResult: function(number) {
        if (number === 0) {
            return 0;
        }
        if (number % 3 === 0) {
            return 'Fizz';
            }
        if (number === 5) {
            return 'Buzz';
        }
        return number;
    }
};

exports.fizzbuzz = fizzbuzz;