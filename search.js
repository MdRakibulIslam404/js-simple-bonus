const products = [
    { name: "iPhone 14 phone", price: 70000 },
    { name: "samsung galaxy 14", price: 60000 },
    { name: "dell laptop", price: 50000 },
    { name: "lenovo yoga laptop", price: 55000 },
    { name: "Asus afsus laptop 1", price: 35000 },
    { name: "smart watch samsung", price: 7000 },
    { name: "apple watch", price: 20000 },
    { name: "plus one phone 4", price: 27000 },
];

function breakContinue(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product)
        }
    }
    return result;
}
const matched = breakContinue(products, "phone");
console.log(matched);