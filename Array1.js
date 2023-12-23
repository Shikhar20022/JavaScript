// Array in JavaScript

const myArr = [0, 1, 2, 3, 4, 5]
const myCity = ["New Delhi", "Mumbai"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

// Array Method

myArr.push(6)
myArr.pop()
myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9))    
console.log(myArr.indexOf(8))

const newArr = myArr.join()

console.log(myArr)
// console.log(newArr)

// slice and splice

console.log("A", myArr)

const myn1 = myArr
console.log(myn1)

console.log("B", myArr);
const myn2 = myArr.slice(1,3)
console.log(myn2)

console.log("c", myArr);
const myn3 = myArr.splice(1, 3);
console.log(myn3)



