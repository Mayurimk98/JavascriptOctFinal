//function 

//repetation avoid

//1. function without parameter and without return type

function add() {
    console.log(10 + 2)
}
add()
add()
add()
//output same , output cant be reusable

//2. function with parameter and without return type
function add1(a, b) {
    console.log(a + b)
}
add1(20, 5)
add1(30, 2)
add1(50, 3)
add1(100, 20)


//10 rs give  => used  => 10+10 10-5
//10 rs show => cantnot used

//3. function with parameter and with return type
function add2(x, y) {
    return x + y
}
let sum = add2(50, 50)
console.log(sum)
console.log(sum + 20)
console.log(sum - 10)
console.log(sum % 0.1)
//output change , output reused



function mul() {
    console.log(10 + 20)
}
mul()



//keyword
//arithmatic opeartor
//function
//comparision opeartor

//boolean => true/false
//< less than
//> greaterthan
//<= less than equal to
//>=grater than equal to
//== double equal to
//=== triple equal to
//!= not equal to
//!== not double equal to

let a = 20
console.log(typeof a) //number

let b = "20" //string
console.log(typeof b)

//boolean ==> true/false
let c = false
console.log(typeof c)

let d = 'false'
console.log(typeof d)//string


console.log(13 > 20)//false
console.log(7 < 10)//true
console.log(13 >= 13)//true
console.log(25 <= 50) //true
console.log(7 == 7)//true
console.log(7 == '7') //true

//number==string
//== => value check and datatype ignore
//===  => value +datatype
console.log(7 === '7') //false
console.log(10 != '10') //false
console.log(25 !== '25') //true