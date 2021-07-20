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
}


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
