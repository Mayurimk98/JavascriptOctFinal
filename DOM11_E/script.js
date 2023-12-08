

//<h1 id="one" class="two three four" name="nm">Minskole</h1>


//id
//CF
//class
//tag
let id=document.querySelector("#one")
let classA=document.querySelector('.two')
let tagName=document.querySelector('h1')
let Cf=document.querySelector("h1[class='two three four']")
console.log(id)
console.log(classA)
console.log(tagName)
console.log(Cf)


console.log(document.querySelector('li'))
let nodeList=document.querySelectorAll('li')
console.log(nodeList)


//even => yellow
//odd=> red
for(let i=0;i<nodeList.length;i++){
   // console.log(nodeList[i])
   console.log(nodeList[i].textContent)
   if(i%2==0){
    nodeList[i].style.color="Yellow"
   }
   else{
    nodeList[i].style.color="red"
   }
}


//id
//name
//tagName/
//class

//<h1 id="one" class="two three four" name="nm">Minskole</h1>
let getId=document.getElementById("one")
console.log(getId) //html Element

// let getClass=document.getElementsByClassName("four")
// console.log(getClass)//html collection

// let getName=document.getElementsByName("nm")
// console.log(getName)//nodeList

// let gettagName=document.getElementsByTagName("h1")
// console.log(gettagName)//html collection

// console.log(getId.className)

// console.log(getId.classList)

//classList method
// //add()
// getId.classList.add("ten")
// console.log(getId)

// //remove()
// getId.classList.remove("two")
// console.log(getId)

//toggle()
//if class present => class remove
//if class not present => class add
getId.classList.toggle("eleven")
console.log(getId)

getId.classList.toggle("eleven")
console.log(getId)


//html element
//getAttribute()
console.log(getId.getAttribute("id"))

console.log(getId.getAttribute("name"))

//setAttribute()
getId.setAttribute("para","pa")
console.log(getId)





