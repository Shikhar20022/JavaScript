// Objects in JavScript

// objects literals

const jsUser = {
    name: "Shikhar",  
    "full name": "Shikhar Maurya",
    age: 18,
    location: "New Delhi",
    email: "shikharmaurya@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])


jsUser.email = "shikhar@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "shikhar86@gamil.com"
console.log(jsUser)
   
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

 
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());