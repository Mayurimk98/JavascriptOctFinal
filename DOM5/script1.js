

// <h1 class="clr">Color</h1>
// <button id="btn">ChangeMe</button>

let ele = document.querySelector('.clr')
console.log(ele)

let clickMeBtn = document.querySelector('button[id="btn"]')
console.log(clickMeBtn)

//textChange
//text upperCase()
//color

clickMeBtn.addEventListener('click', function () {
    ele.textContent = "Ganesh"
    ele.textContent = ele.textContent.toUpperCase()
    ele.style.color = "Blue"

})

// let ele={
//     str:"Mayuri",
//     style:{
//       color:"Black"
//     }

// }

// //Mayuri

// console.log(obj.str)
// obj.str="Vaibhav"

// obj.str=obj.str.toUpperCase()
// //Mayuri=MAYURI