/**
 * responsive nav bar toogle action
 */
let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/**
 * create a new task in the reward table
 * when clicking on the 'add' button
 */
function newTask() {
    let table = document.getElementById('table');
    let task = document.getElementById('task-name').value;
    let star = document.getElementById('star-div').innerHTML;
    let newRow = table.insertRow(1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);

    cell1.innerHTML = task;
    cell2.innerHTML = star;
    cell3.innerHTML = star;
    cell4.innerHTML = star;
    cell5.innerHTML = star;
    cell6.innerHTML = star;
    cell7.innerHTML = star;
    cell8.innerHTML = star;
}

/*
function newTask() {
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);

    cell1.innerHTML = task;
}*/


 /**
 * Count the number of star icons checked
 */
function update() {
    document.getElementById('count').innerHTML = 
    document.querySelectorAll('#checkboxes input[type="checkbox"]:checked').length
}

 /**
 * star game logic
 */

 // variables
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

// add event listeners to clicked buttons and display user choice and result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    starsEarned()
}))

// generates random number for computer choice and assigns the number a string
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
      }
      if (randomNumber === 2) {
        computerChoice = 'scissors'
      }
      if (randomNumber === 3) {
        computerChoice = 'paper'
      }
      computerChoiceDisplay.innerHTML = computerChoice
}

//gets the result of game
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!';        
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!';
        incrementScore();        
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!';
        incrementWrongScore();        
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!';
        incrementScore();        
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'; 
        incrementWrongScore();       
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!';
        incrementScore();        
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'; 
        incrementWrongScore();       
    } 
    resultDisplay.innerHTML = result
}

//tally up the results of the game
function incrementScore() {
    let oldScore = parseInt(document.getElementById('user-score').innerText)
    document.getElementById('user-score').innerText = ++oldScore
}

function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById('computer-score').innerText)
    document.getElementById('computer-score').innerText = ++oldScore
}

function starsEarned() {
    let gamesWon = document.getElementById('user-score').innerText
    let gamesLost = document.getElementById('computer-score').innerText
    document.getElementById('stars-added').innerHTML = gamesWon - gamesLost
}

//limit the number of clicks on the button to end the game

