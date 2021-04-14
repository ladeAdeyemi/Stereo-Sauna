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

// Create a function that changes the guitar images from black and white to color (use a transition effect)

/* EVENT LISTENERS */

window.addEventListener('mousewheel', changeNavBarColor);