const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userWinsDisplay = document.getElementById('user-wins');
const userLossesDisplay = document.getElementById('user-losses');
const userDrawsDisplay = document.getElementById('user-draws');
let userChoice
let computerChoice
let result
let userWin = 0;
let userLoss = 0;
let userDraw = 0;
//e means event
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }

    if (randomNumber === 3) {
        computerChoice = 'Paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    getResult();
}

function getResult() {
    if (computerChoice === userChoice) {
    result = 'its a draw!'
    userDraw++
} if (computerChoice === 'Rock' && userChoice === 'Scissors' || computerChoice === 'Scissors' && userChoice === 'Paper' || computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'you lose!'
    userLoss++
} if (computerChoice === 'Scissors' && userChoice === 'Rock' || computerChoice === 'Paper' && userChoice === 'Scissors' || computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'you win!'
    userWin++
}
resultDisplay.innerHTML = result;
userWinsDisplay.innerHTML = userWin;
userLossesDisplay.innerHTML = userLoss;
userDrawsDisplay.innerHTML = userDraw;
}