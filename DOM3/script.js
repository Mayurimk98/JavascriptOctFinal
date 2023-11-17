// <h1 id="std" class="seventh" name="nm" >Student</h1>

//4 ways to find element

//1 way ==> by Tagname//4
let byTagName=document.querySelector("h1")
console.log(byTagName)

//2 Way=> by using id(#) //1
let byId=document.querySelector('#std')
console.log(byId)

//3 way ==> by using class(.)//2
let byClass=document.querySelector(".seventh")
console.log(byClass)

//4 way ==> by using common formula
//tagName[attribiute='value']

let CF=document.querySelector("h1[name='nm']")//3
console.log(CF)