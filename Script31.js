// let s1 = "ganesh"

// let s2 = ["ram", "sham"]


// //one person info store
// //firstName
// //lastName
// //age
// //rollNo
// let arr = ["kiran", 'kumar', 29, 45]
// //index

// //object
// //index XX
// //key value

// let y0=[]
// let y1={}

// let student={
//     //key:value =>property
//     firstName:"kiran",
//     lastName:"Kumar",
//     age:29,
//     rollNumber:45
// }

//key 

let arr = ["kiran", 'kumar', 29, 45]
//1. retrive/fetch
console.log(arr[0])
console.log(arr[3])

//2. update
arr[0] = "mayuri"
console.log(arr)

arr[2] = 50
console.log(arr)

//3. add
arr.push("radha")
console.log(arr)

//100
arr.unshift(100)
console.log(arr)

//4. delete
arr.shift()
console.log(arr)

arr.pop()
console.log(arr)

//object
//add/create, retrive,update,delete  => CURD

let student = {
    //key:value =>property
    firstName: "kiran",
    lastName: "Kumar",
    age: 29,
    rollNumber: 45
}

//CRUD
//dot notation
//bracket notation

//1. create/add
//dot notation
student.city="pune"
console.log(student)

//bracket notation
student['skill']="javascript"
console.log(student)

//2. retrive/fetch
//dot notation
console.log(student.lastName)
console.log(student.rollNumber)

//bracket notation
console.log(student["firstName"])

//3. Update
//dot notation
student.firstName="Radhe"
console.log(student)

//barcket notation
student["age"]=90
console.log(student)

//4. delete
//dot notation
delete student.firstName
console.log(student)

//bracket notation
delete student["rollNumber"]
console.log(student)



