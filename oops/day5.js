
// //
// age=20
// let human = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 26,
//     display: function () {
//         console.log(this.age)
//     }
// }
// console.log(human.age)//26
// human.display()//error ==> 20 ==> 26

// //==============================================

// //lexical scope => function inside function ==> parent function variable are accessible into child ==> child variable 
// //are not accessible in parent

// function add(){
//     let a=10
//     let b=20
//     console.log(a+b) //30

//     function add1(){
//         let c=100
//         let d=20
//         console.log(c+d) //120
//         console.log(a+b)//30
//         console.log(a+b+c+d)//150

//         function add2(){
//             let e=60
//             let f=2
//             console.log(e+f)//62
//             console.log(a+b+c+d)//150
//             console.log(c+d+e+f)//182
//         }
//         add2()
//     }
//     add1()
// }
// add()

// //============================================

// function init(){
//     let p=3
//     let q=2
//     console.log(p+q)//5
//     //console.log(r+s)//r is not define


//     function initOne(){
//         let r=10
//         let s=12
//         console.log(p+r)//13
//     }

//     initOne()
// }

// init()

// //===========================================


// let e=10
// let f=20
// function display(){
//     let a=5
//     let b=2
//     console.log(a+b) //7
//     console.log(e+f) //30

//     function displayOne(){
//         let c=30
//         let d=20
  
//         console.log(c+d)//50
//         console.log(e+f+c+d) //200

//         function displayTwo(){
          
//             console.log(e+f)//900  => 150  => 30
//         }
//         displayTwo()
//     }
//     displayOne()
// }
// display()


//=========================================================

//closure
// function add(){
//     let a=10
//     let b=20
//     return a+b
//     console.log(a+b+10)
//     console.log("hello")
// }

// let s=add()
// console.log(s)


function add(){
    let a=10
    let b=20
    return function(){
        console.log(a+b)
        console.log(a+b+10)
        console.log("hello")
    }
}

let result=add()
console.log(result)//function
result()
