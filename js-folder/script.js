const birthdayMessages = [
    "Wishing you a day filled with love and cheer!",
    "May your birthday be as special as you are!",
    "Here's to a year filled with adventure and joy!",
    "Happy Birthday! Enjoy your special day to the fullest!",
    "Wishing you all the happiness in the world on your birthday!",
    "May your year be filled with good luck and good fortune!",
    "Cheers to you on your birthday and always!",
    "May this birthday bring you endless joy and success!"
];

function getRandomMessage() {
    const shuffledMessages = birthdayMessages.sort(() => 0.5 - Math.random());
    return shuffledMessages[0];
}

function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('birthdayMessage');
    const openLabel = document.getElementById('openLabel');

    if (envelope.classList.contains('envelope-closed')) {
        envelope.classList.remove('envelope-closed');
        envelope.classList.add('envelope-open');
        message.style.display = 'block';
        message.textContent = getRandomMessage();
        openLabel.style.display = 'none';
    } else {
        envelope.classList.remove('envelope-open');
        envelope.classList.add('envelope-closed');
        message.style.display = 'none';
        openLabel.style.display = 'block';
    }
}
