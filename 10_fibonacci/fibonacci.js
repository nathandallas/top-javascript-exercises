const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    if (n === 0) return 0;

    let firstLast = 1
    let secondLast = 0


    for (let i = 2; i <= n; i++) {
        let current = firstLast + secondLast;

        secondLast = firstLast;
        firstLast = current;

    }
    return firstLast;
};

// Do not edit below this line
module.exports = fibonacci;
