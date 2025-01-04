"use strict";

const balls = document.getElementsByClassName('ball');

document.addEventListener('mousemove', actionMoveMouse);

function actionMoveMouse(event) {
    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = (event.clientX - 5) + 'px';
        balls[i].style.top = (event.clientY - 5) + 'px';
    }
}

document.addEventListener("scroll", () => {
    const wrapper = document.querySelector(".wrapper");
    const scrollPosition = window.scrollY;
    wrapper.scrollLeft = scrollPosition;
});
