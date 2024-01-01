

//inheritance

//super class => parent class
// sub class=> child class
//extends

//single level => 1 parent 1 child
//multi level => more than 2
//heratical=> 1 parent mutiple child


//Parent and child without constructor
// class GrandFather {
//     surName = "Katwe"
//     money = 2000
//     displyMoney() {
//         console.log(`I have ${this.money}`)
//     }
// }

// class Father extends GrandFather{
//     //2 property
//     //1 method
//     home ="ShreeNiwas"
//     displayHome(){
//         console.log(`I have my own home name ${home}`)
//     }
// }

// let Waman=new GrandFather()
// console.log(Waman.surName)
// console.log(Waman.money)
// console.log(Waman.home) //no
// Waman.displyMoney()

// let Sham=new Father()
// Sham.money
// Sham.surName
// Sham.home
// Sham.displyMoney()
// Sham.displayHome()


//Multi level
class GrandFather{
    constructor(surName,money){
        this.surName=surName
        this.money=money
    }
    displayMoney(){
        console.log(this.money)
    }
}

class Father extends GrandFather{
    constructor(surName,money,home){
       super(surName,money) 
       this.home=home
    }
    displayHome(){
        console.log(this.home)
    }
}

class Son extends Father{
    constructor(surName,money,home,car){
        super(surName,money,home)
        this.car=car
    }
    displayCar(){
        console.log(this.car)
    }
}

let vaibhav=new Son("Katwe",30000,"Nivas","Audi")
console.log(vaibhav.surName)
console.log(vaibhav.car)
console.log(vaibhav.money)
console.log(vaibhav.home)
vaibhav.displayMoney()
vaibhav.displayHome()
vaibhav.displayCar()


//herarichal

//1 parent => multi child

class Mother{
    constructor(surName,money){
        this.surName=surName
        this.money=money
    }
    displayMName(){
        console.log(this.surName)
    }
}

class Son extends Mother{
    constructor(surName,money,sName){
       super(surName,money) 
       this.sName=sName
    }
    displaySName(){
        console.log(this.sName)
    }
}

class Doughter extends Mother{
    constructor(surName,money,dName){
        super(surName,money)
        this.dName=dName
    }
    displayDName(){
        console.log(this.dName)
    }

}

let mayuri =new Doughter("Katwe",50000,"Mayuri")
mayuri.surName
mayuri.money
mayuri.dName
mayuri.displayMName()
mayuri.displayDName()

let vaibhava =new Son("Katwe","400040","vaibhav")
vaibhava.surName
vaibhava.money
vaibhava.sName
vaibhava.displayMName()
vaibhava.displaySName()



//whatsapp
//texing
//multimedia => texing
//calling => multimedia => texing

class Whatsapp1{
    texing(){
        console.log('I am texing feature')
    }
}

class Whatsapp2 extends Whatsapp1{
   multimedia() {
    console.log('i am multimedia feature')
   }
}

class Whatsapp3 extends Whatsapp2{
    //texing 
    //multimedia
    calling(){
        console.log('i am calling feature')
    }
}