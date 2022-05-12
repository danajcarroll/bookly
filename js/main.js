'use strict';

import Highway from '@dogstudio/highway';
import Fade from './fade.js';

const highway = new Highway.Core({
    transitions: {
        default: Fade
    }
})

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