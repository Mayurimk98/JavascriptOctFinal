
//conditional statemenet

//if
//if else
//if else if else

//ternary operator


//  student count >5 ==> class start
//  student count <5 ==> wait for 5 min

// let StudentCount = 20
// if (StudentCount > 5) {
//     console.log("Please start the class")
// }
// else {
//     console.log('Wait for 5 min')
// }

//single condition ==> ternary operator
//condition ? true :false

// StudentCount > 5 ? console.log("Please start the class") : console.log('Wait for 5 min')

//==========================================================================
//Switch case
//multiple condition

//1-7

//1==> Monday
//2==> Tuesday
//3==> wednesday
//7 ==> Sunday


//switch case without break
// let day = 4
// switch (day) {
//     case 1:
//         console.log("Monday")
//     case 2:
//         console.log("Tuesday")
//     case 3:
//         console.log("Wednesday")
//     case 4:
//         console.log('Thrusday')
//     case 5:
//         console.log('friday')
//     case 6:
//         console.log("Saturday")
//     case 7:
//         console.log('Sunday')
// }


//switch case with break
// let day = 0
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log('Thrusday')
//         break
//     case 5:
//         console.log('friday')
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log('Sunday')
//         break
// }


//switch case with defalut

let day = 0
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log('Thrusday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Please enter correct day number')
}



//Program 1
//city
//Pune ==> MH
//Ujjain=> MP
//Jaipur=> RJ

// let city ="Pune"
// switch(city){
//     case "Pune":
//         console.log("MH")
//         break
//     case "Ujjain":
//         console.log("MP")
//         break
//     case "Jaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("Invalid state")
// }


let city = "indore"
switch (city) {
    case "Pune":
    case "Nashik":
    case "Dhule":
        console.log("MH")
        break
    case "Ujjain":
    case "indore":
        console.log("MP")
        break
    case "Jaipur":
        console.log("RJ")
        break
    default:
        console.log("Invalid state")
}


//program

let country ="France"
switch (country) {
    case "France":
    case "Spain":
    case "Netherland":
        console.log("This coutry is in Europe")
        break
    case "UK":
    default:
        console.log('This county is not in Europe')
}

//Loop