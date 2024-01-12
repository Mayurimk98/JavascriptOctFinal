
//Actual diff between let var const

// let x = 10
// console.log(x)
// x = 200 //update
// console.log(x) //200 
// console.log(x)


// const y = 35
// console.log(y)
// y = 45 //update
// console.log(y)

//Program 1

// {} //block

// let a={} //object empty

//let const ==> block scope

// {
//     let z=20
//     console.log(z) //20
// }
// console.log(z)//z is not defined error

//Program 2
// let y1=100
// {
//     let y1=500
//     console.log(y1)//500
// }
// console.log(y1)//100

//Program3

// let x1 = 50 //200
// {
//     console.log(x1)//50
//     x1 = 200
//     console.log(x1)//200
// }
// console.log(x1)//200

//Program 4
// {
//     const p1=200
// }
// console.log(p1)//p1 is not defined

// let r1
// console.log(r1) //undefined

// console.log(y1)//y1 is not defined

//Program 5
// const k=600
// {
//     console.log(k)//600
//     k=700
//     console.log(k)//assignment to the const varibale
// }
// console.log(k)//600


//Program 6
// {
//     var a=78
// }
// console.log(a)

//let and const having block scope and var dont have block scope

//var having function scope


//Program 8
// var num = 100
// console.log(num)//100
// function add() {
//     var num = 200
//     console.log(num) //200
// }
// console.log(num) //100
// add()
// console.log(num)

//100   100 200 100


// var s1=100
// s1=200
// console.log(s1)

// // let d1=20
// // let d1=30
// // console.log(d1)

// // const u1=200
// // const u1=40

// var g1=30
// var g1=50
// console.log(g1)

//Progarm 9
// var n1 = 37 //350
// console.log(n1)//37
// function init() {
//     n1 = 350//update
//     console.log(n1)//350
// }
// console.log(n1) //37
// init()
// console.log(n1)//350

//37  37  350  350

//program 10
function initOne(){
    var t1=999
    console.log(t1)
}
initOne()
console.log(t1)

//999 error







