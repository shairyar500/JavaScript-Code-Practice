const daysCamp = document.getElementById("days");
const hoursCamp = document.getElementById("hours");
const minsCamp = document.getElementById("mins");
const secondsCamp = document.getElementById("seconds");

const endOfBootcamp = '1 oct 2021';

function countdown(){
    const lastDate = new Date(endOfBootcamp);
    const currentDate = new Date();

    const totalSeconds = (lastDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysCamp.innerHTML = days;
    hoursCamp.innerHTML = formatTime(hours);
    minsCamp.innerHTML = formatTime(mins);
    secondsCamp.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}

countdown();

setInterval(countdown, 1000);