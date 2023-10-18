// let a = 20
// console.log(typeof a) //number

// //20,30,40

// //let b=20,30,40

// //array

// let y1 = [20, "mayuri", false]

// console.log(typeof y1)//array  //Object

// //object ==> property and method

// let marks = [20, 50, 90, 95, 100,122,55,77,99,99,88,44,33,22,67,89,33,55]
// // index     0    1   2   3   4
// // length    1    2   3   4    5

// // console.log(marks[0]) //20

// // console.log(marks[marks.length-1]) //100

// //last element

// //length-1

// //property => length
// console.log(marks.length) //5-1 //4

// console.log(marks[marks.length-1])

// //firstElement

// arrayName[0]
// marks[0] //first element

// //lastElement
// arrayName[arrayName.length-1] //last element

//length-1 ==> last index 

//index vice ==> 0

//object  => human
//property => height, weight, age, gender, color
//method => talk(), walk(), study()

//method ==> study()
//action => learn something
//return > job, knowdege, marks

// let student=["mayuri","ram","sham","rahul"]

//1. push()
//action => add the element at last
//return => new length

// let s1=student.push("vaibhav")
// console.log(s1)//5
// console.log(student)

//2. unshift()
//action => add the ele at first
//return  => new length

// let s2=student.unshift("manoj")
// console.log(s2) //5
// console.log(student)//[manoj, mayuri,ram,sham,rahul]

//3. pop()
//action => remove the last element
//return  => removed element

// let s3=student.pop()
// console.log(s3)//rahul
// console.log(student)//[mayuri, ram, sham]

//4. shift()
//action => remove ele from first
//return => removed element
// let s4=student.shift()
// console.log(s4) //mayuri
// console.log(student)


//length ==> property

//push() => add ele at last ==> new length
//unshift() => add ele at first => new length
//pop() => removed ele from last => removed ele
//shift() => removed ele from first => removed elem


let student=["mayuri","ram","sham","rahul"]
//             0         1      2     3
//             1         2       3    4

//length ==> property ==> give the count of total number of ele in array
console.log(student.length)//4

//4-1 ==> 3

console.log(student[0]) //mayuri
console.log(student[3])//rahul

console.log(student.length-1 )//last index

console.log(student[student.length-1])//last element







