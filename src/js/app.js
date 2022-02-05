import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

let writeUsBtn = document.querySelector(".map__write-us");
let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__cross");
let sliders = document.querySelectorAll(".slider__slide");
let sliderBtns = document.querySelectorAll(".slider__btn");
let sliderCotainer = document.querySelector(".slider .container");

let activeSlide = 0;

writeUsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("popup--active")
})

popupClose.addEventListener("click", (e) => {
  popup.classList.remove("popup--active")
})

for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener("click", (e) => {
    e.preventDefault()
    sliders[activeSlide].classList.remove("slider__slide--active")
    sliderBtns[activeSlide].classList.remove("slider__btn--active")
    sliderCotainer.classList.remove(`container--slide-${activeSlide+1}`)
    activeSlide = i
    sliders[activeSlide].classList.add("slider__slide--active")
    sliderBtns[activeSlide].classList.add("slider__btn--active")
    sliderCotainer.classList.add(`container--slide-${activeSlide+1}`)
  })
}