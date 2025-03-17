const marvel_heros = ["Thor" , "Ironman" , "Spiderman"];
const dc = ["Superman", "Flash" , "Batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros);// [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][2]) ; //Batman

// const heroes = marvel_heros.concat(dc);
// console.log(heroes); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Same as Concat we use Spread method

const all_Heroes = [...marvel_heros, ...dc];
console.log(all_Heroes); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// to solve array inside array inside array to a single array we use FLAT("depth");
const another_array = [1 , 2 , [3,4,5] ,6 , 7 ,[8 , 9,[10,11]]];
const solved_another_array = another_array.flat(Infinity);
console.log(solved_another_array);//[1, 2, 3, 4,  5,6, 7, 8, 9, 10,11]


//convert objects ,strings etc to array
console.log(Array.from("Gautam")); //[ 'G', 'a', 'u', 't', 'a', 'm' ]
console.log(Array.isArray("Gautam")) //false (string)


// Make array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
