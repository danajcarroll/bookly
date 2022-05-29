'use strict';

function breatheInit() {

    const breatheButtonList = document.querySelectorAll('.buttonBox button');
    const breatheButtons = [...breatheButtonList];

    let miniCircles = document.getElementsByClassName('miniCircle');
    let breathSelect = 0;
    
    gsap.set('.innerCircle', {
        scale: 0
    })
    gsap.set(miniCircles, {
        scale: 0
    })
    
    let animationSetup = gsap.timeline({ paused: true });
    animationSetup
    .to(".animationSetup",
        {
        y: 200,
        duration: 1,
        opacity: 0,
        display: "none"
        }, 1)
    .to(".animation",
        {
        opacity: 1,
        display: "block",
        duration: 1
        }, 2);
    
    let breatheAnimation = gsap.timeline({
    paused: true,
    delay: 4,
    ease: "power1.out",
    onComplete: () => {
        console.warn("animationRestart");
        animationRestart.restart()}
    });
    breatheAnimation
    .to(".innerCircle",
        {
        autoAlpha: 1,
        scale: 1,
        duration: 4
        }, 0)
    .to(".innerCircle",
        {
        scale: 0,
        duration: 4
        }, 4)
    .to(miniCircles,
        {
        autoAlpha: 1,
        scale: 1,
        duration: 4,
        stagger: {
            each: 0.1,
            from: "start"
        }
        }, 0)
    .to(miniCircles,
        {
        scale: 0,
        duration: 4,
        stagger: {
            each: 0.1,
            from: "end"
        }
        }, 4);
    
    let animationRestart = gsap.timeline({
    paused: true,
    delay: 5
    });
    animationRestart
    .to(".animation",
        {
        duration: 1,
        opacity: 0,
        display: "none"
        }, 0)
    .to(".animationSetup",
        {
        y: 0,
        opacity: 1,
        display: "flex",
        duration: 1
        }, 2);
    
    breatheButtons.forEach((button) => {
        button.addEventListener("click", () => {
            breathSelect = parseInt(button.value);
            animationSetup.restart();
            breatheAnimation.restart({delay: 2}).repeat(breathSelect);
    });
    });
}

