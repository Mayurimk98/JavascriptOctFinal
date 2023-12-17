
//1- 5 number
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

//1-100

//1- 1 lakh

//loops => repetative operation based on condition

//for loop  => duration 
//while loop => duration is not known
//do while loop

//for
// for(initialization;conditioncheck;incre/decre){
// //statemenets
// }

//1- 5 number
// for (let i = 1; i <= 5; i++) { //2 3 4 5 6
//     console.log(i) //1 2 3 4 5
// }

//i =2

//1<=5 
//2<=5 
//3<=5
//4<=5
//5<=5
//6<=5

// for(let i=5;i<=50;i++){
//     console.log(i)
// }

//i++ => i=i+1
//2 table
//2  4 6 8  20 => 2 diff
// for (let i = 2; i <= 20; i = i + 2) {
//     console.log(i)
// }

// //10 table 
// //100 90 80
// for (let i = 100; i >= 10; i = i - 10) {
//     console.log(i)
// }

// //welcome 6 times
// for (let i = 1; i <= 6; i++) {
//     console.log("welcome")
// }

//while loop

// initialized
// while(condition){
//     //statement

//     //incre/decre
// }

//1-10
// let i = 1
// while (i <= 10) {
//     console.log(i)

//     // i++
//     i = i + 1
// }

//8 table
// let j = 8
// while (j <= 80) {
//     console.log(j)

//     j = j + 8
// }

// //3 table reverse

// let k = 30
// while (k >= 3) {
//     console.log(k)

//     k = k - 3
// }


//for break and continue

//1 -5 3 => 1 2
// for (let i = 1; i <= 5; i++) { //2 3
//     if (i == 3) { //1==3 2==3 3==3
//         break
//     }
//     console.log(i) //1 2
// }
//i =1
//1<=5
//2<=5
//3<=5


// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i == 3) {
//         break
//     }
// }//1 2 3


//1 -5  3 => 1 2 4 5  => conitue


// for (let i = 1; i <= 5; i++) { //2 3 4 5 6
//     console.log(i) //1 2 3 4 5
//     if (i == 3) { //1==3 2==3 3==3 4==3 5==3
//         continue
//     }
// }

// for (let i = 1; i <= 5; i++) { 
//     if (i == 3) { 
//         continue
//     }
//     console.log(i)
// }

//while break and continue

// let i = 1
// while (i <= 5) {
//     console.log(i)
//     if (i == 3) {
//         break
//     }
//     i++
// }

let j = 1
while (j <= 5) { //1<=5 2<=5 3<=5  4<=5 5<=5 6<=5
    if (j == 3) { //1==3 2==3 3==3  4==3 5==3
        j++ //4
        continue
    }
    console.log(j) //1 2 4 5
    j++//2 3 5 5
}
// 1 2

