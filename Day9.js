
//array

let a = []
let b = 20

let marks = [23, 56, 78, 90, 36]
//+2
//[25,58,80,92,38]

let Plus2 = []
for (let i = 0; i < marks.length; i++) {
    // console.log(i)
    Plus2.push(marks[i] + 2)
}

console.log(Plus2)

//map()
//action => perform the action with each ele of arary
//return => new array
let plusTwo = marks.map(function (element, index, array) {
    return element + 2
})
console.log(plusTwo)



// function sum(){
//     console.log(10+10)
// }
// sum()

let numbers = [25, 67, 12, 35, 10, 70, 10]
//>25 find

//[67,35,70]

// let greater25 = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 25) {
//         greater25.push(numbers[i])
//     }
// }
// console.log(greater25)

//filter()
//action => filterout the element based on given condition
//return => array
// let above25 = numbers.filter(function (el, inx, arry) {
//     return el > 25
// })
// console.log(above25)

let arr = [2, 3, 4, 5] //14
let sum = 0 //2 //5 //9 //14
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
//0+2 => 2
//2+3=> 5
//5+4=> 9
//9+5=> 14
console.log(sum)

//reduce()
let sumEle = arr.reduce(function (acc, el, index, array) {
    return acc + el
}, 0)

console.log(sumEle)


let student = ["mayuri", "vaibhav", "prashant", "ram", "ravi", "raja"]
//Welcome mayuri !!
//Welcome vaibhav !1
//Welcome prashant !!
//Welcome ram !!

for (let i = 0; i < student.length; i++) {
    console.log("Welcome " + student[i] + " !!")
}

//forEach()
student.forEach(function (el, index, arr) {
    console.log("Welcome " + el + " !!")
})

//Some()
//kuch
//[1,2,3,4,5] //yes
let mark1 = [2, 3, 4, 5, 6, 7]
let ouput = mark1.some(function (el, index, arr) {
    return el > 3
})
console.log(ouput)


//Every()
//har koi //no
// mark1











