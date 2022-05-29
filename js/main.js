'use strict';

// HOME ELEMENTS
const menuButton = document.getElementById('menuButton');
const exitMobileMenu = document.getElementById('exitMobileMenu');
const mobileNav = document.getElementById('mobileNav');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const navButtonList = document.getElementsByClassName('mobNavListItem');
const mobNavButtons = [...navButtonList];
const bodyHeight = body.clientHeight;
const headerHeight = header.clientHeight;
const windowHeight = window.innerHeight;

main.style.height = `${bodyHeight - headerHeight}px`;

// MENU BUTTON EVENTS
menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
});
exitMobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
});
mobNavButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        mobileNav.classList.remove('activeMobileNav');
    })
});

// GSAP HOME ANIMATIONS
gsap.from('.logo', {
    y: -100,
    duration: 0.5
});

let homeAnimation = gsap.timeline();

homeAnimation.from('.instructions', {
    y: -50,
    opacity: 0,
    duration: 0.5
}, 0.25)
.from('.moodInput', {
    y: -50,
    opacity: 0,
    duration: 0.5
}, 0.5)
.from('.submitButton', {
    y: -50,
    opacity: 0,
    duration: 0.5
}, 0.5)
    
    // API CALLING
function homeInit() {
    
    const moodInputBox = document.getElementById('moodInput');
    const submitButton = document.getElementById('submitButton');
    const feelingList = document.getElementById('feelingList');
    let moodInput = 'Anxious';
    let taskArray = [];

    function getTaskHTML(element) {
        return `
            <div class="feelingThumbnail" id="${element.mood}">
                <h2 class="genEmotion">${element.mood}</h2>
                <p class="genTask">${element.task}</p>
            </div>
        `;
    }
    
    let data = {
        prompt: `Suggest one positive thing I can do based on my mood.\n Mood:${moodInput}`,
        temperature: 0.9,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };
    
    async function getResponse() {
        const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            Authorization: `Bearer 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`,
            },
            body: JSON.stringify(data),
            })
        const answer = await response.json();
        return answer.choices[0].text;
    }
    
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            moodInput = moodInputBox.value;
            if (!moodInput == '') {
                let moodTask = {
                    mood: '',
                    task: ''
                }
                data.prompt =  `Suggest one short positive activity I can do based on my mood.\n Mood:${moodInput}\n`;
                getResponse().then(text => {
                    let newText = text.slice(1);
                    moodTask.task = newText;
                    moodTask.mood = moodInput;
                    taskArray.unshift(moodTask);
                }).then(() => {
                    let taskHTML = taskArray.map((element) => getTaskHTML(element));
                    taskHTML = taskHTML.join('');
                    feelingList.innerHTML = taskHTML;
                    moodInputBox.value = '';
                    moodInput;
                }).catch((error) => {
                    console.error(error);
                });
            }
            else {
                alert('Input your current mood in one word please!');
            }
        })
    }

}




// VENT PAGE FUNCTION
function ventInit() {
    const trashButton = document.getElementById('trashButton');
    const ventInput = document.getElementById('ventInputBox');
    if (trashButton) {
        trashButton.addEventListener('click', () => {
            ventInput.value = '';
        });
    }

}

