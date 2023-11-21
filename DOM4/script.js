
// <h1 id="std" class="students" name="minskole">Mayuri</h1> 

let byTagName=document.querySelector('h1')
console.log(byTagName)

let byID=document.querySelector('#std')
console.log(byID)

let byClass=document.querySelector('.students')
console.log(byClass)

let byCF=document.querySelector('h1[name="minskole"]')
console.log(byCF)

// <button id="btn">Click Me</button> 

let clickMeBtn=document.querySelector('#btn')
console.log(clickMeBtn)


clickMeBtn.addEventListener('click',function(){
    byCF.textContent="shree Ganesh"
    byCF.textContent=byCF.textContent.toUpperCase()
    byCF.style.color="blue"
    byCF.textContent=byCF.textContent.toLowerCase()

})