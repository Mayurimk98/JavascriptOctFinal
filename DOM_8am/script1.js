

let heading=document.querySelector('h1')
console.log(heading)

let btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',function(){
    heading.textContent="Mayuri"
    heading.style.color="red"
})

// let document={
//    textContent:"Student" ,
//    style:{
//     color:"black"
//    }
// }

// document.textContent="mayuri"
// document.style.color="blue"



// let student={
//     firstName:"Mayuri"
// }
// student.firstName="ganesh"