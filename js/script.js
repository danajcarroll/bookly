'use strict';

const myKey = config.SECRET_KEY;

let moodInput = 'Angry';

let data = {
    prompt: `Suggest one positive thing I should do based on my mood.\n Mood:${moodInput}\n`,
    temperature: 0.9,
    max_tokens: 20,
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
    console.log(answer.choices[0].text);
}

getResponse();