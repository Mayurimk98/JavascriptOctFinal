
//Actual diff between arrow function and function expression

//type of function
//function declaration
//function expression
//arrow function

// let greeting = function () {
//     console.log("welcome")
// }

// let greeting =  () =>{
//     console.log("welcome")
// }

// function greeting(){
//     console.log("welcome")
// }


// let add = (a, b) => a + b

// let sum = add(10, 2)
// console.log(sum)


// let greet = greeting => greeting


// let x = 10
// console.log(x) //10  => block
// console.log(window.x) //undefined

// //window

// var y=20 //window //globle
// console.log(y) //20
// console.log(window.y) //20


//progarm 1

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//          console.log(this==person) //true
//         console.log(this.firstName + this.lastName) //MayuriKatwe

//         function greeting() {
//             //this==window
//             console.log(this==person) //false
//             console.log(this==window)//true
//             console.log(`Welcome ${this.firstName}`) //WelcomeUndefined
//         }

//         greeting()
//     }

// }
// console.log(person.info) //print
// person.info()//call


//Program 2
// var firstName="Vaibhav"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person)//true
//         console.log(this.firstName + this.lastName)//mayurikatwe

//         let greeting = function () {
//             //this==window
//             console.log(this == person)//false
//             console.log(this == window) //true
//             console.log(`Welcome ${this.firstName}`) //welcome undefined
//         }

//         greeting()
//     }

// }
// console.log(person.info) //print
// person.info()//call


//program 3
// var firstName="Vaibhav"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person)//true
//         console.log(this.firstName + this.lastName)//mayurikatwe

//         let greeting = ()=> {
//             console.log(this == person)//true
//             console.log(this == window) //false
//             console.log(`Welcome ${this.firstName}`) //welcome Mayuri
//         }

//         greeting()
//     }

// }
// console.log(person.info) //print
// person.info()//call


//Program 4

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: ()=> {
//         console.log(this == person)//false
//         console.log(this==window)//true
//         console.log(this.firstName + this.lastName)//undefined+undefined=>NaN

//         let greeting = ()=> {
//             console.log(this == person)//false
//             console.log(this == window) //true
//             console.log(`Welcome ${this.firstName}`)  //welcome undefined
//         }

//         greeting()
//     }

// }
// console.log(person.info) //print
// person.info()//call


let person = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 25,
    info: function() {
        console.log(this == person)//true
        console.log(this==window)//false
        console.log(this.firstName + this.lastName)//MayuriKatwe

        let greeting = ()=> {
            console.log(this == person)//true
            console.log(this == window) //false
            console.log(`Welcome ${this.firstName}`)  //welcome Mayuri
        }

        greeting()
    }

}
console.log(person.info) //print
person.info()//call
