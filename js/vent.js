'use strict';

const trashButton = document.getElementById('trashButton');
const ventInput = document.getElementById('ventInputBox');

trashButton.addEventListener('click', () => {
    // Animate the ventInput.value off screen somehow
    ventInput.value = '';
})


let ventAnimation = gsap.timeline();

ventAnimation.from('.ventInputBox', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 1.25)
.from('.trashButton', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 1.5)
.from('.inputText', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 1.75)