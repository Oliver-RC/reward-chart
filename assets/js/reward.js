/**
* responsive nav bar toogle action
*/
let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/**
* reward confirm popup box
*/
function claimReward() {
   let txt;
   if (confirm("Good choice, please confirm your selection by pressing OK!")) {
       txt = "Reward Claimed!";
   }
   document.getElementById("claimed").innerHTML = txt;
}