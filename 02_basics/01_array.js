const myArr = [0, 1, 2, 3, 4, 5 , true , "Gautam"];
const myHeroes = ["Shaktiman" , "Iron Man"]

const myArr2 = new Array(1 ,3 ,4, 5)
console.log(myArr[2]);

//Array Methods 
myArr.push(6)
console.log(myArr); // add 6 at Last 

myArr.pop() ; //Remove last value
myArr.unshift(4); // Add 4 at beginning
myArr.shift(); //Remove Starting Value


console.log(myArr.includes(9)); // Check whether the array consist of 9 or not
console.log(myArr.indexOf(3)) // Give the index of 3
myArr.join(); // convert array to string format

//slice and splice

console.log("A" , myArr) // A [ 0, 1, 2, 3, 4, 5, true, 'Gautam' ]

//slice
const myn1 = myArr.slice(1, 3);
// Purpose: Creates a shallow copy of a portion of an array and returns a new array.
// Does not modify the original array.
console.log(myn1); // [ 1, 2 ]
console.log("B" , myArr);  // B [ 0, 1, 2, 3, 4, 5, true, 'Gautam' ]

//splice
const myn2 = myArr.splice(1 ,3);
//Purpose: Changes the contents of an array by removing, replacing, or adding elements in place.
//Modifies the original array
console.log(myn2); //[ 1, 2, 3 ]
console.log("c", myArr); // c [ 0, 4, 5, true, 'Gautam' ]

