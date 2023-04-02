'use strict';
// Toggle Class Active

const navbarNav = document.querySelector('.navbar-nav');

//Ketika Hamburger Di Klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik Diluar Sidebar Untuk Menghilangkan Menu

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 2.0) {
            revealElements[i].classList.add("revealed");
        }
    }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// // Window Change
// const docTitle = document.title;
// window.addEventListener("blur", () => {
//     document.title = "Balik Lagi Yaaa ;(";
// });

// window.addEventListener("focus", () => {
//     document.title = docTitle;
// });

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}
