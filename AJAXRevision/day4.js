
//there is not dependancy ==> paraller execution

//1. Promise.all()
//2. Promise.race()
//3. Promise.any()
//4. Promise.allsettl()

//Promise.all() => shortcircuit at first reject state

// async function PromiseAll() {
//     let condition = await Promise.all([
//         Promise.resolve("Hey"),
//         Promise.reject("Bye"),
//         Promise.resolve("Hello"),
//         Promise.reject("good bye"),
//     ])
//     console.log(condition)
// }
// PromiseAll()


//Promise.race() => whoever reached first give that api response

// function one() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Hello")
//         },3000)
//     })
// }

// function two() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Hii All")
//         }, 1000)
//     })
// }


// async function PromiseRace(){
//     let race=await Promise.race([
//         one(),
//         two()
//     ])
//     console.log(race)
// }
// PromiseRace()


//Promise.allsettle()=> execute both resolve and reject
// async function PromiseAllsettle() {
//     let aa = await Promise.allSettled([
//         Promise.resolve("Hii"),
//         Promise.reject("Bye"),
//         Promise.resolve("GM"),
//         Promise.reject("GN"),
//     ])
//     console.log(aa)
// }

// PromiseAllsettle()


//Promise.any() => short circuit at first resolve state

async function PromiseAny() {
    let outPut = await Promise.any([
        Promise.reject('Bye'),
        Promise.resolve("Hello"),
        Promise.resolve("Hey")
    ])
    console.log(outPut)
}
PromiseAny()
