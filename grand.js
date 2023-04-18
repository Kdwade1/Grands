"use strict";
(function () {

    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let thumbnail = document.getElementsByClassName("thumbnail");
    let hero = document.getElementById("hero")

    let bgImg = ["img/room1.jpg",
        "img/room2.jpg",
        "img/room3.jpg",
        "img/room4.jpg",
        "img/room5.jpg"];
    let i = 0;
    next.onclick = function () {
        if (i < 4) {
            hero.style.backgroundImage = 'url("' + bgImg[i + 1] + '")';
            thumbnail[i+1].classList.add("active")
            thumbnail[i].classList.remove("active")
            i++
        }
    }
    prev.onclick = function () {
        if (i > 0) {
            hero.style.backgroundImage = 'url("' + bgImg[i - 1] + '")';
            thumbnail[i-1].classList.add("active")
            thumbnail[i].classList.remove("active")
            i--
        }
    }



})();