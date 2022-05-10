'use strict';

const myKey = config.SECRET_KEY;
let moodInputBox = document.getElementById('moodInput');
const submitButton = document.getElementById('submitButton');
const feelingList = document.getElementById('feelingList');
let taskArray = [];
localStorage.setItem('allTasks', JSON.stringify(taskArray));
const taskData = JSON.parse(localStorage.getItem('allTasks'));


let data = {
    prompt: `Suggest one positive thing I can do based on my mood.\n Mood:${moodInput}`,
    temperature: 0.9,
    max_tokens: 40,
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

function createTask(mood, task) {
    return `
        <div class="feelingThumbnail genResponseBK">
            <h2 class="genEmotion">${mood}</h2>
            <p class="genTask">${task}</p>
        </div>
    `;
}

submitButton.addEventListener('click', () => {
    let moodInput = moodInputBox.value;
    let moodTask = {
        mood: '',
        task: ''
    }
    data.prompt =  `Suggest one positive thing I can do based on my mood.\n Mood:${moodInput}\n`;
    getResponse().then(text => {
        let newText = text.slice(1);
        moodTask.task = newText;
        moodTask.mood = moodInput;
        taskArray.push(moodTask);
    }).then(() => {
        console.log(taskArray);
        localStorage.setItem('allTasks', JSON.stringify(taskArray));
        let taskHTML = taskArray.map(function(element) {
            return `
                <div class="feelingThumbnail genResponseBK">
                    <h2 class="genEmotion">${element.mood}</h2>
                    <p class="genTask">${element.task}</p>
                </div>
            `;
        })
        taskHTML = taskHTML.join('');
        console.log(taskHTML);
        feelingList.innerHTML = taskHTML;
    });
})
