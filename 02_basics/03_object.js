 // Object literals

const JsUser = {
    name: "Gautam",
    age: 21,
    location: "Haridwar",
    email: "Gautam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); //correct Approach

// values Overwrite
// JsUser.email = "Gautam@gmail.com"; //Change the email
// Object.freeze(JsUser); // Freeze the object so no changes can be done further

JsUser.greetings = function(){
    console.log(`Hellow Js User, ${this.name}`) //String Interpolation
}

console.log(JsUser.greetings()); //Hellow Js User, Gautam

