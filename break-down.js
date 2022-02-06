const products = [
    { name: "iPhone 14 phone", price: 70000 },
    { name: "samsung galaxy 14", price: 6000 },
    { name: "dell laptop", price: 50000 },
    { name: "lenovo yoga laptop", price: 55000 },
    { name: "Asus afsus laptop 1", price: 5000 },
    { name: "smart watch samsung", price: 7000 },
    { name: "apple watch", price: 9000 },
    { name: "plus one phone 4", price: 27000 },
];

function breakContinue(products) {
    const result = [];
    for (const product of products) {
        if (product.price < 10000) {
            continue;
        }
        result.push(product);
    }
    return result;
}
const br = breakContinue(products);
console.log(br);