//Conversion
let score = "33"
console.log(typeof score); //String

let valueInNumber = Number(score)// change type of string in Number
console.log(typeof valueInNumber)



let score2 = "33abc"
console.log(typeof score2); //String

let valueInScore2 = Number(score2) // converted to Number
console.log(typeof valueInScore2); // Number but what about 'abc'
console.log(valueInScore2); //NaN(Not a Number)

// 1 => True ; 0 => False
// "" => False
// "Gautam" => True



//OPERATIONS

let value = 3
let negValue = -value
console.log(negValue) // -3

// console.log(2+2) //add
// console.log(2-2) //Subs
// console.log(2*2) //Multiply
// console.log(2/2) //Divide
// console.log(2%2) //Modulous
// console.log(2**2) //Power

let str1 = "Gautam"
let str2 = " Rawat"

let str3 = str1 + str2
console.log(str3); //Gautam Rawat

console.log("1" + 2) //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32
console.log(1 + "2" + 2) //122


let count = 100
++count ;
console.log(count)
