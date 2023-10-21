//variables_menu
const buttonMenu = document.querySelector('#menu')
const listModes = document.querySelector('#modes')
const bodyPage = document.querySelector('#bodyPage')

//button_tree_variables
const buttonTree = document.querySelector('#button-tree')
const defaultTree = document.querySelector('#defaultTree')
const greenTree = document.querySelector('#greenTree')

//button_rain_variables
const buttonRain = document.querySelector('#rain-mode')
const defaultRain = document.querySelector('#defaultRain')
const blueRain = document.querySelector('#blueRain')

//button_market_variables
const buttonMarket = document.querySelector('#market-mode')
const defaultMarket = document.querySelector('#defaultMarket')
const yellowMarket = document.querySelector('#yellowMarket')

//button_fire_variables
const buttonFire = document.querySelector('#fire-mode')
const defaultFire = document.querySelector('#defaultFire')
const redFire = document.querySelector('#redFire')

//events_menu
buttonMenu.addEventListener('click', (event) => {

    if (listModes.classList.contains('hidden')) {
        listModes.classList.add('show');
        listModes.classList.remove('hidden');
    } else {
        listModes.classList.add('hidden');
        listModes.classList.add('hiddenEffect')
        listModes.classList.remove('show');
        greenTree.classList.add('hidden')
        defaultTree.classList.remove('hidden')
        blueRain.classList.add('hidden')
        defaultRain.classList.remove('hidden')
        yellowMarket.classList.add('hidden')
        defaultMarket.classList.remove('hidden')
        redFire.classList.add('hidden')
        defaultFire.classList.remove('hidden')
    }

})

buttonTree.addEventListener('click', (event) => {
    if (greenTree.classList.contains('hidden')){
        defaultTree.classList.add('hidden')
        greenTree.classList.remove('hidden')
    } else {
        greenTree.classList.add('hidden')
        defaultTree.classList.remove('hidden')
        
    }
})

buttonRain.addEventListener('click', (event) => {
    if (blueRain.classList.contains('hidden')){
        defaultRain.classList.add('hidden')
        blueRain.classList.remove('hidden')
    } else {
        blueRain.classList.add('hidden')
        defaultRain.classList.remove('hidden')
    }
})

buttonMarket.addEventListener('click', (event) => {
    if (yellowMarket.classList.contains('hidden')){
        defaultMarket.classList.add('hidden')
        yellowMarket.classList.remove('hidden')
    } else {
        yellowMarket.classList.add('hidden')
        defaultMarket.classList.remove('hidden')
    }
})

buttonFire.addEventListener('click', (event) => {
    if (redFire.classList.contains('hidden')){
       defaultFire.classList.add('hidden')
        redFire.classList.remove('hidden')
    } else {
        redFire.classList.add('hidden')
        defaultFire.classList.remove('hidden')
    }
})

window.onclick = (e) =>{
    const targetWindow = e.target
    
    if (targetWindow == bodyPage && listModes.classList.contains('show')){
        listModes.classList.add('hidden');
        listModes.classList.add('hiddenEffect')
        listModes.classList.remove('show');
        greenTree.classList.add('hidden')
        defaultTree.classList.remove('hidden')
        blueRain.classList.add('hidden')
        defaultRain.classList.remove('hidden')
        yellowMarket.classList.add('hidden')
        defaultMarket.classList.remove('hidden')
        redFire.classList.add('hidden')
        defaultFire.classList.remove('hidden')
 }
}