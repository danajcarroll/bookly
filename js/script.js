'use strict';

const myKey = config.SECRET_KEY;
const menuButton = document.getElementById('menuButton');
const exitMobileMenu = document.getElementById('exitMobileMenu');
const mobileNav = document.getElementById('mobileNav');
const moodInputBox = document.getElementById('moodInput');
const submitButton = document.getElementById('submitButton');
const feelingList = document.getElementById('feelingList');
const clearListButton = document.getElementById('clearList');
let taskArray = []


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

menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})
exitMobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('activeMobileNav');
})

submitButton.addEventListener('click', () => {
    let moodInput = moodInputBox.value;
    let moodTask = {
        mood: '',
        task: ''
    }
    data.prompt =  `Suggest one short positive activity I can do based on my mood.\n Mood:${moodInput}\n`;
    getResponse().then(text => {
        let newText = text.slice(1);
        moodTask.task = newText;
        moodTask.mood = moodInput;
        console.log(moodTask);
        taskArray.unshift(moodTask);
    }).then(() => {
        let taskHTML = taskArray.map((element) => getTaskHTML(element));
        taskHTML = taskHTML.join('');
        feelingList.innerHTML = taskHTML;
        moodInputBox.value = '';
    });
})

