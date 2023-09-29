/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//=============== CHANGE BACKGROUND HEADER ============
function scrollHeader(){
    const header=document.getElementById("header");
    //when the scroll is greater than 50 viewport height, add
    if(this.scrollY>=50){
        header.classList.add('scroll-header');
    }
    else{
        header.classList.remove('scroll-header');
    }
    window.addEventListener("scroll",scrollHeader);

}
/*============ SHOW SCROLL UP============ */false
function scrollUp(){
    const scrollUp=document.getElementById("scroll-up");
    if(this.scrollY>=400){
        scrollUp.classList.add('show-scroll');
    }
    else{
        scrollUp.classList.remove('show-scroll');
    }  
}
window.addEventListener("scroll",scrollUp);