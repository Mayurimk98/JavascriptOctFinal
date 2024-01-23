// let userInfo = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


//Problem 1
// userInfo.data.forEach(function(el){
//     //console.log(el)
//     document.write(`<h1>${el.id}</h1>`)
//     document.write(`<h1>${el.first_name}</h1>`)
//     document.write(`<h1>${el.last_name}</h1>`)
//     document.write(`<h1>${el.email}</h1>`)
//     document.write(`<img src=${el.avatar}>`)

// })

//===================================================================


//Problem 2
// function getUsers() {
//     fetch(`https://reqres.in/api/users?page=1`)
//         .then(function (res) {
//             return res.json()
//         })
//         .then(function (res) {
//             //console.log(res.data)
//             res.data.forEach(function (el) {
//                 document.write(`<h1>${el.id}</h1>`)
//                 document.write(`<h1>${el.first_name}</h1>`)
//                 document.write(`<h1>${el.last_name}</h1>`)
//                 document.write(`<h1>${el.email}</h1>`)
//                 document.write(`<img src=${el.avatar}>`)
//             })
//         })
// }
//getUsers()

//======================================================

//Problem 3
// let buttonEle=document.querySelector('button')
// buttonEle.addEventListener('click',function(){
//     getUsers()
// })


//======================================================

//Problem 4
//GetUSer ==> GetId=> getInfo


function getListUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data //[{},{},{}]
        })
}


function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data //{}
        })
}

function renderHtml(el) {
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)

}

//getListUser(2)
// .then(function (res) {
//     let id = res[3].id
//     return getSingleUser(id)
// })
// .then(function (res) {
//     let singleUserInfo=res
//     renderHtml(singleUserInfo)
// })

// async function Userinfo(){
//     let dataArr=await getListUser(1)
//     let info=await getSingleUser(dataArr[4].id)
//     renderHtml(info)
// }


// Userinfo()

async function showUserInfo() {
    let listUser = await getListUser(2)
    let singleUserObj = await getSingleUser(listUser[3].id)
    renderHtml(singleUserObj)
}
//showUserInfo()

let btn=document.querySelector("button")
btn.addEventListener('click',function(){
    showUserInfo()
})


