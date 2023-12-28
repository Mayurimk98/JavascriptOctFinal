
//object literals
let mayuri = {
    firstName: "Mayuri",
    lastName: "Katwe",
    rollNo: 34,
    skills: ["java", "js"],
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(mayuri.displayName)//function
mayuri.displayName()

let sham = {
    firstName: "sham",
    lastName: "Kumar",
    rollNo: 12,
    skills: ["py", "js"],
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

//100 ==> 100 object

//template

//ES6 
//without constructor
//with constructor
//eith function
//set and get keyword


////1. without constructor
// class Person{
//     firstName
//     lastName
//     rollNo
//     skill
//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }

// }

// let mayuriA=new Person()
// console.log(mayuriA)
// mayuriA.firstName="mayuri"
// mayuriA.lastName="katwe"
// mayuriA.rollNo=56
// mayuriA.skill="selenium"
// console.log(mayuriA)
// mayuriA.displayName()

//2. with constructor
// class PersonA {
//     constructor(firstName, lastName, rollNo, skill) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.rollNo = rollNo
//         this.skill = skill
//     }
//     displayName(){
//         console.log(this.firstName,this.lastName)
//     }
// // }

// // let ram=new PersonA("Ram","Varma",121,"Java")
// // console.log(ram)
// // ram.displayName()


// //3. by using function
// class PersonB {
//     setFirstName(fn) {
//         this.firstName = fn
//     }
//     setLastName(ln) {
//         this.lastName = ln
//     }
//     setRollNo(rn) {
//         this.rollNo = rn
//     }
//     setSkill(sk) {
//         this.skill = sk
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

//  let krishna = new PersonB()
//  console.log(krishna)
//  console.log(krishna.firstName)
// krishna.setFirstName("krishna")
// krishna.setLastName("pawar")
// krishna.setRollNo(1234)
// krishna.setSkill("Math")
// console.log(krishna)
// krishna.displayName()
// console.log(krishna.firstName)

// krishna.setFirstName("mayuri")
// console.log(krishna.firstName)

//4. by using keywords 

class PersonC{
    set firstName(fn){
        this.first_Name=fn
    }

    get firstName(){
        return this.first_Name
    }

    set lastName(ln){
        this.last_Name=ln
    }

    get lastName(){
        return this.last_Name
    }

    set rollNo(rn){
        this.roll_No=rn
    }

    get rollNo(){
        return this.roll_No
    }

    set skills(sk){
        this.skill=sk
    }

    get skills(){
        return this.skill
    }

    displayName(){
        console.log(this.first_Name+this.last_Name)
    }
}

let sita=new PersonC()
console.log(sita)
sita.firstName="Sita"
sita.lastName="Kumari"
sita.rollNo=78
sita.skills="python"
console.log(sita)

console.log(sita.firstName)
console.log(sita.skills)
sita.displayName()










