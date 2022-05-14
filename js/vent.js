'use strict';

const trashButton = document.getElementById('trashButton');
const ventInput = document.getElementById('ventInputBox');

trashButton.addEventListener('click', () => {
    // Animate the ventInput.value off screen somehow
    ventInput.value = '';
})


let ventAnimation = gsap.timeline();

ventAnimation.from('.titleHeader', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 0.5)
.from('.titleSub', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 0.75)
.from('.ventInputBox', {
    // height: 0,
    opacity: 0,
    duration: 0.5
}, 1.25)
.from('.trashButton', {
    // width: 0,
    opacity: 0,
    duration: 0.5
}, 1.25)
.from('.inputText', {
    // width: 0,
    opacity: 0,
    duration: 0.5
}, 1.25)