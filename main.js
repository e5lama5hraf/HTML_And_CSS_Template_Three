let skillsSection = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".our-skills .progress span");

let statsSection = document.querySelector(".stats");
let analysisStats = document.querySelectorAll(".stats .content span");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= skillsSection.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
        if (window.scrollY >= statsSection.offsetTop - 200) {
        if (!started) {
            analysisStats.forEach((element) => increaseNums(element));
        }
        started = true;
    }
}

let endDate = new Date("Dec 31 2026 23:59:59");
let counter = setInterval(() => {
    let startDate = new Date();
    let diffDate = endDate - startDate;

    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffDate % (1000 * 60)) / (1000));

    document.querySelector(".events .time .days").innerHTML = days < 10 ? `0${days}`: days;
    document.querySelector(".events .time .hours").innerHTML = hours < 10 ? `0${hours}`: hours;
    document.querySelector(".events .time .minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".events .time .seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;
}, 1000);

function increaseNums(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
};