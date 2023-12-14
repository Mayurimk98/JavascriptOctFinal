

//Map==> datatype
//need

//obj => key value => key => string
//map => key value => key any datatype

let a1 = new Map()
console.log(a1)
a1.set("firstName", "mayuri")
a1.set(true, "isMarried")
a1.set(100, "rollNumber")
console.log(a1)

// //size
// console.log(a1.size)

// //has()
// console.log(a1.has(100))

// //get()
// console.log(a1.get("firstName"))

// //delet()
// console.log(a1.delete(true))
// console.log(a1)

// //clear()
// a1.clear()
// console.log(a1)

//forEach()
a1.forEach(function (val, key) {
    console.log(key, val)
})

//keys()
console.log(a1.keys())

//for loop key
for (let key of a1.keys()) {
    console.log(key)
}

//values()
for (let val of a1.values()) {
    console.log(val)
}

//entries()
console.log(a1.entries())
for (let [key, val] of a1.entries()) {
    console.log(key, val)
}


