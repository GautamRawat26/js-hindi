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