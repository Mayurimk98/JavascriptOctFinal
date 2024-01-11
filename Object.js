

// // let student = ["mayuri", "ram", "sham"]

// // let info = ["sham", "puri", 23, 67]

// // //            0       1     2  3

// // //add/create
// // info.push("english")
// // info.unshift("marathi")

// // //update
// // info[0]="ram"

// // //retrive
// // console.log(info[1])

// // //delete
// // info.pop()


// //firstName
// //lastName
// //age
// //rollNumber


// //key value
// let info1 = {
//     //key :value => property
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     rollNumber: 78
// }
// //CRUD
// //create /add

// //dot notation
// info1.skill="js"
// console.log(info1)

// //bracket notation
// info1['language']="english"
// console.log(info1)

// //retrive

// //dot notation
// console.log(info1.lastName)

// //bracket notation
// console.log(info1['rollNumber'])


// //update
// //dot notation
// info1.firstName="vaibhav"
// console.log(info1)

// //bracket notation
// info1["age"]=90
// console.log(info1)


// //delete
// delete info1.firstName
// console.log(info1)

// delete info1['skill']
// console.log(info1)


let info1 = {
    //key :value => property
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 23,
    rollNumber: 78
}

//console.log(info1["lastName"])

//for in

//to retive keys from object
for (let key in info1) {
    console.log(key)
}

//to retive values from object
for (let key in info1) {
    console.log(info1[key])
}

//to retrive key and value

for (let key in info1) {
    console.log(key, info1[key])
}


let car = {
    color: "red",
    modelno: 1234,
    namee: "Audi",
    color:"black"
}
console.log(car)