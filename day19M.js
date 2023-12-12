//MAP

//Object
//Array
//String
//Number
//Undefined
//Null
//NaN
//Boolean
//Class

// let student = {
//     firstName: "Mayuri",
//     family: {
//         Father: "Mahendra",
//         sibling: 1
//     },
//     1000: true,
//     true: ["java", "js", "py"],
//     rollNumber: 500,
//     age: undefined
// }

// for(let key in student){
//     console.log(typeof(key))
// }

//Object => key value
//string => any datatype

//MAP==> key value
//any datatype ==> any datatype

let myMap = new Map()
console.log(myMap)

//1. Set() => add property
let val=[1,2,3]
let val1={a:20,b:30}
myMap.set(val,"rollNumber")
myMap.set(val1,"object")

myMap.set(true,"isMarried")
console.log(myMap)

//get(key) => retive

let a=myMap.get(val1)
console.log(a)
console.log(myMap.get(true))

//has(key)
console.log(myMap.has(true))
console.log(myMap.has("rollNumber"))

//delet() => boolean
console.log(myMap.delete(val))
console.log(myMap)

//clear()
myMap.clear()
console.log(myMap)


let myMap2=new Map([[true,"isDoingJob"],["firstName","mayuri"],[200,"rollNo"]])
console.log(myMap2)


