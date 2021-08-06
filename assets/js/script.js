/**
 * responsive nav bar toogle action
 */
let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/**
 * create a new task in the reward table
 */
const taskContainer = document.querySelector('[data-title="tasks"]');
const newTaskForm = document.querySelector('[data-task="form"]');
const newTaskInput = document.querySelector('[data-task="input"]');
const addTaskButton = document.querySelector('[data-task="button"]');

const LOCAL_STORAGE_LIST_KEY = 'task.tasks';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

//adds new task when 'enter' key hit
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask(taskName);
    newTaskInput.value = null;
    tasks.push(task);
    saveAndRender();
});

//adds new task when 'add' button clicked
addTaskButton.addEventListener('click', e => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask(taskName);
    newTaskInput.value = null;
    tasks.push(task);
    saveAndRender();
});

//deletes table of task when 'end of the week' button clicked
function clearLocal() {
    localStorage.clear();
    window.location.reload();
}

//gives the task name a unique id for local storage use
function createTask(name) {
    return {id: Date.now().toString(), name: name};
}

//calls the save and render function
function saveAndRender() {
    save();
    render();
}

//saves the new task to local storage
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(tasks));
}

//adds table row to the table with new task inputted from the form
function render() {
    clearElement(taskContainer);
    tasks.forEach(task => {
        let taskElement = taskContainer.insertRow(0);
        let tableData = document.createElement('td');
        let chkbox = document.createElement('input');
        let div = document.createElement('div');
        let cell1 = taskElement.insertCell(0);
        let cell2 = taskElement.insertCell(1);
        let cell3 = taskElement.insertCell(2);
        let cell4 = taskElement.insertCell(3);
        let cell5 = taskElement.insertCell(4);
        let cell6 = taskElement.insertCell(5);
        let cell7 = taskElement.insertCell(6);
        let cell8 = taskElement.insertCell(7);

        taskElement.classList.add("new-task");
        chkbox.type = 'checkbox';
        chkbox.className = 'hidden star';
        chkbox.ariaLabel = 'star-checkbox'
        div.className = 'control';
        cell2.classList.add("star-box");
        cell3.classList.add("star-box");
        cell4.classList.add("star-box");
        cell5.classList.add("star-box");
        cell6.classList.add("star-box");
        cell7.classList.add("star-box");
        cell8.classList.add("star-box");
        cell1.dataset.title = 'Task';
        cell2.dataset.title = 'Monday';
        cell3.dataset.title = 'Tuesday';
        cell4.dataset.title = 'Wednesday';
        cell5.dataset.title = 'Thursday';
        cell6.dataset.title = 'Friday';
        cell7.dataset.title = 'Saturday';
        cell8.dataset.title = 'Sunday';

        tableData.appendChild(chkbox);
        tableData.appendChild(div);

        cell1.innerHTML = task.name;
        cell2.innerHTML = tableData.innerHTML;
        cell3.innerHTML = tableData.innerHTML;
        cell4.innerHTML = tableData.innerHTML;
        cell5.innerHTML = tableData.innerHTML;
        cell6.innerHTML = tableData.innerHTML;
        cell7.innerHTML = tableData.innerHTML;
        cell8.innerHTML = tableData.innerHTML;
    });
}

//clears the table of existing content
function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();

 /**
 * Count the number of star icons checked
 */
function update() {
    document.getElementById('count').innerHTML = 
    document.querySelectorAll('#checkboxes input[type="checkbox"]:checked').length;
}