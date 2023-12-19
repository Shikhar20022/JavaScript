// Strings in JavaScript

const name = "Shikhar";
const age = 23;

// console.log("My name is " + name + age)

console.log(`My name is ${name} and my age is ${age}`) // (``template literals)

const gameName = new String('Cri-cke-t86')

console.log(gameName[0])
console.log(gameName.__proto__)  

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(8))
console.log(gameName.indexOf('c'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)


// const newStringOne = " Shikhar ";
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://www.geeksforgeeks.org/";
console.log(url.replace('org', 'com'))


console.log(url.includes('sundar'))

console.log(gameName.split('-'))






