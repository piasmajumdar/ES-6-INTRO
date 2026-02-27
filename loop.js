const numbers = [1,2,3,4,5];

// for (const number of numbers) {
//     console.log(number);
// }

const employee = {
    name: 'John Doe',
    1: 'desk one',
    'home-address': 'Dhaka',
    position: 'Software Engineer',
    salary: 50000,
    family: {
        father: 'Richard Doe',
        // mother: {
        //     name: 'Jane Doe',
        //     age: 55,
        // },
    },
    
};

for (const key in employee){
    const value = employee[key];
    console.log(key, value);
}