//Loops

//1- 5 print

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//1-100  ==> possible

//1-10000 => possible

//1-100000 =>  time waste, effort, memory


//function => 
//Loop ==> repetative opeartor based on condition

//for loop
//while loop

// for(initialized;conditionCheck;incremenet/decrement){
//     //statemenets
// }

//1-5 print

// for (let i = 1; i <= 5; i++) { //2 3 4 5 6
//     console.log(i)  //1 2 3 4 5
// }

//i=1


//1<=5 ==> true
//2<=5 ==> true
//3<=5 ==> true
//4<=5 ==> true
//5<=5 ==> true
//6<=5 ==> false


//5-1
// for (let i = 5; i >= 1; i--) {
//     console.log(i)
// }

//5 table 
// 5 10 15  ....50

// 5+5 => 10
//10+5 => 15

// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i)
// }

// for (let i = 50; i >= 5; i = i - 5) {
//     console.log(i)
// }

// //welcome => 5 time
// for (let i = 0; i < 5; i++) {
//     console.log("welcome")
// }


//====================================
//while loop

// initialized
// while(condition){
//     //statemenet
//     //increemnet/decremenet
// }

//1-5 number
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }

//10-1 number
let j = 10
while (j >= 1) { //10>=1  9>=1 8>=1 7>=1 6>=1 5>=1 4>=1 3>=1 2>=1 1>=1 0>=1
    console.log(j) //10 9 8 7 6 5 4 3 2 1
    j-- //9 8 7 6 5 4 3 2 1 0
}

//11 table

let k = 11
while (k <= 110) {
    console.log(k)
    k = k + 11
}

//1-5 addition==> 
//for loop
//while loop

let sum = 0 //1 //3 //6 //10 //15
for (let i = 1; i <= 5; i++) {
    sum = sum + i
}
console.log(sum)

//0+1 => 1
//1+2 => 3
//3+3 => 6
//6+4 => 10 
//10+5 => 15

let sumOne = 0
let i = 1
while (i <= 5) {
    sumOne = sumOne + i
    i++
}

console.log(sumOne)

//for continue break
//while continue break

