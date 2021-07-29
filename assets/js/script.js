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
 */
const taskContainer = document.querySelector('[data-tasks]')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const addTaskButton = document.querySelector('[data-add-task-button]')
const deleteTaskButton = document.querySelector('[data-delete-task-button]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

//adds new task when 'enter' key hit
newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null
    tasks.push(task)
    saveAndRender()
})

//adds new task when 'add' button clicked
addTaskButton.addEventListener('click', e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null
    tasks.push(task)
    saveAndRender()
})

/**deleteTaskButton.addEventListener('click', e => {
    tasks = tasks.filter(task => task.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})*/

//gives the task name a unique id for local storage use
function createTask(name) {
    return {id: Date.now().toString(), name: name}
}

//calls the save and render function
function saveAndRender() {
    save()
    render()
}

//saves the new task to local storage
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(tasks))
}

//adds table row to the table with new task inputted from the form
function render() {
    clearElement(taskContainer)
    tasks.forEach(task => {
        let taskElement = taskContainer.insertRow(0)
        let tableData = document.createElement('td')
        let chkbox = document.createElement('input')
        let div = document.createElement('div')
        let cell1 = taskElement.insertCell(0);
        let cell2 = taskElement.insertCell(1);
        let cell3 = taskElement.insertCell(2);
        let cell4 = taskElement.insertCell(3);
        let cell5 = taskElement.insertCell(4);
        let cell6 = taskElement.insertCell(5);
        let cell7 = taskElement.insertCell(6);
        let cell8 = taskElement.insertCell(7);

        taskElement.classList.add("new-task")
        chkbox.type = 'checkbox'
        chkbox.id = 'star'
        chkbox.className = 'hidden'
        div.className = 'control'
        cell2.classList.add("star-box")
        cell3.classList.add("star-box")
        cell4.classList.add("star-box")
        cell5.classList.add("star-box")
        cell6.classList.add("star-box")
        cell7.classList.add("star-box")
        cell8.classList.add("star-box")

        tableData.appendChild(chkbox)
        tableData.appendChild(div)

        cell1.innerHTML = task.name
        cell2.innerHTML = tableData.innerHTML
        cell3.innerHTML = tableData.innerHTML
        cell4.innerHTML = tableData.innerHTML
        cell5.innerHTML = tableData.innerHTML
        cell6.innerHTML = tableData.innerHTML
        cell7.innerHTML = tableData.innerHTML
        cell8.innerHTML = tableData.innerHTML
    })
}

//clears the table of existing content
function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()

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


//instructions alert popup box

function instructions() {
    alert('👊 Rock wins over scissors because rock smashes scissors\n✌ Scissors wins over paper because scissors cut paper\n✋ Paper wins over rock because paper covers rock')
}

/**Total Reward Stars Count */

/**Claim Reward deducting stars from total */

/**End of the week reset */