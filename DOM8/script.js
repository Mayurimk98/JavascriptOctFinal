

// let ulList = document.querySelector('ul')
// let inputBox = document.querySelector('input[type="text"]')
// let addMeBtn = document.querySelector('#admebtn')

let upbtn=document.querySelector('.Up')
console.log(upbtn)

// console.log(ulList)
// console.log(inputBox)
// console.log(addMeBtn)


// //Step 1

// addMeBtn.addEventListener('click', function () {
//     let inputText = inputBox.value //Grapes
//     let newLiEle = document.createElement('li') //<li></li>
//     newLiEle.textContent = inputText //<li>Grapes</li>
//     ulList.appendChild(newLiEle)
//     inputBox.value=""
// })

// //Step 2
// function createButton(newLi){
//     // <button class="Remove">remove</button>
//     // <button class="Up">up</button>
//     // <button class="Down">down</button>

    let removeBtn=document.createElement('button') //<button></button>
    removeBtn.textContent="remove" //<button>remove</button>
    removeBtn.className="Remove" //<button class="Remove">remove</button>
    newLi.appendChild(removeBtn)

// }