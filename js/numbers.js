'use strict';

let numbersAnimation = gsap.timeline();

numbersAnimation.from('.numberItem', {
    x: -100,
    opacity: 0,
    stagger: 0.25
}, 1.25)