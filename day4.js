

//conditinal statemenet
//// single input ==> mutiple outcome

//10>2  >true (1 outcome)  false (1 outcome)

//if
//if - else
//if- else if -else
//switch case

//syntax==> if

// if(condition){
//     //statemenet
// }

if (10 > 2) {
    console.log('hello')
}
else {
    console.log('bye')
}

//100 => if(false)

//ticket

//1-5 ==> 10 % discount
//6-10 ==> 20 % discount
//>10 ==> 30 % discount

let ticketCount = -1
if (ticketCount > 0 && ticketCount <= 5) {
    console.log('10 % discount')
}
else if (ticketCount > 5 && ticketCount <= 10) {
    console.log('20 % discount')
}
else if (ticketCount > 10) {
    console.log('30 % discount')
}
else {
    console.log('inavid output')
}


//1000
//10 sec  => 30 sec

//20 sec

let marks = 99
if (marks > 90) {
    console.log("best student")
}
else if (marks > 70) {
    console.log('better student')
}
else if (marks > 50) {
    console.log('good student')
}

let a = 100
let b = 20
if (a > b) {
    console.log('A is greater')
}
else {
    console.log('B is greater')
}

let a1 = 1000
let b1 = 2000000
let c1 = 15000
if(a1>b1 && a1>c1){
    console.log('A1 is greater')
}
else if(b1>a1 && b1>c1){
    console.log( 'B1 is greater')
}
else {
    console.log('C1 is greater')
}


