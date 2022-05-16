'use strict';

// Breathe Page
const breatheButtonList = document.querySelectorAll('.buttonBox button');
const breatheButtons = [...breatheButtonList];

let miniCircles = document.getElementsByClassName('miniCircle');
let breathSelect = 0;

// CREATING BREATHE ANIMATION
/* 
button determines how many repeat
yoyo makes animation go back and fourth

*/

gsap.set('.innerCircle', {
    scale: 0
})
gsap.set(miniCircles, {
    scale: 0
})
    let breatheAnimation = gsap.timeline({
        paused: true,
        // repeat: 1,
        delay: 4,
        ease: 'power1.out'
    });
    breatheAnimation.to('.innerCircle', {
        autoAlpha: 1,
        scale: 1,
        duration: 5
    }, 0)
    .to(miniCircles, {
        autoAlpha: 1,
        scale: 1,
        duration: 5,
        stagger: {
            each: 0.1,
            from: 'start'
        }
    }, 0)
    .to('.innerCircle', {
        scale: 0,
        duration: 5
    }, 5)
    .to(miniCircles, {
        scale: 0,
        duration: 5,
        stagger: {
            each: 0.1,
            from: 'end'
        }
    }, 5);
    // .to('.innerCircle', {
    //     scale: 1,
    //     duration: 3
    // }, 3)
    // .fromTo('.innerCircle', {
    //     scale: 0
    // }, {
    //     scale: 1,
    //     duration: 2,
    //     yoyo: true,
    //     repeat: 2
    // }, 2);

    let animationSetup = gsap.timeline({paused: true});
    animationSetup.to('.animationSetup', {
        y: 200,
        duration: 1,
        opacity: 0,
        display: 'none'
    }, 1)
    .to('.animation', {
        opacity: 1,
        display: 'block',
        duration: 1
    }, 2);

breatheButtons.forEach(button => {
    button.addEventListener('click', () => {
        breathSelect = parseInt(button.value);
        animationSetup.play();
        breatheAnimation.play().repeat(breathSelect);
    })
});

