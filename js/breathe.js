'use strict';

// Breathe Page
const breatheButtonList = document.querySelectorAll('.buttonBox button');
const breatheButtons = [...breatheButtonList];


let myObj = document.getElementById('obj');

myObj.addEventListener('load', () => {
    let mainCircle = myObj.getElementById('mainCircle');
    let circ1 = myObj.getElementById('circ1');
    let circ2 = myObj.getElementById('circ2');
    let circ3 = myObj.getElementById('circ3');
    let circ4 = myObj.getElementById('circ4');
    let circ5 = myObj.getElementById('circ5');
    let circ6 = myObj.getElementById('circ6');
    let circ7 = myObj.getElementById('circ7');
    let circ8 = myObj.getElementById('circ8');
    
    
})

let animationSetup = gsap.timeline();

animationSetup.to('.animationSetup', {
    y: 200,
    duration: 1,
    opacity: 0,
    display: 'none'
}, 2)
.to('.animation', {
    opacity: 1,
    display: 'block',
    duration: 1
}, 4);


breatheButtons.forEach(button => {
    let breathSelect = 0;
    button.addEventListener('click', () => {
        breathSelect = button.value;
        animationSetup();


    })
    
});

