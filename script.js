function toggleMenu() {
  const menu = document.getElementById("menuLinks");
  menu.classList.toggle("open");
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slide-dot");

const leftArrow = document.querySelector(".slider-arrow-left");
const rightArrow = document.querySelector(".slider-arrow-right");

if (slides.length > 0 &&
    dots.length > 0 &&
    leftArrow &&
    rightArrow) {

  let currentSlide = 0;
  
  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } 
    if (currentSlide < 0) {
       currentSlide = slides.length -1;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");    
  }

  let slideTimer;
    
  function startSlideTimer() {
    clearInterval(slideTimer);

    slideTimer = setInterval(function () {
      showSlide(currentSlide + 1);
      }, 15000);
    }
    
  rightArrow.addEventListener("click", function() {showSlide(currentSlide + 1); startSlideTimer();});
  leftArrow.addEventListener("click", function() {showSlide(currentSlide - 1); startSlideTimer();});

  dots.forEach(function (dot, index) {dot.addEventListener("click", function () {showSlide(index); startSlideTimer()});});

  startSlideTimer();
}
