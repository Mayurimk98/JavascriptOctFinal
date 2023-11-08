let y1 = document.querySelector('h1')
console.log(y1)

document.querySelector('h1').addEventListener('click', function () {
    document.querySelector('h1').style.color = "green"
    document.querySelector('h1').textContent="Minskole"
})
