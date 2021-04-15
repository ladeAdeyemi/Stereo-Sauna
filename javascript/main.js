/* DOM SELECTIONS */

const navBar = document.querySelector('#navigation');
const navBarLinks = document.querySelectorAll('#navigation div.nav-links-container a');

/* FUNCTIONS */

function changeNavBarColor () {

    if (window.scrollY >= 200 ) {

        navBar.classList.add("navigationWhite");
      
    } else {

        navBar.classList.remove("navigationWhite");

    }

};

function changeNavLinksColor () {

    navBarLinks.forEach((link) => {

        if (window.scrollY >= 200) {

            link.classList.remove('navbar-transparent');
            link.classList.add('navbar-opaque');

        } else {

            link.classList.remove('navbar-opaque');
            link.classList.add('navbar-transparent');

        }

    });
}

// Make sure to use the above functions for the burger nav menu as well

/* EVENT LISTENERS */

window.addEventListener('scroll', changeNavBarColor);
window.addEventListener('scroll', changeNavLinksColor);