
//
let mayuri = {
    fn: "mayuri",
    ln: "katwe",
    displayName: function () {
        console.log(this.fn + this.ln)
    }
}

let vaibhav = {
    fn: "vaibhav",
    ln: "katweM",
    displayName: function () {
        console.log(this.fn + this.ln)
    }
}

//function constructor
//es6 class
//object.create()


//es6 class
//without constructor
//with constructor
//with function
//get and set keywords

// class Student {
//     firstName
//     lastName
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let dinga = new Student()
// console.log(dinga)
// dinga.firstName = "Dinga"
// dinga.lastName = "Puri"
// dinga.displayName()


// class StudentA {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     show() {
//         console.log(this.firstName + this.lastName)
//     }
// }
// let ranga=new StudentA("ranga","kumar")
// console.log(ranga)
// console.log(ranga.show)//function
// ranga.show()


// class StudentB {
//     firstNameSet(firstName) {
//         this.firstName = firstName
//     }
//     lastNameSet(lastName) {
//         this.lastName = lastName
//     }
//     displayFullName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let pinga = new StudentB()
// console.log(pinga)
// pinga. firstNameSet("Pinga")
// pinga.lastNameSet("Kumarii")
// console.log(pinga)
// pinga.displayFullName()

//set and get keyword

class StudentC {
    set firstName(fn) {
        this.fn = fn
    }
    get firstName() {
        return this.fn
    }

    set lastName(ln) {
        this.ln = ln
    }

    get lastName() {
        return this.ln
    }

    showName() {
        console.log(this.fn + this.ln)
    }
}

let mayurik=new StudentC()
console.log(mayurik)
mayurik.firstName="Mayuri"
mayurik.lastName="Katwe"
console.log(mayurik)









