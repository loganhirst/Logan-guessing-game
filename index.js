
const startBtn = document.querySelector('.start-game-btn')
const messageTag = document.querySelector('.message-tag')
const numberInput = document.querySelector('.guessing-input')
const form = document.querySelector('.guessing-form')
const select = document.querySelector('#size')
const gameSizeMessage = document.querySelector('.game-size-message')

let number = undefined
let multiplier = 100

function startGame() {
    gameSizeMessage.innerHTML = `Guess between 0 and ${multiplier}`
    form.classList.remove('display-none')
    number = Math.floor(Math.random() * multiplier)
    messageTag.innerHTML = 'Guess a number'
}

function checkNumber(e) {
    e.preventDefault()
    if (numberInput.value === '') return
    if (+numberInput.value === number) {
        messageTag.innerHTML = `YOU WIN! THE ANSWER WAS ${number}`
        form.classList.add('display-none')
    } else if (+numberInput.value < number) {
        messageTag.innerHTML = `Your guess was too low (${numberInput.value})`
    } else if (+numberInput.value > number) {
        messageTag.innerHTML = `Your guess was too high (${numberInput.value})`
    }
    numberInput.value = ''
}

function changeMultiplier(event) {
    multiplier = +event.target.value
}

select.addEventListener('change', changeMultiplier)
form.addEventListener('submit', checkNumber)
startBtn.addEventListener('click', startGame)
