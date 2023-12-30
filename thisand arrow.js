// This and Arrow function js

const user = {

    username: "Shikhar",
    RollNo: 45,

     welcomeMessage: function() {
          console.log(`${this.username}, welcome to website`);
     }
}

user.welcomeMessage()
user.username = "Lucky"
user.welcomeMessage()


console.log(this)

function chai() {
   let username = "Shikhar"
   console.log(this.username)

}

// chai()

const chai = () => {
    let username = "Shikhar";
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2



console.log(addTwo(3, 4));