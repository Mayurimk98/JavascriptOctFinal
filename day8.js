
// // let a = "shreeGanesh"
// // console.log(typeof a) //string

// // let b = "20"
// // console.log(typeof b)//string

// // let c = true
// // console.log(typeof c)//boolean

// // let d = 30
// // console.log(typeof d)//number

// //30,40,50

// //more than one of any datatype

// //array => datatype

// // let s = [20, 40, 80, 56,"mayuri",true]

// //javascript => object

// //person => object
// //property height , weight color gender, fullanme, age
// //method => talk(), walk(), study(), gym()

// //gym()
// //action => exercise
// //return  => health, weight loss, weight gain

// //array => object
// //propety
// //method => action
// //    return

// // let score = [99, 95, 100, 83, 56]
// // console.log(typeof score) //object

// let score = [99, 95, 100, 83, 56]
// //index      0   1    2    3   4
// //length     1   2    3    4   5

// console.log(score[2])//100

// console.log(score[4])//56

// console.log(score[0])//99

// //property => length => gives the total number of ele present in array
// console.log(score.length) //5

//(length-1)==> last index

//first ele
//score[0] => first ele

//last ele
// score[4]
// score[score.length-1]

//methods

// let fruits = ["apple", "banana", "mango"]

//1. push()
//action => add the ele at last
//return  => new lenegth

// let y1=fruits.push("orange")
// console.log(y1) //4
// console.log(fruits)

//2. unshift()
//action => add ele at first
//return => new length
// let y2 = fruits.unshift('chiku')
// console.log(y2) //4
// console.log(fruits)

//3. pop()
//action => remove ele from last
//return => removed ele
// let y3=fruits.pop()
// console.log(y3)//mango
// console.log(fruits)



let fruits = ["apple", "banana", "mango"]
//4. shift()
//action => remove ele from first
//return => removed ele

let y4 = fruits.shift()
console.log(y4) //apple
console.log(fruits)

//5.includes()
//action => check given ele present in array or not is present true else false
//return => boolean
// let marks = [45, 67, 89, 90, 12, 35, 60]
// let y6 = marks.includes(65)
// console.log(y6)

// let y7=marks.includes(90)
// console.log(y7)//true


//6. indexOf()
//action => gives the index of given element if found else -1
//return => numebr
// let marks = [45, 67, 89, 90, 12, 35, 60]
// //index       0   1   2   3   4   5   6

// let y7=marks.indexOf(90)
// console.log(y7) //3

// let y8=marks.indexOf(80)
// console.log(y8)

//           0   1   2    0    1    2   3     0  1  2   3  4
let arr = [[11, 22, 55], [99, 77, 102, 334], [9, 6, 7, 2, 1]]
//             0                 1                 2

//[[],[],[]]
//  0  1  2

//7 print

console.log(arr[2][2])//7

console.log(arr[1][2])//102

console.log(arr[0][0])//11

//7. flat()
//action => gives the singl array from multidimentioanl array
//return=> array
//[11,22,55,99,77,102,334,9,6,7,2,1]

let y9=arr.flat()
console.log(y9)

//1. push()
//2. pop()
//3. unshift()
//4. shift()
//5. indexOf()
//6. includes()
//7. flat()













