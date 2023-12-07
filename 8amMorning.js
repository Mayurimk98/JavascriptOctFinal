
//Map()

// let marks=[20,67,90,45,99,56]
// //+5  ==> return array

// //[25,72,95,50,104,61]

// let plus5array=marks.map(function(el,index,array){
//     return el+5
// })
// console.log(plus5array)

//filter()
// let marks=[20,67,90,45,99,56]
// //>50 => [67,90,99,56]
// let greter50=marks.filter(function(el,index,array){
//     return el>50
// })
// console.log(greter50)

//reduce()
// let marks=[2,3,4,5]
// //
// let sum=marks.reduce(function(acc,el,index,array){
//     return acc+el
// },0)
// console.log(sum)

//forEach()

//welcome mayuri
// let student=["mayuri","vaibhav","ram","sham"]
// // for(let i=0;i<student.length;i++){
// //    // console.log(student[i])
// //     console.log(`Welcome ${student[i]}`)
// // }

// student.forEach(function(el,index,arr){
//     console.log(`welcome ${el}`)
// })

//some()
//every()
//sum

let marks=[20,56,89,45,11,10]

//70
// let y1=marks.some(function(el,index,array){
//     return el>50
// })
// console.log(y1)

// let y2=marks.every(function(el,index,arr){
//     return el>5
// })
// console.log(y2)


//find()
let s1=marks.find(function(el,index,arr){
    return el>65
})
console.log(s1)

//findIndex()
let y5=marks.findIndex(function(el,index,arr){
    return el>50
})
console.log(y5)



