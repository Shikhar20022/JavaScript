// Stack (Primitive)   Heap (NonPrimitive)

let myName = "Shikharmaurya"

let anothername = myName;

anothername = "Luckymaurya"

console.log(myName);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    name: 'User One',
}

let userTwo = userOne;

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)