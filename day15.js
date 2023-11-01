
//arr information ek student
//rollNumber
//age
//firstName
//lastName
// let info = ["kumari", "kumar", 45, 89]
//index 


//array

//object 

let obj={}

let a={}

//object ==> key and value
//key +value => property
// let information={
//     firstName:"kumari",
//     lastName:"kumar",
//     age:45,
//     rollNumber:89
// }

//CURD
//create/add
//update
//retrive/fetch
//delete

//create /add
// let info = ["kumari", "kumar", 45, 89]
// // info.push("mayuri")
// // info.unshift("ram")
// // console.log(info)

// //update
// // info[0]="mayuri"
// // console.log(info)

// // //retrive
// // console.log(info[3])

// //delete
// info.shift()
// info.pop()
// console.log(info)


let information={
    firstName:"kumari",
    lastName:"kumar",
    age:45,
    rollNumber:89
}

//dot notation
//bracket notation

//create/add
information.city="nashik"
console.log(information)

information["skill"]="js"
console.log(information)

//update
information.age=90
console.log(information)

information['lastName']="patil"
console.log(information)

//retrive/fetch
console.log(information.firstName)

console.log(information['rollNumber'])

//delete

delete information.firstName
console.log(information)

delete information['rollNumber']
console.log(information)







