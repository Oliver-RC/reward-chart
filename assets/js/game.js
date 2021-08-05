 /**
 * star game logic
 */
 // variables
 const computerChoiceDisplay = document.getElementById('computer-choice');
 const userChoiceDisplay = document.getElementById('user-choice');
 const resultDisplay = document.getElementById('result');
 const possibleChoices = document.getElementsByClassName('selection');
 let userChoice;
 let computerChoice;
 let result;
 
 // add event listeners to clicked buttons and display user choice and result
 [...possibleChoices].forEach(possibleChoice => possibleChoice.addEventListener('click', e => {
     userChoice = e.target.id;
     userChoiceDisplay.innerHTML = userChoice;
     generateComputerChoice();
     getResult();
     starsEarned();
 }));
 
 // generates random number for computer choice and assigns the number a string
 function generateComputerChoice() {
     const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
     
     if (randomNumber === 1) {
         computerChoice = 'rock';
       }
       if (randomNumber === 2) {
         computerChoice = 'scissors';
       }
       if (randomNumber === 3) {
         computerChoice = 'paper';
       }
       computerChoiceDisplay.innerHTML = computerChoice;
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
     resultDisplay.innerHTML = result;
 }
 
 //tally up the results of the game
 function incrementScore() {
     let oldScore = parseInt(document.getElementById('user-score').innerText);
     document.getElementById('user-score').innerText = ++oldScore;
 }
 
 function incrementWrongScore() {
     let oldScore = parseInt(document.getElementById('computer-score').innerText);
     document.getElementById('computer-score').innerText = ++oldScore;
 }
 
 function starsEarned() {
     let gamesWon = document.getElementById('user-score').innerText;
     let gamesLost = document.getElementById('computer-score').innerText;
     document.getElementById('stars-added').innerHTML = gamesWon - gamesLost;
 }
 
 //instructions alert popup box
 
 function instructions() {
     alert('👊 Rock wins over scissors because rock smashes scissors\n✌ Scissors wins over paper because scissors cut paper\n✋ Paper wins over rock because paper covers rock');
 }
 