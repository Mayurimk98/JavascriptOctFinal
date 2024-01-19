//AJAX ==> Asynchronous javascript

//synchrous javascript => line by line 

// function add1() {
//     console.log('i am add one function')
// }

// function add2() {
//     console.log("i am add two function")
// }

// add2()
// add1()

//i am add two function
//i am add one function

//setTimeout
// function add3() {
//     setTimeout(function () {
//         console.log('I am add 3')
//     }, 2000)
// }

// function add4() {
//     console.log('i am add 4')
// }

// add3() //2 sec
// add4()

//i am add 4
//2 sec
//i am add 3

// synch ==> Asynch => synch

//dependancy

// Multiple user  => get id => user Info

// function getUser() {
//     setTimeout(function () {
//         console.log("Multiple user Created")
//     }, 4000)

//     setTimeout(function () {
//         console.log('Get Id')
//     }, 3000)

//     setTimeout(function () {
//         console.log('render User info')
//     }, 2000)
// }
// getUser()

//render user info
//get id
//multiple user create

//asynch => sych ==> call Back hell ==> promise 

//promise => Es6 js

function getUSer() {
    setTimeout(function () {
        console.log("multiple user created")

        setTimeout(function () {
            console.log("get id")

            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)
    }, 3000)
}

getUSer()

//reused
//tightly couple

//promises => Es6 feature

