console.log("2" > 1) //true
console.log(null > 0) //FAlse
console.log(null == 0) // False
console.log(null >= 0) // True
// Reason is == or > , < , >= , <= work differently
// comparision convert null to a number , treating it as 0
// Thats why null>= 0 is true and null> 0 is False

// === strict check (checks values as well as Datatypes)

