
// // let names1 = ["mayuri", "ram", "sham", "krishna"]
// // //            0        1      2      3


// // for (let i = 0; i < names1.length; i++) {
// //     // console.log(i)
// //     console.log(names1[i])
// // }


// // for (let i = names1.length - 1; i >= 0; i--) {
// //     console.log(names1[i])
// // }

// let firstName = "shree Ganesh"
// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName[i])
// }

// console.log("=====================================")

// for (let i = firstName.length - 1; i >= 0; i--) {
//     console.log(firstName[i])
// }

// console.log("===================================")

// let fruit="apple"
// console.log(fruit.split("").reverse().join(""))

//================================================




//join -> array ==> string
//split=> string => array



// let fruit = "apple"
// let str = "" //a //pa //ppa //lppa //elppa
// for (let i = 0; i < fruit.length; i++) {
//     //console.log(fruit[i])
//     str = fruit[i] + str
//     //       a+"" => a
//     //       p+a=> pa
//     //      p+pa=> ppa
//     //      l+ppa=> lppa
//     //      e+lppa=>elppa
// }
// console.log(str)

// //a+"" => a
// //p+a => pa
// //p+pa=> ppa
// //l+ppa => lppa
// //e+lppa=> elppa


// let fn = "shree Ganesh"
// let rev = ""
// for (let i = 0; i < fn.length; i++) {
//     rev = fn[i] + rev
// }

// // s+"" => s
// //h+s=> hs
// //r+hs=> rhs
// //e+rhs=> erhs
// //e+erhs=> eerhs
// //" "+eerhs=> ' eerhs'
// //G+' eerhs'=> G eerhs
// console.log(rev)


let fruit = "apple"
let str = ""
for (let i = fruit.length - 1; i >= 0; i--) {
    str = str + fruit[i]
}
console.log(str)

//=====================================

let fn1="mayuriRao"
// a e i o u
//a u i a o => 5

//5

