
let fn = "Mayuri"
console.log(typeof fn)

let gn = []
console.log(typeof gn) //Object


let ln = ""
console.log(typeof ln)//string

//String => Object
//property methods
//method
//action
//return

let city = "Nashik"

//  N   a   s   h   i   k
//  0   1   2   3   4   5
//  1   2   3   4   5   6

console.log(city[5]) //k

console.log(city[2])//s

//Length => property
console.log(city.length)

//last element
console.log(city[city.length - 1])

//Methods
//1. toUpperCase()
//action => convert all char od string into capitle case
//return => new String

let firstName = "mayuri"
let y1 = firstName.toUpperCase()
console.log(y1)

//2. toLowerCase()
//action => convert all char into small case
//return => new String

let city1 = "MumBai"
let y2 = city1.toLowerCase()
console.log(y2)

//3. indexOF()
//action=> return index of given char /-1
//return  => number

// let FirstName1 = "Shree Ganesh"
// //S  h   r   e   e      G   a   n   e   s   h
// //0  1   2   3   4   5  6   7   8    9  10  11
// console.log(FirstName1.length)
// let y3 = FirstName1.indexOf('e')
// console.log(y3)

// let y5=FirstName1.indexOf(" ")
// console.log(y5)

//4. includes()
//action => check whether given char or subString presnt in string or not if present true else false
//return  ==> boolean

// let FirstName1 = "Shree Ganesh"
// let y6=FirstName1.includes('s')
// console.log(y6)//true

// let y7=FirstName1.includes('ree G')
// console.log(y7)

// let y8=FirstName1.includes('Sree')
// console.log(y8)

//5. StartsWith()
//action => check whether string starts with given char or subString
//return => boolean

// let FirstName1 = "Shree Ganesh"
// let w1=FirstName1.startsWith('h')
// console.log(w1)

// let w2=FirstName1.startsWith('Sh')
// console.log(w2)

//6. EndSWith()
//action => check whether string ends with given char or subString
//return => boolean

let FirstName1 = "Shree Ganesh"
let w1=FirstName1.endsWith('h')
console.log(w1)

let w2=FirstName1.endsWith('Ganesh')
console.log(w2)

let w3=FirstName1.endsWith('ee Gansh')
console.log(w3)

"Shree Ganesh"
//Shree
//Ganesh

//ee Gane
//nesh





