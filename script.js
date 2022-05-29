const swup = new Swup();

let mainBox = document.getElementById('swup');
if (mainBox.classList[0] == 'index') {
    homeInit();
}

if (mainBox.classList[0] == 'vent') {
    ventInit();
}

if (mainBox.classList[0] == 'breathe') {
    breatheInit();
}

swup.on('contentReplaced', () => {
    mainBox = document.getElementById('swup');
    if (mainBox.classList[0] == 'index') {
        homeInit();
    }

    if (mainBox.classList[0] == 'vent') {
        ventInit();
    }

    if (mainBox.classList[0] == 'breathe') {
        breatheInit();
    }
});