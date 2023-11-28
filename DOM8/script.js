

let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input[type="text"]')
let addMeBtn = document.querySelector('#admebtn')

// let upbtn=document.querySelector('.Up')
// console.log(upbtn)

console.log(ulList)
console.log(inputBox)
console.log(addMeBtn)


//Step 1

addMeBtn.addEventListener('click', function () {
    let inputText = inputBox.value //Grapes
    let newLiEle = document.createElement('li') //<li></li>
    newLiEle.textContent = inputText //<li>Grapes</li>
    //Step 3
    createButton(newLiEle)
    ulList.appendChild(newLiEle)
    inputBox.value = ""
})


//Step 4
ulList.addEventListener('click', function (event) {
    //console.log(event.target.tagName)
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "Remove") {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            ulEle.removeChild(liEle) //remove given li from ullist
        }
        else if (event.target.className == "Up") {
            let liEle = event.target.parentElement
            let prevLi = liEle.previousElementSibling
            let ulEle = liEle.parentElement
            if (prevLi) {
                ulEle.insertBefore(liEle, prevLi)
            }
        }
        else if(event.target.className == "Down"){
            let liEle=event.target.parentElement
            let nextLi=liEle.nextElementSibling
            let ulEle=liEle.parentElement
            if(nextLi){
                ulEle.insertBefore(nextLi,liEle)
            }
        }
     
    }
})











// Step 2
function createButton(newLi) {
    // <button class="Remove">remove</button>
    // <button class="Up">up</button>
    // <button class="Down">down</button>

    let removeBtn = document.createElement('button') //<button></button>
    removeBtn.textContent = "remove" //<button>remove</button>
    removeBtn.className = "Remove" //<button class="Remove">remove</button>
    newLi.appendChild(removeBtn)

    let upBtn = document.createElement('button') //<button></button>
    upBtn.textContent = "up" //<button>up</buttonn>
    upBtn.className = "Up" //<button class="Up">up</button>
    newLi.appendChild(upBtn)

    let downBtn = document.createElement('button')
    downBtn.textContent = "down"
    downBtn.className = "Down"
    newLi.appendChild(downBtn)
}