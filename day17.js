let student = [
    {
        firstName: "Mayuri",
        lastName: "katwe",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks:50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks:100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks:75
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks:35
    }
]

//let a=[{},{},{}]
console.log(student.length)//3

//FirstName:Mayuri
student.forEach(function (el) {
    console.log(`FirstName: ${el.firstName}`)
})

//Mayuri:2
//Vishal:3
//Sathish :4
student.forEach(function (el) {
    //console.log(el.firstName,el.skills)
    console.log(el.firstName + " : " + el.skills.length)
})

// console.log(student[0].firstName)

//country=india
student.forEach(function (el) {
    el.country = "India"
})
console.log(student)


// let a={
//     s1:10,
//     s2:20
// }
// //s3:30
// a.s3=30

// student.forEach(function(el){
//     el.skills.push("playwrite")
// })
// console.log(student)


//city => nashik => firstName
// student.forEach(function (el) {
//     if (el.city == "nashik") {
//         console.log(el.firstName)
//     }
// })

// student.forEach(function (el) {
//     if (el.city.includes("nashik")) {
//         console.log(el.firstName)
//     }
// })

// let y1=student.filter(function(el){
//     return el.city=="nashik"
// })
// console.log(y1)//array
// y1.forEach(function(el){
//     console.log(el.firstName)
// })

// student.filter(function(el){
//     return el.city=="nashik"
// }).forEach(function(el){
//     console.log(el.firstName)
// })

//marks >50 => student

let r1=student.filter(function(el){
    return el.marks>50
})
console.log(r1)

//marks <50 ==> student => 10 marks grace => 25+10
//marks>50
//student firstName




