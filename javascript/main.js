/* DOM SELECTIONS */

const navBar = document.querySelector('#navigation');
const extraLinksContainer = document.querySelector('#navigation div#extra-links-container');
const navBarLinks = document.querySelectorAll('#navigation div.nav-links-container a');
const hamburger = document.querySelector('div.hamburger-hidden');

/* FUNCTIONS */

function changeNavBarColor () {

    if (window.scrollY >= 200 ) {

        navBar.classList.add("navigationWhite");
      
    } else {

        navBar.classList.remove("navigationWhite");

    }

};

function changeNavLinksColor () {

    navBarLinks.forEach( (link) => {

        if (window.scrollY >= 200) {

            link.classList.remove('navbar-transparent');
            link.classList.add('navbar-opaque');

        } else {

            link.classList.remove('navbar-opaque');
            link.classList.add('navbar-transparent');

        }

    });
}

function showDropDownMenu () {

        extraLinksContainer.classList.toggle('open');

} 

function hideDropDown () {

    if (window.innerWidth >= 790 && extraLinksContainer.classList.contains('open')) {

        extraLinksContainer.classList.remove('open');

    }

}

/* EVENT LISTENERS */

window.addEventListener('scroll', changeNavBarColor);
window.addEventListener('scroll', changeNavLinksColor);
window.addEventListener('resize', hideDropDown);
hamburger.addEventListener('click', showDropDownMenu);
