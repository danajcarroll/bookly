'use strict';

let breatheAnimation = gsap.timeline();

breatheAnimation.from('.breatheButtonBox', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 1.25)
.from('.animationContainer', {
    x: -100,
    opacity: 0,
    duration: 0.5
}, 1.5)