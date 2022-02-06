/* let sum = 0;
for (let i = 5; i >= 1; i--) { // loop er jonno i-- ba --i ekoi
    sum = sum + i;
};
console.log(sum); */

function sum(i) {
    // console.log(i);
    if (i == 1) {
        return 1; // jeta return korbo seta giye last e bosbe
    }
    return i + sum(--i);
}
console.log(sum(5));

// i + sum(--i)
// 5 + sum(4) |(--5)
// 5 + 4 + sum(3) |(--4)
// 5 + 4 + 3 + sum(2) |(--3)
// 5 + 4 + 3 + 2 + sum(1) |(--2)
// 5 + 4 + 3 + 2 + 1 = 15 // jeta return korbo seta ese last e bosbe



// practice : 10 to 1 sum:
function addition(i) {
    if (i == 1) {
        return 1;
    }
    let result = i + addition(--i);
    return result;
};
const num = addition(10);
console.log(num);