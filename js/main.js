'use strict';


const menuButton = document.getElementById('menuButton');
const exitMobileMenu = document.getElementById('exitMobileMenu');
const mobileNav = document.getElementById('mobileNav');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const navButtonList = document.getElementsByClassName('mobNavListItem');
const mobNavButtons = [...navButtonList];
const bodyHeight = body.clientHeight;
const headerHeight = header.clientHeight;
const windowHeight = window.innerHeight;


menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})
exitMobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})
mobNavButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        mobileNav.classList.remove('activeMobileNav');
    })
});
main.style.height = `${bodyHeight - headerHeight}px`;

// Vent page
const trashButton = document.getElementById('trashButton');
const ventInput = document.getElementById('ventInputBox');

trashButton.addEventListener('click', () => {
    ventInput.value = '';
})
