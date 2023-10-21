import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

const stop = document.querySelector('.stop')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')

export function toggleRunning() {
    state.isRunning = true
    play.classList.add('hidden')
    pause.classList.remove('hidden')

    timer.contdown()

}

export function togglePause(){
    state.isRunning = false
    pause.classList.add('hidden')
    play.classList.remove('hidden')
}

export function toggleStop() {
    state.isRunning = false
    pause.classList.add('hidden')
    play.classList.remove('hidden')
    timer.updateDisplay()
}

export function togglePlus() {
    let limitMinutes = 25
    let increment = 5
    let minutes = Number(el.minutes.textContent)
    if (minutes < limitMinutes) {
        minutes = minutes + increment
        timer.updateDisplay(minutes)
    } else {
        toggleStop()
        return
    }
   
    console.log(minutes)
}

export function toggleMinus() {
    let limitMinutes = 25
    let decrement = 5
    let minutes = Number(el.minutes.textContent)
    if (minutes <= limitMinutes) {
        minutes = minutes - decrement
        timer.updateDisplay(minutes)
    } if (minutes < 0) {
        toggleStop()
        return
    }   
}