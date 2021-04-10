/* DOM SELECTIONS */

const navBar = document.querySelector('#navigation');
const navBarLinks = document.querySelectorAll('#navigation div.nav-links-container a');



/* FUNCTIONS */

function changeNavBarColor () {

    if (window.innerHeight === 625) {

        // navBar.id = "navigationWhite";
        // navBarLinks.id = "";
            console.log("Window's inner height is 625");
    } else {

        navBar.id = "navigation";
        navBarLinks = `Window's inner height is ${window.innerHeight}`;

    }
    
}

/* EVENT LISTENERS */

window.addEventListener('mousewheel', changeNavBarColor);