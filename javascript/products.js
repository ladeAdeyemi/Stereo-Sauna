/* DOM SELECTIONS */

const pageTitle = document.querySelector('div.page-title');

/* FUNCTIONS */

function revealPageTitle() {

    if (window.scrollY >= 300 ) {

        setTimeout( () => {

            pageTitle.classList.remove("invisible");

        }, 300);
        
    } else {

        setTimeout( () => {

            pageTitle.classList.add("invisible");

        }, 300);
       
    }
}

/* EVENT LISTENERS */

window.addEventListener('scroll', revealPageTitle);