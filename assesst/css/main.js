let button_show = document.querySelector(".button__show");
let button_show_mobile = document.querySelector(".button__show-mobile");
let modal = document.querySelector(".modal");
let modal_container = document.querySelector(".modal__container");


function showForm() {
    modal.classList.add('open')
}
button_show.addEventListener('click', showForm);
button_show_mobile.addEventListener('click', showForm);

function closeForm() {
    modal.classList.remove('open')
}
modal.addEventListener('click', closeForm);
modal_container.addEventListener('click', function(e) {
    e.stopPropagation();
})


// slide show

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// auto slideshow
// var slideIndex = 0;
// showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


const number_45 = document.querySelector("#number-45")
const number_126 = document.querySelector("#number-126")
const number_452 = document.querySelector("#number-452")
const number_247 = document.querySelector("#number-247")



let startNumber = 0;
let endNumber_45 = 45;
number_45.innerHTML = startNumber

function countUp_45(count) {
    number_45.innerHTML = count;

    if (count < endNumber_45) {
        setTimeout(() => countUp_45(count + 1), 5)
    }
}

let endNumber_126 = 126;
number_126.innerHTML = startNumber;

function countUp_126(count) {
    number_126.innerHTML = count;
    if (count < endNumber_126) {
        setTimeout(() => countUp_126(count + 2), 5)
    }
}


let endNumber_452 = 452;
number_452.innerHTML = startNumber;

function countUp_452(count) {
    number_452.innerHTML = count;
    if (count < endNumber_452) {
        setTimeout(() => countUp_452(count + 5), 5)
    }
}


let endNumber_247 = 247;
number_247.innerHTML = startNumber;

function countUp_247(count) {
    number_247.innerHTML = count;
    if (count < endNumber_247) {
        setTimeout(() => countUp_247(count + 3), 5)
    }
}

window.addEventListener('scroll', () => { countUp_45(startNumber) })
window.addEventListener('scroll', () => { countUp_126(startNumber) })
window.addEventListener('scroll', () => { countUp_452(startNumber) })
window.addEventListener('scroll', () => { countUp_247(startNumber) })



const video_img = document.querySelector(".video_img");
const play = document.querySelector(".video__icon");
const video__play = document.querySelector(".video__play")

const modal__video = document.querySelector(".modal__video");

function show_video() {
    modal__video.classList.add("open");
    video__play.src = "https://player.vimeo.com/video/127347999?title=0&byline=0&portrait=0&autoplay=1;"
    video__play.style.display = "block"
}
play.addEventListener('click', show_video);
video_img.addEventListener('click', show_video);

function hide__video() {
    modal__video.classList.remove("open");
    video__play.src = "";
    video__play.style.display = "none";
}

video__play.addEventListener('click', function(e) {
    e.stopPropagation();
})

modal__video.addEventListener('click', hide__video);



const showMenuMobile = document.querySelector(".nav__menu-mobile");
const buttonShow = document.querySelector(".header__mobile-icon");

function show_mobile() {
    if (showMenuMobile.style.display === 'none') {
        showMenuMobile.style.display = 'block'
    } else {
        showMenuMobile.style.display = 'none'
    }

}
buttonShow.addEventListener('click', show_mobile)