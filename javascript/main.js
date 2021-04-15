/* DOM SELECTIONS */

const navBar = document.querySelector('#navigation');
const navBarLinks = document.querySelectorAll('#navigation div.nav-links-container a');

/* FUNCTIONS */

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        navBar.classList.add("navigation-scroll");
        // myNav.classList.remove("nav-transparent");
    } 
    else {
        navBar.classList.remove("navigation-scroll");
        // myNav.classList.remove("nav-colored");
    }
};



// function changeNavBarColor () {

//     if (window.scrollY > 300) {

//         navBar.id = "navigationWhite";
//         navBarLinks.classList.remove("navbar-transparent");
//         navBarLinks.classList.add("navbar-white");
        
//     } else {

//         navBar.id = "navigation";
//         navBarLinks.classList.remove("navbar-white");
//         navBarLinks.classList.add("navbar-transparent");;

//     }
    
// }

// Create a function that changes the guitar images from black and white to color (use a transition effect)

/* EVENT LISTENERS */

window.addEventListener('onScroll', changeNavBarColor);