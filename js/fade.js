import Highway from '@dogstudio/highway';

import Tween from 'gsap';

class Fade extends Highway.Transition {
    // from = index page
    // to = other page
    // done = done animating page
    in({from, to, done}) {
        // Remove old content
        from.remove();

        // Animation
        Tween.fromTo(to, 0.5, 
            {opacity: 0}, 
            {opacity: 1, onComplete: done})
    }

    out({from, done}) {
        // Animation (page going OUT)
        done();
        

    }
}

export default Fade;