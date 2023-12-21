
// //Object literal
// let mayuri = {
//     firstName: "mayuri",
//     lastName: "katwe",
//     age: 25,
//     rollNumber: 32,
//     skills: "javascript"
// }

// //CURD
// //add
// mayuri.language = "marathi"
// console.log(mayuri)

// //update
// mayuri['rollNumber'] = 50
// console.log(mayuri)

// //retrive
// console.log(mayuri.lastName)

// //delete
// delete mayuri.firstName
// console.log(mayuri)

// let vaibhav = {
//     firstName: "vaibhav",
//     lastName: "puri",
//     age: 12,
//     rollNumber: 44,
//     skills: "java"
// }

// let ram = {
//     firstName: "ram",
//     lastName: "katwe",
//     age: 27,
//     rollNumber: 66,
//     skills: "SQL"
// }

//100 student
//DRY

//template
//1. function constructor
//2. Es6 class  => class => 2015
//3. Object.create()

//function constructor

// function Human(firstName, lastName, age, rollNumber, skills) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.rollNumber = rollNumber
//     this.skills = skills
// }

// let mayuri = new Human("mayuri", "katwe", 25, 45, "js")
// console.log(mayuri)

// let sham = new Human("sham", "kumar", 34, 67, "selenium")
// console.log(sham)


//Es6 class
//without constructor / with constructor

// class Person {
//     firstName = "mayuri"
//     lastName = "katwe"
//     age = "25"
//     rollNumber = 56
//     skills = "py"
// }
// let dinga = new Person()
// console.log(dinga)

// let pinga=new Person()
// console.log(pinga)

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNumber = undefined
    skills = undefined
}

let sathish = new Person()
console.log(sathish)
sathish.firstName = "sathish"
sathish.lastName = "shete"
sathish.age = 45
sathish.rollNumber = 89
sathish.skills = 'java'
console.log(sathish)

//with consructor
class Student {
    constructor(firstName, lastName, age, rollNo, skill) {
        this.fn = firstName
        this.ln = lastName
        this.ag = age
        this.rNo = rollNo
        this.sk = skill
    }
}
let raviraj=new Student("raviraj",'dhale',31,45,"python")
console.log(raviraj)

let manjiri=new Student("manjiri","kshatriya",56,89,"math")
console.log(manjiri)

