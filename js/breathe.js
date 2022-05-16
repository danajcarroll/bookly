'use strict';

// Breathe Page
const breatheButtonList = document.querySelectorAll('.buttonBox button');
const breatheButtons = [...breatheButtonList];

let myObj = document.getElementById('obj');

// CREATING BREATHE ANIMATION

let miniCircles = myObj.getElementsByClassName('miniCircle');

    let breatheAnimation = gsap.timeline({duration: 2});
    breatheAnimation.to(miniCircles, {
        autoAlpha: 1,
        stagger: {
            from: 0,
        }
    })


        // myObj.addEventListener('load', () => {
        //     let mainCircle = myObj.getElementById('mainCircle');
        //     let miniCircles = myObj.getElementsByClassName('miniCircle')
            
            
        //     let breatheAnimation = gsap.timeline({duration: 2});
        //     breatheAnimation.to(miniCircles, {
        //         autoAlpha: 1,
        //         stagger: {
        //             from: 0,
        //         }
        //     })
        // })


breatheButtons.forEach(button => {
    let animationSetup = gsap.timeline({paused: true});
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

    let breathSelect = 0;
    button.addEventListener('click', () => {
        breathSelect = button.value;
        animationSetup.play();
        // breatheAnimation();





        
    })
});

