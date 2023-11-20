

console.log(document.querySelector('h1'))

console.log(document.querySelector("h1[para='p2']"))

console.log("mayuri")


//<li id=fru class="fruit" name="nm" para="p1">Apple</li>

//By id
let byId=document.querySelector("#fru")
console.log(byId)

//By Class
let byClass=document.querySelector(".fruit")
console.log(byClass)

//By TagName
let byTagName=document.querySelector('li')
console.log(byTagName)

//By Common formula
//Tagnamne[attribute='value']
let byCF=document.querySelector("li[name='nm']")
console.log(byCF)

