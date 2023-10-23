// //array

// //map()
// //filter()
// //reduce()
// //forEach()

// let marks = [56, 89, 34, 56, 78]
// //10 marks grece
// // let add10=marks.map(function(ele,index,array){
// //     return ele+10
// // })
// // console.log(add10)


// // let marks1 = [56, 89, 34, 30, 78]
// // //[89,78]
// // let greater60 = marks1.filter(function (el, index, array) {
// //     return el > 60
// // })
// // console.log(greater60)

// // let marks3 = [56, 89, 34, 56, 78]
// // let sum=marks3.reduce(function (acc, ele, inx, arr) {
// //     return acc + ele
// // }, 0)
// // console.log(sum)


// let arr = ['mayuri', 'sham', 'prashant', 'rahul']
// //welcome mayuri !!

// arr.forEach(function (el, index, arry) {
//     console.log("Welcome " + el + " !!")
// })

//some()
// let score = [34, 78, 90, 23, 56, 89]
// //50 => true
// //<20 =>false
// let y1 = score.some(function (el, index, arr) {
//     // return el>50
//     return el < 20
// })
// console.log(y1)

//every()
// let score = [34, 78, 90, 23, 56, 89]
// let y2=score.every(function(el,index,arr){
//     return el>20
// })
// console.log(y2)

//find()

let marks1 = [23, 67, 89, 78, 100, 25]
//            0    1   2   3   4   5

//el>30 //67
let x1 = marks1.find(function (el, index, arr) {
    return el > 70
})
console.log(x1)

let x2 = marks1.find(function (el, index, arr) {
    return el > 300
})
console.log(x2) //undefined

//findIndex()
let s1 = marks1.findIndex(function (el, indx, arr) {
    return el > 50
})
console.log(s1) //1

let s2 = marks1.findIndex(function (el, indx, arr) {
    return el > 200
})
console.log(s2) //-1

//==================================================
//slice()
//           -9   -8  -7  -6  -5  -4   -3    -2   -1
let scores = [12, 56, 89, 43, 22, 100, 560, 200, 456]
//             0   1   2   3   4   5    6    7    8

//arrayName.slice(startPosition,endPosition)
//endpostion optional
//endposition always less than 1
//left to right
//right to left => blank array


let d1=scores.slice(2,6)
console.log(d1)

let d2=scores.slice(-5)
console.log(d2)

let d3=scores.slice(-3,3)
console.log(d3) //[]

