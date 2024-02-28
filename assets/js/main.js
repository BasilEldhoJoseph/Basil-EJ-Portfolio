/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    /*=============== MENU SHOW ===============*/
    /* Validate if constant exists*/
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    /*=============== MENU HIDDEN ===============*/
    /* Validate if constant exists*/
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
});

/*=============== REMOVE MENU MOBILE ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))
})

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const  header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :header.classList.remove('scroll-header')
}

window.addEventListener('scroll',shadowHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
