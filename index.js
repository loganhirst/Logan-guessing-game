console.log('hello world')
const startBtn = document.querySelector('.start-game-btn')
const messageTag = document.querySelector('.message-tag')
const numberInput = document.querySelector('.guessing-input')
const form = document.querySelector('.guessing-form')
const select = document.querySelector('#size')

let number = undefined
let multiplier = 100

function startGame() {
    form.classList.remove('display-none')
    number = Math.floor(Math.random() * multiplier)
    console.log(number)
    messageTag.innerHTML = 'Guess a number'
}

function checkNumber(e) {
    console.log(+numberInput.value === number)
    console.log(+numberInput.value, number)
    e.preventDefault()
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
    console.log(event.target.value)
}

select.addEventListener('change', changeMultiplier)
form.addEventListener('submit', checkNumber)
startBtn.addEventListener('click', startGame)
