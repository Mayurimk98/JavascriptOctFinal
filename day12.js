//String

let fn = "mayuri"
//1. toUpperCase()
//2. toLowerCase()
//3. includes()
//4. indexOf()
//5. startSWith()
//6. endsWith()


//7. trim()
//action=> remove the space from start and end
//return => new string
// let city = "  pune  "
// console.log(city.length)
// let u1=city.trim()
// console.log(u1)
// console.log(u1.length)

//8. trimStart()
//action => remove the space from start
//return => new string
// let city = "  pune  "
// console.log(city.length)
// let u2=city.trimStart()
// console.log(u2)
// console.log(u2.length)

//9. trimEnd()
//action => remove the space from last/end
//return => new string

// let city = "  pune  "
// console.log(city.length)
// let u3=city.trimEnd()
// console.log(u3)
// console.log(u3.length)//6

//10. slice()

let city="Nashik"

//-6  -5  -4   -3  -2  -1
//N    a   s   h   i   k
//0    1   2   3   4   5

//left to right
//right to left ==> blank string

// stringName.slice(startPostion, endPosition)

// //endPosition optional
// //endposition -1

// console.log(city.slice(3)) //hik

// console.log(city.slice(-3,-1)) //hi

// console.log(city.slice(-3,-6)) //""

// console.log(city.slice(-3,3)) //""


//array  method=> string return

// let arr=["m", "k"]
// //mk
// //join("")

// console.log(typeof(arr.join("")))

//string => split() ==> array return

let firstName="mayuri" 
let y1=firstName.split("")
console.log(y1)

let y2=firstName.split('a') //["m","yuri"]
console.log(y2)

let fn1="Mayuri mahendra katwe"
console.log(fn1.split(" "))

//trim()
//trimStart()
//trimEnd()
//slice()
//split()//array

//100$00
//$ ==> [100,00]
//arr[0] //100
