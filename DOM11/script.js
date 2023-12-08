// let a1=document.querySelector('li')
// console.log(a1)


// let a2=document.querySelectorAll('li')
// console.log(a2)

// //odd => yellow
// //even=> red

// for(let i=0;i<a2.length;i++){
//     if(i%2==0){
//        a2[i] .style.color="red"
//     }
//     else{
//         a2[i] .style.color="yellow"
//     }
// }


//id
//name
//class
//tagname

//<h1 id="one" class="two three four" name="nm">Fruit list</h1>
let s1=document.getElementById("one")
console.log(s1) //html ele

let s2=document.getElementsByClassName('three')
console.log(s2)//html colle

let s3=document.getElementsByName("nm")
console.log(s3)//nodelist

let s4=document.getElementsByTagName("h1")
console.log(s4)//html collection

console.log(s1.className)

console.log(s1.classList)

//add()
s1.classList.add('five')
console.log(s1.classList)

//remove()
s1.classList.remove("two")
console.log(s1.classList)

//toggle()

//two ==> toggle ==> two remove
//toggle => two add

s1.classList.toggle("ten") //add
console.log(s1.classList)
s1.classList.toggle("ten")//remove
console.log(s1.classList)

//attribute => value
console.log(s1.getAttribute("name"))

console.log(s1.getAttribute('class'))

s1.setAttribute("text","txt")
console.log(s1)