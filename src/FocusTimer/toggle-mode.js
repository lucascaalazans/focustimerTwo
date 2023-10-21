const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', (event) =>{
    document.documentElement.classList.toggle('dark')
})

