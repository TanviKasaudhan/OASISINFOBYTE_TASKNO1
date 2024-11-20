let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
//let menu = document.querySelector('#menu-bar');
//let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classlist.remove('active');
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
    loginform.classlist.remove('active');
};

//menu.addEventListener('click', () => {
    //menu.classlist.toggle('fa-times');
    //navbar.classlist.toggle('active');
//});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classlist.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginform.classlist.add('active');
});

formClose.addEventListener('click', () => {
    loginform.classlist.remove('active');
});



var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerview: 1,
        },
        768: {
            slidesPerview: 2,
        },
        1024: {
            slidesPerview: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerview: 2,
        },
        768: {
            slidesPerview: 3,
        },
        991: {
            slidesPerview: 4,
        },
        1200: {
            slidesPerview: 5,
        },
    },
});