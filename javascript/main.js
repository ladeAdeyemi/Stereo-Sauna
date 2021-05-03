/* DOM SELECTIONS */


const navBar = document.querySelector('#navigation');
const extraLinksContainer = document.querySelector('#navigation div#extra-links-container');
const navBarLinks = document.querySelectorAll('#navigation div.nav-links-container a');
const hamburger = document.querySelector('div.hamburger-hidden');
const introTextContainer = document.querySelector('div.intro-text-container');
const svgDivs = document.querySelectorAll('.svg-card');
const imgContainers = document.querySelectorAll('div.image-container img');
const brandsUls = document.querySelectorAll('section#brands div.brands-grid ul.brands-row');
const signUpContainer = document.querySelector('#sign-up-container');
const signUpForm = document.querySelector('#sign-up-container form');
const signUpInput = document.querySelector('section#newsletter input');


/* EVENT LISTENERS */


window.addEventListener('scroll', changeNavBarColor);
window.addEventListener('scroll', changeNavLinksColor);
window.addEventListener('scroll', revealIntroText);
window.addEventListener('scroll', showSvgDivs);
window.addEventListener('scroll', increaseImgOpacity);
window.addEventListener('scroll', addBoxShadow);
window.addEventListener('scroll', signUpSlideOut);
window.addEventListener('resize', hideDropDown);
hamburger.addEventListener('click', showDropDownMenu);
signUpForm.addEventListener('submit', validateForm);


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


// Intro Section


function revealIntroText () {

    if (window.scrollY >= 600) {
        introTextContainer.classList.remove('intro-text-hidden');
    } else {
        introTextContainer.classList.add('intro-text-hidden');
    }

}


// SVG-Highlight Section


function showSvgDivs () {

    if (window.scrollY >= 1550) {

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

    if (window.scrollY >= 3350) {
        img4.parentNode.classList.remove('low-opacity');
    }

}


// Brands Section


function addBoxShadow () {

    if (window.scrollY >= 4100) {
       
        brandsUls.forEach((ul) => {
            ul.classList.add('raised');
        });

    } else {

        brandsUls.forEach((ul) => ul.classList.remove('raised'));

    }

}


// Newsletter Section


function signUpSlideOut () {

    if (window.scrollY >= 5200) {

        signUpContainer.classList.remove('hidden');

    } else {
        signUpContainer.classList.add('hidden');
    }

}

function showValidationMessage (validationMessage, seconds) {

        const messageDiv = document.createElement('div');
        const messageParagraph = document.createElement('p');
        messageDiv.className = 'messageContainer';
        messageDiv.appendChild(messageParagraph);
        signUpContainer.lastElementChild.appendChild(messageDiv);
        messageParagraph.innerText = validationMessage;
        setTimeout(() => signUpContainer.lastElementChild.removeChild(messageDiv), seconds);
        // input.value = "";
    
}

function validateForm (e) {

    e.preventDefault();
    
    const validationMessages = ["Please fill in this field.", "Please enter a valid email address."];

    if (signUpInput.value == "") {

        showValidationMessage(validationMessages[0], 2000);
        return;
    }  

    if (signUpInput.value.length < 1 && signUpInput.value !== "") {

        showValidationMessage(validationMessages[1], 2000);
        return;

    }

}

