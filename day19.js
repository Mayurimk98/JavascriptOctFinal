let a = 20
console.log(typeof a)

let b = [12, 34, "mayuri"]
console.log(typeof b)//object

let c = {
    a: 20,
    b: 30,
    d: "tea"
}

let student = {
    firstName: "mayuri",
    30: "katwe",
    true: 35,
    null: ["java", "python"],
    family: {
        mother: "jaya",
        father: "mahendra"
    },
    isMarried: true
}

//object => values => datatype

for (let key in student) {
    console.log(typeof (key))
}

//Map 

let a1 = []
let myMap = new Map()
console.log(myMap)

//set() => add property
myMap.set({1:a,b:2},"rollNumber")
myMap.set([1,2,3],"isMarried")
myMap.set(100,90)
console.log(myMap)

// //get() => retrive values

// console.log(myMap.get(123))
// console.log(myMap.get(100))

// //has() => boolean
// console.log(myMap.has(true))
// console.log(myMap.has('firstName'))

// //delete() ==> boolean
// console.log(myMap.delete(123))
// console.log(myMap)

// //clear()
// myMap.clear()
// console.log(myMap)

//size => property
console.log(myMap.size)

let m2=new Map([[[1,2,3],"marks"],[{a:20,b:30},"mayuri"],[true,"isStuding"]])
console.log(m2)








