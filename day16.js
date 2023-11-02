
// // //Object

// // let student = {
// //     firstName: "Mayuri",
// //     lastName: "katwe",
// //     rollNumber: 34,
// //     skills: ["java", "python", "cypress"]
// // }

// // //CRUD

// // //retrive => python

// // console.log(student.skills) // ["java", "python", "cypress"]
// // console.log(student.skills[1])

// // //add
// // student["skills"].unshift("typescript")
// // console.log(student)

// // student['city'] = "pune"
// // console.log(student)

// // //update
// // student.city = "nashik"
// // console.log(student)

// // //delete
// // delete student.city
// // delete student['lastName']
// // console.log(student)


// // // let car = {
// // //     color: "white",
// // //     model: "SUV",
// // //     numberPlate: 12345,
// // //     color: "red"
// // // }

// // // console.log(car)


// let student = {
//     firstName: "Mayuri",
//     lastName: "katwe",
//     rollNumber: 34,
//     skills: ["java", "python", "cypress"],
//     isDoingJob: false
// }

// //1 way
// // for in
// //values
// //objectName.key => value
// //objectName[key]=> value


// for (let key in student) {
//     console.log(student[key])//values
// }

// //keys

// for(let key in student){
//     console.log(key)
// }

// //key , value

// for(let key in student){
//     console.log(key, student[key])
// }


//======================================================================

let student = {
    firstName: "Mayuri",
    lastName: "katwe",
    rollNumber: 34,
    skills: ["java", "python", "cypress"],
    isDoingJob: false
}

//print keys

//for of

for (let key of Object.keys(student)) {
    console.log(key)
}

//values

for (let val of Object.values(student)) {
    console.log(val)
}

//key value

for (let [k, v] of Object.entries(student)) {
    console.log(k, v)
}




