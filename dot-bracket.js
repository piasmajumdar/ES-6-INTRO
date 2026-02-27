const employee = {
    name: 'John Doe',
    1: 'desk one',
    'home-address': 'Dhaka',
    position: 'Software Engineer',
    salary: 50000,
    
};

// dot notation
console.log(employee.name);
// console.log(employee.1) //won't work
// console.log(employee.home-address); // won't work

// bracket notation
console.log(employee['name']);
console.log(employee[1]);
console.log(employee['home-address']);

const money = employee['salary'];
const key = 'position';

console.log(employee[key]);