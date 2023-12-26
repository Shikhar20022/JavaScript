// const googleUser = new Object()

const { JavaScript } = require("iconsax-react")

const googleUser = {}

googleUser.id = "123dc"
googleUser.name = "Shikhar"
googleUser.isLoggedIn = false

// console.log(googleUser);

const regularUser = {
    email : "shikhar@gmail.com",
    fullname: {
            userfullname: {
                firstname: "Shikhar",
                lastname: "Maurya"
            }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj4 = {5: "e" , 6: "f"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} ,obj1, obj2, obj4)
const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "shikhar@gmail.com",
  },
  {
    id: 1,
    email: "shikhar@gmail.com",
  },
  {
    id: 1,
    email: "shikhar@gmail.com",
  }
]

user[1].email
console.log(googleUser)

console.log(Object.keys(googleUser));
console.log(Object.values(googleUser));
console.log(Object.entries(googleUser))


const course = {
      coursename: " JavaScript",
      price: "999",
      courseInstructor: "hitesh"
}

course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

const navbar = ({company}) => {

}

navbar( company = "hitesh")

const coursedetail = { 
  name : "Shikhar",
  subject : "JavaScript",
  price: "free"
}