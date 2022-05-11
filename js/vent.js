'use strict';

const trashButton = document.getElementById('trashButton');
const ventInput = document.getElementById('ventInputBox');

trashButton.addEventListener('click', () => {
    // Animate the ventInput.value off screen somehow
    ventInput.value = '';
})