document.addEventListener('DOMContentLoaded', function () {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const tickAudio = new Audio('sound/clock-tick-76039.mp3');
    tickAudio.preload = 'auto';

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360 + (seconds / 60) * 6) + 90;
        const hoursDegrees = ((hours % 12) / 12 * 360 + (minutes / 60) * 30) + 90;

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        playTick(seconds);
    }

    let lastSecond = null;
    function playTick(currentSecond) {
        if (currentSecond !== lastSecond) {
            tickAudio.currentTime = 0;
            tickAudio.play().catch(e => {
            });
            lastSecond = currentSecond;
        }
    }

    setInterval(setDate, 1000);
    setDate();
});
