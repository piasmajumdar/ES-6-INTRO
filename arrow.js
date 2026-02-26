console.log(add(10,20));
// function declaration
function add(num1, num2)  {
    return num1 + num2;
}

// console.log(add2(10,70)); //-->Cannot access 'add2' before initialization
// function expression
const add2 = function(num1, num2) {
    return num1 + num2;
}
console.log(add2(10,70));

// Arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(30, 40));

const multiply = (a, b) => a*b;

const tenTimes = x => x*10;
const tenTimes2 = (x) => x*10;

const getPi = () => 3.1416;
const addAll = (a,b,c,d,e,f) => a+b+c+d+e+f;
const isEven = num => num%2 === 0;

const doMath = (num1 , num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum*diff;
    return result;
};

const divide = (p,q)  => p/q;
const diff = (p,q) => p-q;

document.getElementById('btn').addEventListener('click', ()=>{});
document.getElementById('btn').addEventListener('click', (event)=>{});