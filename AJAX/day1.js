// program 5
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5 
//     if(a == b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }

// })
// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 6
// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5

//     if(a == b){
//         resolve([11,22,33,44])
//     }
//     else {
//         reject([55,66,77,88])
//     }

// })

// pro2
// .then(function(arr){
//     console.log(arr[0])
// })
// .catch(function(arr){
//     console.log(arr[1])
// })

// program 7
// let pro3 = new Promise(function(resolve,reject){
//     let firstName = "Sarika"
//     if(firstName.startsWith('s')){
//         resolve('starts with s')
//     }
//     else {
//         reject('does not starts with s')
//     }
// })

// pro3
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('I will always execute')
// })

// program 8
// let pro4 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10

//     if(a == b){
//         resolve('hello')
//     }
//     else{
//         reject('bye')
//     }
// })

// pro4
// .then(function(str){
//     console.log(str)
//     return str + "chinmay"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will always execute')
// })