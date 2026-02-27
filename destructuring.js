// const product = {
//     name: 'iPhone',
//     price: 799,
//     description: 'A smartphone by apple'
// };

// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;


// const product = { name: 'iPhone', price: 799, brand: 'apple'};
price = 555; // we can't declare price later. That's why we've set price:phonePrice
const {name, price: phonePrice, camera = '12mp'} = { name: 'iPhone', price: 799, brand: 'apple', camera: '48mp'};
console.log(phonePrice,camera);


const [first, second] = [10, 20];
console.log(first, second);

// const [height, weight] = numbers; //expect numbers is an array here

const person3 = {
    name: 'Pia',
    address: {
        city: {
            mainCity: 'Manikganj',
            location: 'Sadar City'
        },
        district: 'Dhaka',

    }
}

const {city} = person3.address;
console.log(city);
const city2 = person3.address.city;
console.log(city2);



employees = [
    {
        name: 'alex',
        age: '45'
    },
    {
        name: 'Olex',
        age: '55'
    },
    {
        name: 'Ulex',
        age: '65'
    }
];

// Object destructuring in loops
for(let {name, age} of employees){
    console.log(`${name} is ${age} years ols!!`);
}