let skillsSection = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".our-skills .progress span");
// console.log(spans);

window.onscroll = function () {
    if (window.scrollY >= skillsSection.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}