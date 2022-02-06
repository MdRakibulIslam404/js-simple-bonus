// 4! = 4 * 3 * 2 * 1
/* let factorial = 1;
for (let i = 4; i >= 1; i--) {
    factorial = factorial * i;
};
console.log(factorial); */

// with recursion
// decrement
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
};
console.log(factorial(4));

// increment
function fact(i) {
    if (i == 5) {
        return 5;
    }
    // const result = i * fact(++i)
    // return result;
    return i * fact(++i); // jeta return korbo seta giye last e bosbe
};
const facto = fact(1);
console.log(facto);

// i * fact(++i)
// 1 * fact(2) |(++1)
// 1 * 2 fact(3) |(++2)
// 1 * 2 * 3 fact(4) |(++3)
// 1 * 2 * 3 * 4 fact(5) |(++4)
// 1 * 2 * 3 * 4 * 5 = 120 // jeta return korbo seta ese last e bosbe