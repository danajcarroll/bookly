'use strict';

const myKey = config.SECRET_KEY;
const moodInputBox = document.getElementById('moodInput');
const submitButton = document.getElementById('submitButton');
const feelingList = document.getElementById('feelingList');
const clearListButton = document.getElementById('clearList');
let taskArray = [];

let homeAnimation = gsap.timeline();

homeAnimation.to('.instructions', {
    y: -50,
    // autoAlpha: 1,
    opacity: 1,
    duration: 0.5
}, 0.25)
.to('.moodInput', {
    y: -50,
    // autoAlpha: 1,
    opacity: 1,
    duration: 0.5
}, 0.5)
.to('.submitButton', {
    y: -50,
    // autoAlpha: 1,
    opacity: 1,
    duration: 0.5
}, 0.5)


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

let numbersAnimation = gsap.timeline();

numbersAnimation.from('.numberItem', {
    x: -100,
    opacity: 0,
    stagger: 0.25
}, 1.25)

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
        Authorization: `Bearer ${myKey}`,
        },
        body: JSON.stringify(data),
        })
    const answer = await response.json();
    return answer.choices[0].text;
}


submitButton.addEventListener('click', () => {
    let moodInput = moodInputBox.value;
    if (!moodInput == '') {
        console.log('oh great, it has a value');
        let moodTask = {
            mood: '',
            task: ''
        }
        data.prompt =  `Suggest one short positive activity I can do based on my mood.\n Mood:${moodInput}\n`;
        getResponse().then(text => {
            let newText = text.slice(1);
            moodTask.task = newText;
            moodTask.mood = moodInput;
            // console.log(moodTask);
            taskArray.unshift(moodTask);
        }).then(() => {
            let taskHTML = taskArray.map((element) => getTaskHTML(element));
            taskHTML = taskHTML.join('');
            feelingList.innerHTML = taskHTML;
            moodInputBox.value = '';
        });
    }
    else {
        console.log('oh darn, no value');
    }
})

