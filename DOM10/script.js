

//single Element

//<h1 id="tenth" class="two" name="nm">Mayuri</h1>
console.log(document.querySelector("#tenth"))
console.log(document.querySelector(".two"))
console.log(document.querySelector('h1'))
console.log(document.querySelector('h1[name="nm"]'))

//multiple element
let nodeList=document.querySelectorAll('.fruit')
console.log(nodeList)//nodelist => static 

// for(let i=0;i<nodeList.length;i++){
//     // console.log(nodeList[i])
//     //console.log(nodeList[i].textContent)
//     nodeList[i].style.color="blue"
// }


let clickMe=document.querySelector('button')
clickMe.addEventListener('click',function(){
    for(let i=0;i<nodeList.length;i++){
        // console.log(nodeList[i])
        //console.log(nodeList[i].textContent)
        nodeList[i].style.color="blue"
    } 
})


let htmlColle=document.getElementsByClassName('fruit')
console.log(htmlColle) //dynamic

let tagNamehtml=document.getElementsByTagName('li')
console.log(tagNamehtml)

let byName=document.getElementsByName('fr')
console.log(byName)

let byId=document.getElementById('tenth')
console.log(byId)





