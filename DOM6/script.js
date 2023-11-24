{/* <h1>Student List</h1>
    <ul>
        <li>Mayuri</li>
        <li>Vaibhav</li>
        <li>Sathish</li>
        <li>Jaya</li>
      <li>Ram</li>
    </ul>
    <input type="text">
    <button>Add Me</button> */}
//Ram


let ulList = document.querySelector('ul')
console.log(ulList)
let input = document.querySelector('input')
console.log(input)
let button = document.querySelector('button')
console.log(button)


button.addEventListener('click', function () {
    let inputText = input.value //Ram
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = inputText //<li>Ram</li>
    ulList.appendChild(newLi)
    input.value = ""

})