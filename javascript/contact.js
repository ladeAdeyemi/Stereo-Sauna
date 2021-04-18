/* DOM SELECTIONS */

const contactForm = document.querySelector('#contact-form');

/* FUNCTIONS */

function revealContactForm() {

    if (window.scrollY >= 200 ) {

        setTimeout( () => {

            contactForm.classList.remove("invisible");

        }, 300);
        
    } else {

        setTimeout( () => {

            contactForm.classList.add("invisible");

        }, 300);
       
    }
}

/* EVENT LISTENERS */

window.addEventListener('scroll', revealContactForm);