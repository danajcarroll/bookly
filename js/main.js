'use strict';


const menuButton = document.getElementById('menuButton');
const exitMobileMenu = document.getElementById('exitMobileMenu');
const mobileNav = document.getElementById('mobileNav');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');


menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})
exitMobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})

const bodyHeight = body.clientHeight;
const headerHeight = header.clientHeight;
const windowHeight = window.innerHeight;

main.style.height = `${bodyHeight - headerHeight}px`;

let homeAnimation = gsap.timeline();

window.addEventListener('DOMContentLoaded', () => {
    // setTimeout(() => {
    //     mobileNav.classList.remove('activeMobileNav');
    // }, 500);
    homeAnimation.from('.logo', {
        y: -100,
        duration: 0.5
    }, 0)
    .from('.instructions', {
        y: -50,
        opacity: 0,
        duration: 0.5
    }, 0.25)
    .from('.moodInput', {
        y: -50,
        opacity: 0,
        duration: 0.5
    }, 0.5)
    .from('.submitButton', {
        y: -50,
        opacity: 0,
        duration: 0.5
    }, 0.5)

})