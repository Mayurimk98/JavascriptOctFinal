{/* <h1>Color</h1>
<input type="text">
<button>ChangeMe</button> */}

let h1=document.querySelector('h1')
console.log(h1)
let inputEle=document.querySelector('input')
console.log(inputEle)
let btnEle=document.querySelector('button')
console.log(btnEle)

btnEle.addEventListener('click',function(){
    let inputText=inputEle.value //red
    h1.textContent=inputText
    h1.style.color=inputText
    inputEle.value=""
})