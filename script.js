let currentOutfit = 0; // Houdt de index van de huidige outfit bij
let isSleeping = false; // Houdt bij of de gebruiker momenteel aan het slapen is

const outfits = [
    {
        image: "plaatjes/normalblue.png",
        gifSleep: "plaatjes/pochacco_blue_sleep.gif",
        gifSkateboard: "plaatjes/pochacco_skate_blue.gif"
    },
    {
        image: "plaatjes/normalyellow.png",
        gifSleep: "plaatjes/pochacco_yellow_sleep.gif",
        gifSkateboard: "plaatjes/pochacco_skate_yellow.gif"
    },
    {
        image: "plaatjes/normalgreen.png",
        gifSleep: "plaatjes/pochacco_green_sleep.gif",
        gifSkateboard: "plaatjes/pochacco_skate_green.gif"
    }
];

document.getElementById('veranderoutfit').addEventListener('click', function() {
    const img = document.getElementById('centeredImage');
    const sleepButton = document.getElementById('gaslapen');
    const skateboardButton = document.getElementById('skateboarden');
    
    currentOutfit++;
    if (currentOutfit >= outfits.length) {
        currentOutfit = 0; // Terug naar het begin van de array als het einde is bereikt
    }

    img.src = outfits[currentOutfit].image;

    // Logische operator tegenovergestelde
    isSleeping = !isSleeping;
});

document.getElementById('gaslapen').addEventListener('click', function() {
    const img = document.getElementById('centeredImage');
    const sleepButton = document.getElementById('gaslapen');
    if (isSleeping) {
        img.src = outfits[currentOutfit].image;
        sleepButton.innerText = "sleep";
    } else {
        img.src = outfits[currentOutfit].gifSleep;
        sleepButton.innerText = "wake up";
    }
    isSleeping = !isSleeping; // Boolean omgekeerd

    // Geluidseffect afspelen
    const sleepSound = document.getElementById('sleepSound');
    sleepSound.play();
});

document.getElementById('skateboarden').addEventListener('click', function() {
    const img = document.getElementById('centeredImage');
    img.src = outfits[currentOutfit].gifSkateboard;

    // Geluidseffect afspelen bron https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    const skateboardSound = document.getElementById('skateboardSound');
    skateboardSound.play();
});







