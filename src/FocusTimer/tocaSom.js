import './slip-menu.js'
const tocarSom = document.querySelector('.tocarSom')

const listTeclasModes = document.querySelectorAll('.tecla')

function playSom (idElementoStartAudio) {
    tocarSom.classList.add('tocandoSom')
    document.querySelector(idElementoStartAudio).play()
}

function stopSom (idElementoStopAudio) {
    tocarSom.classList.remove('tocandoSom')
    document.querySelector(idElementoStopAudio).pause()
}

 for (let contador = 0; contador < listTeclasModes.length; contador ++){
    
    const teclaMode = listTeclasModes[contador]
    const tagSom = teclaMode.classList[1]
    const idStartAudio = `#som_${tagSom}`
    const idStopAudio = `#som_${tagSom}`


    teclaMode.onclick = function (event) {
        if (tocarSom.classList.contains('tocandoSom')){
            stopSom(idStopAudio)
            return
        }
        playSom(idStartAudio)
}


    //     tocaSom(idStartAudio)

    //     if (teclaMode.classList.contains('tocandoSom')){
    //         stopSom(idStopAudio)
    //     }
    //     console.log(event)
    // }

}

