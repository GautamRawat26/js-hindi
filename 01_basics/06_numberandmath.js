const score = 400
const balance = new Number(100)
console.log(balance);


console.log(balance.toString()); //convert number to string
console.log(balance.toFixed(2)); //100.00

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


console.log(Math.abs(-4)); //give absolute value from negative to positive
console.log(Math.round(4.6)); // 5
console.log(Math.min(4,6,3,8)); //find minimum of an array '3'
console.log(Math.max(4,7,8,3)); // find max of an array '8'
console.log(Math.random); //print random values from 0-1



console.log((Math.random()*10)+1); //Print values b/w 1-9 no 0


const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max -min +1)) + min ); // Gives values between 10-20
