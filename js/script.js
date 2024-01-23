// swiper
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    }
});

// menu-toggle-btn
let menu_btn = document.querySelector('.menu-toggle-btn');
let isOpen = false;
let menu = document.querySelector(".menu div");

menu_btn.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});

// login-btn
let login_btn = document.querySelector('.login-btn');

login_btn.addEventListener("click", function () {
    location.href = "login.html";
});
