
//Asych => synch

//Call Back hell
//Promises

//getUSer => getId=> getInfo
// function getUsersinfo() {
//     setTimeout(function () {
//         console.log("get multiple users")

//         setTimeout(function () {
//             console.log("get id")

//             setTimeout(function () {
//                 console.log('get user info')
//             }, 2000)
//         }, 3000)
//     }, 4000)
// }

// getUsersinfo()

//ES6 => promises

//Program 1

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10
//     if (a == b) {
//         resolve("Hello")
//     }
//     else {
//         reject("Bye")
//     }
// })
// //promise consume
// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })

//Program 2

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 5
//     if (a == b) {
//         resolve("Hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

// pro.then(function (str) {
//     console.log(str)
// })
//     .catch(function (str) {
//         console.log(str)
//     })

//Program 3

// let pro = new Promise(function (resolve, reject) {
//     let a = 2
//     let b = 2

//     if (a == b) {
//         resolve([11, 22, 33, 44, 55])
//     }
//     else {
//         reject([200, 500, 788, 900])
//     }
// })
// pro
//     .then(function (arr) {
//         console.log(arr[3])
//     })
//     .catch(function (arr) {
//         console.log(arr[2])
//     })

//Progarm 4

// let pro1 = new Promise(function (resolve, reject) {
//     let firstName = "Santhosh"
//     if (firstName.startsWith("S")) {
//         resolve("Yes Its starts with S ")
//     }
//     else {
//         reject("Not starts with S")
//     }
// })

// pro1
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log("I will always executed block")
//     })


//Program 5
// let pro2 = new Promise(function (resolve, reject) {
//     let x = 20
//     let y = 20
//     if (x == y) {
//         resolve("Welcome")
//     }
//     else {
//         reject("Bye")
//     }
// })

// pro2
//     .then(function (str) {
//         console.log(str)//Welcome
//         return str + "Mayuri"
//     })
//     .then(function (str) {
//         console.log(str)
//         return "shreeGanesh"
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log("Always")
//     })

//Asych => sync

function userCreated() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("User Created")
        }, 3000)
    })
    return pro
}

function userId() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Get USer ID")
        }, 2000)
    })
    return pro
}

function userInfo() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("render User Info")
        }, 1000)

    })
    return pro
}

//userCrate, userId, userInfo

// userCreated()
//     .then(function (str) {
//         console.log(str)//USer Created
//         return userId()
//     })
//     .then(function (str) {
//         console.log(str)//get USer ID
//         return userInfo()
//     })
//     .then(function (str) {
//         console.log(str)//Render user info
//     })
//     .catch(function () {
//         console.log("Error")
//     })
//     .finally(function () {
//         console.log("Always executed")
//     })

//Asynch Await

async function getUserInfo() {
    let firstFun = await userCreated()
    console.log(firstFun)
    let secondFun = await userId()
    console.log(secondFun)
    let thirdfun = await userInfo()
    console.log(thirdfun)
}
getUserInfo()





