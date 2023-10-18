

// // //5-1
// // //for loop

// // for(let i=5;i>=1;i--){
// //     console.log(i)
// // }

// // //while loop
// // let i=5
// // while(i>=1){
// //     console.log(i)
// //     i--
// // }


// //for loop => break and continue

// //1-5 => 3 ==>1 2 3
// //after 3 came outside of loop

// // for (let i = 1; i <= 5; i++) { // 2 3
// //     if (i == 3) { //1==3 2==3  3==3
// //         break 
// //     }
// //     console.log(i) //1  2
// // }

// //i=1
// //1<=5
// //2<=5
// //3<=5


// // for (let i = 1; i <= 5; i++) { 
// //     console.log(i) 
// //     if (i == 3) { 
// //         break 
// //     }
// // }

// //continue

// //1-5 --> 3 ==> 1 2 4 5

// for (let i = 1; i <= 5; i++) { //1 2 3 4 5 6
//     if (i == 3) { //1==3  2==3 3==3 4==3 5==3
//         continue
//     }
//     console.log(i) //1 2 4 5
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i == 3) {
//         continue
//     }
// }


//======================================================

//while 1-10 5 break

// let i = 1 //1
// while (i <= 10) { //1<=10 2<=10 3<=10 4<=10 5<=10
//     if (i == 5) { //1==5 2==5 3==5 4==5 5==5
//         break
//     }
//     console.log(i) //1 2 3 4
//     i++ //2 3 4 5
// }

// let i = 1
// while (i <= 10) {
//     console.log(i) //1 2 3 4 5
//     if (i == 5) {
//         break
//     }
//     i++
// }

//continue

//1-5 3 ==> 1 2 4 5

// let i = 1 //1
// while (i <= 5) { //1<=5 2<=5 3<=5  4<=5 5<=5 6<=5
//     if (i == 3) { //1==3 2==3 3==3 4==3 5==3
//         i++ //4
//         continue
//     }
//     console.log(i) //1 2 4 5
//     i++//2 3 5 6
// }

// let i = 1 //1
// while (i <= 5) { 
//     console.log(i) 
//     if (i == 3) { 
//         i++ 
//         continue
//     }
//     i++
// }