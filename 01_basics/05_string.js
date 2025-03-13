//String Interpolation

const name = "Gautam"
const repoCount = 50

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


//String Methods
console.log(name[0]); //G
console.log(name.length); //6
console.log(name.toUpperCase()); //GAUTAM
console.log(name.charAt(5)); //m
console.log(name.indexOf('G')); //0
console.log(name.substring(0,4)); //Gaut
console.log(name.slice(0,2)); //Ga (we take negative values as well in slice function)
console.log(name.trim()); //Remove all spaces 