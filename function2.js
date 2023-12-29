function calculateCartPrice(...num1) {

    return num1
}
console.log(calculateCartPrice(200,400,600))

const user = {

    username: "Shikhar",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject ({
    username: "sam",
    price: 399,
})
const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 500]))
