'use strict';


const menuButton = document.getElementById('menuButton');
const exitMobileMenu = document.getElementById('exitMobileMenu');
const mobileNav = document.getElementById('mobileNav');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const navButtonList = document.getElementsByClassName('mobNavListItem');
const navButtons = [...navButtonList];
const bodyHeight = body.clientHeight;
const headerHeight = header.clientHeight;
const windowHeight = window.innerHeight;


menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})
exitMobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mobileNav.classList.remove('activeMobileNav');

        setTimeout(function () {
            window.location.href = button.href;
        }, 1000)
    })
});
main.style.height = `${bodyHeight - headerHeight}px`;


gsap.from('.logo', {
    y: -100,
    duration: 0.5
});


let subpageTitle = gsap.timeline();

subpageTitle.from('.titleHeader', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 0.5)
.from('.titleSub', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 0.75);


window.addEventListener('DOMContentLoaded', () => {
    // setTimeout(() => {
    //     mobileNav.classList.remove('activeMobileNav');
    // }, 500);


})