const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafickLight = (event) =>{
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextIndex = () =>{
    colorIndex = colorIndex < 2 ? ++colorIndex : colorIndex = 0
}

const stopAutomatic = () =>{
    clearInterval(intervalId)
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const turnOn = {
    'red':    () => img.src = 'image/vermelho.png',
    'yellow': () => img.src = 'image/amarelo.png',
    'green':  () => img.src = 'image/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafickLight)