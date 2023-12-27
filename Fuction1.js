// Functions in JavaScript

function myName() {

console.log("S");
console.log("H");
console.log("I");
console.log("K");
console.log("H");
console.log("A");
console.log("R");
}

myName()

function addTwoNumbers(number1 , number2) {

    console.log(number1 + number2);
}

addTwoNumbers(4,5);

function userLoggedIn(username) {
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} is logged in`
}

// console.log(userLoggedIn("Shikhar"))

console.log(userLoggedIn())


