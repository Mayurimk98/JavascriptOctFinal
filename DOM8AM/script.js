

//Mayuri => ShreeGanesh
//blue
//SHREEGANESH


{/* <h1 id="std" class="student" name="minskole">Mayuri</h1>
<button id="btn">click Me</button> */}

let byTagName = document.querySelector("h1")
console.log(byTagName)

let byId = document.querySelector("#std")
console.log(byId)

let byClass = document.querySelector(".student")
console.log(byClass)

//CF
let byCF = document.querySelector("h1[name='minskole']")
console.log(byCF)

let btnEle = document.querySelector('#btn')
console.log(btnEle)


btnEle.addEventListener('click', function () {
    byCF.textContent = "shreeGanesh"
    byCF.style.color = "blue"
    byCF.textContent = byCF.textContent.toUpperCase()
})

// let student={
//     fn:"mayuri"
// }

// byCF={
//     textContent:"shreeGanesh",
//     style:{
//         color:"black"
//     }
// }
// byCF.textContent="shreeGanesh"
// byCF.style.color="red"
// byCF.textContent=byCF.textContent.toUpperCase()

