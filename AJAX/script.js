
//GetUser  => getID => getInfo

//list of user
function getUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data
        })
}

function singleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            return res.data
        })
}

function createHTML(el) {
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}

// getUsers(2)
//     .then(function (res) {
//         let id = res[1].id
//         return singleUser(id)
//     })
//     .then(function (res) {
//         let singleUser=res
//         createHTML(singleUser)

//     })


//=====================================

//async await


async function getUsersInfo(pageNo) {
    let users = await getUsers(pageNo)
    let id = users[1].id
    let singleuserEle = await singleUser(id)
    createHTML(singleuserEle)
}
getUsersInfo()

// let a=[{id:1},{id:2},{id:3}]
// a[1].id
