const names = ['Marko', 'Nikola', 'Djordje', 'Stefan']

names.sort();

console.log(names);

// sort converts numbers to strings
const numbers = [52, 24, 523, 64, 3]

numbers.sort();

console.log(numbers);

// ============================

numbers.sort(compareFunction);

function compareFunction(a, b) {
    // if return is <0, then a comes first
    // if retun is 0, nothing happens
    // if return is >0, then b comes first

    return a-b;

}

console.log(numbers);

const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }
];

products.sort((a, b) => {
    return a.price - b.price;
});

console.log(products);