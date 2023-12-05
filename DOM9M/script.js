
// //Program1
// //   <h1 id="one">Minskole</h1>
// let a1=document.querySelector('#one')
// console.log(a1)

// let a2=document.getElementById("one")
// console.log(a2)


// //Program2
// //  <p class="two">Welcome All</p>
// let byClass=document.querySelector(".two")
// console.log(byClass)

// let singleEle=document.querySelector('.fruit')
// console.log(singleEle)

let multiEle=document.querySelectorAll(".fruit")
//console.log(multiEle) //nodelist

//Program3
// for(let i=0;i<multiEle.length;i++){
//     console.log(multiEle[i])
// }

// let clickMeBtn=document.querySelector('button')
// clickMeBtn.addEventListener('click',function(){
//     for(let i=0;i<multiEle.length;i++){
//         //console.log(multiEle[i])
//         multiEle[i].style.color="red"
//     }
// })

//Program 4
//  <h1 id="one">Minskole</h1>

// let byTagName=document.querySelector('h1')
// console.log(byTagName)

// let byHtmlCollection=document.getElementsByTagName('h1')
// console.log(byHtmlCollection)

// let h1=document.getElementsByTagName('li')
// console.log(h1) //html collection => dynamic

// let n1=document.querySelectorAll('li') 
// console.log(n1)//nodelist ==> static 

//Program5
let g1=document.getElementsByClassName('vegetable')
console.log(g1)//htmlcollection

let g2=document.getElementsByName('fr')
console.log(g2)//nodelist


