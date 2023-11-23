
{/* <h1>Color</h1>
<input type="text">
<button>ChangeMe</button> */}

let h1 = document.querySelector('h1')
let inputText = document.querySelector('input')
let btn = document.querySelector('button')

console.log(h1)
console.log(inputText)
console.log(btn)

btn.addEventListener('click', function () {
    let input = inputText.value  //Red
    h1.textContent = input
    h1.style.color = input
    inputText.value=""
})