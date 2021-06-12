// const btn = document.getElementById('btn');
const btn = document.querySelector('#btn')
const enlace = document.querySelector('[href = "https://fitcolatam.com/software"]')

btn.addEventListener('click', () => {

    enlace.style.backgroundColor = "peru";
})
