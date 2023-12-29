// Local scope and Global scope

var a = 10
let b = 200
const c = 30

// console.log(a);
// console.log(b);
// console.log(c);

if(true) {

    var a = 10
    let b = 20
    const c = 30
    console.log("let Inner a is : ", a)

}

console.log(a)
console.log(b)
console.log(c)


function one(){
    const username = "Shikhar"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    // two()
}

one()


if(true){
    const username = "Shikhar "

    if(username === "Shikhar"){
        const website = "youtube"
        console.log(username + website);

    }
    // console.log(website)
}

// console.log(username)


// ++++++++++++++ Interesting+++++++++++++

function addone(num){
       return num + 1
}

console.log(addone(3))


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))