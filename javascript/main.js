/* DOM SELECTIONS */

const navBar = document.querySelector('#navigation');
const extraLinksContainer = document.querySelector('#navigation div#extra-links-container');
const navBarLinks = document.querySelectorAll('#navigation div.nav-links-container a');
const hamburger = document.querySelector('div.hamburger-hidden');
const svgDivs = document.querySelectorAll('.svg-card');
const imgContainers = document.querySelectorAll('div.image-container img');
const signUpContainer = document.querySelector('#sign-up-container');

/* EVENT LISTENERS */

window.addEventListener('scroll', changeNavBarColor);
window.addEventListener('scroll', changeNavLinksColor);
window.addEventListener('scroll', showSvgDivs);
window.addEventListener('scroll', increaseImgOpacity);
window.addEventListener('scroll', signUpSlideOut);
window.addEventListener('resize', hideDropDown);
hamburger.addEventListener('click', showDropDownMenu);

/* FUNCTIONS */

// Navigation Bar Section

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

// SVG-Highlight Section

function showSvgDivs () {

    if (window.scrollY >= 1650) {

        Array.from(svgDivs).forEach((div) => {

            setTimeout(div.classList.remove('hide'), 3000)
            
        });

    }  else {

        Array.from(svgDivs).forEach((div) => {

            setTimeout(div.classList.add('hide'), 3000)
            
        });
    }

}

// Guitars, Amps, Mics, Picks Section

function increaseImgOpacity () {

    const imagesInImageContainer = Array.from(imgContainers);
    const [img1, img2, img3, img4] = imagesInImageContainer;

    if (window.scrollY >= 2007) {
        img1.parentNode.classList.remove('low-opacity');
    }

    if (window.scrollY >= 2350) {
        img2.parentNode.classList.remove('low-opacity');
    }

    if (window.scrollY >= 3000) {
        img3.parentNode.classList.remove('low-opacity');
    }

    if (window.scrollY >= 3550) {
        img4.parentNode.classList.remove('low-opacity');
    }

}

// Newsletter Section

function signUpSlideOut () {

    if (window.scrollY >= 5300) {

        signUpContainer.classList.remove('hidden');

    } else {
        signUpContainer.classList.add('hidden');
    }

}

