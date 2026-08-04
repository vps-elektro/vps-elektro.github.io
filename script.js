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

const chevronItems = document.querySelectorAll(".chevron-item");

const chevronDetailTitle = document.getElementById("chevronDetailTitle");

const chevronDetailText = document.getElementById("chevronDetailText");

if (chevronItems > 0 &&
    chevronDetailTitle &&
    chevronDetailText) {

  const chevronData = [
    {
      title: "Založení firmy",
      text: "5. února 1996 v Moravském Krumlově založení společnosti Oldřichem Panáčkem straším."
    },
    {
      title: "První krůčky",
      text: "Navíjení cívek a transformátorů."
    },
    {
      title: "SMT technologie a nové působiště",
      text: "Nákup poloautomatu a automatu mechatronika, pájecí vlny Novastar a dispenzeru značky Dima, přesun firmy do Miroslavských knínic."
    },
    {
      title: "Kabelové konfekce a veletržní premiéry",
      text: "Rozšíření služeb o výrovu kebelových konfekcí. V roce 2007 premiéra na veletrhu Amper a v roce 2010 na veletrhu ELECTRONICA v Mnichově."
    },
    {
      title: "Modernizace a návrat do Moravského Krumlova",
      text: "Nové prostory v Moravském Krumlově. Rozšíření SMT o zařízení ESSEMTEC Panthera V a Reflow pec JUKI. Nové navíjecí stroje od TPC. První 3D tiskárna Makerbot a 3D fréza."
    },
    {
      title: "Připraveni na větší zakázky",
      text: "Výměna osazovacích strojů za modernější ESSEMTEC FOX1 a FOX2, nákup mycího zařízení na desky plošných spojů InJet DCT a dvou 3D tiskáren Průša." 
    },
    {
      title: "Růst, automatizace a udržitelnost",
      text: "Nákup pajecího robota QUICK, nové navíjevcí stroje TPC a toroidní navíječka RUFF, zařízení pro kabelovou konfekci SCHLEUDIGER. Zavedení čarových kódů ve skladovém hospodářství, pořízení skladovacího stroje SMT kotoučů ESSEMTEC CUBUS. Instalace solárních panelů"
    },
    {
      title: "Flexibilita, obrábění a lakování",
      text: "Pořízení dávkovače pájecí pasty MYCRONIC JET MY700, CNC obrábecího centra DMN450 a selektivní lakovačky PVA Delta 6. Zisk certifikace a zavedení environmetální managementu v oboru výroby avývoje elektroniky. Splnění požadavků normy ČSN EN ISO 14001:2016."
    },
    {
      title: "Rok velkých investic",
      text: "Zahájení stavby administrativních budov. Rozšíření technologií pro výrobu alých kabelových svazku o stroje značky WiMes Wist-10 a WiBS-10. Tisk na průmyslové 3D tiskárně PRAGOSTROJ."
    },
    {
      title: "Vstříc budousnosti",
      text: "Firma slaví 30 let. Inovace technologií selektivního pájení pořízením ERSA VERSAFLOW ONE. Rozšíření o dalšího pájecího robota, laserové vypalování a čištění suchým ledem. Práce na PR firmy"
    }
  ]
    }
