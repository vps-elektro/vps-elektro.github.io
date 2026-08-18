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

if (chevronItems.length > 0 &&
    chevronDetailTitle &&
    chevronDetailText) {

  const chevronData = [
    {
      title: "Založení firmy",
      text: "5. února 1996 v Moravském Krumlově založení společnosti Oldřichem Panáčkem starším."
    },
    {
      title: "První krůčky",
      text: "Navíjení cívek a transformátorů."
    },
    {
      title: "SMT technologie a nové působiště",
      text: "Nákup poloautomatu a automatu Mechatronika, pájecí vlny Novastar a dispenzeru značky Dima, přesun firmy do Miroslavských Knínic."
    },
    {
      title: "Kabelové konfekce a veletržní premiéry",
      text: "Rozšíření služeb o výrobu kabelových konfekcí. V roce 2007 premiéra na veletrhu AMPER a v roce 2010 na veletrhu ELECTRONICA v Mnichově."
    },
    {
      title: "Modernizace a návrat do Moravského Krumlova",
      text: "Nové prostory v Moravském Krumlově. Rozšíření SMT o zařízení Essemtec Panthera V a Reflow pec JUKI. Nové navíjecí stroje od TPC. První 3D tiskárna Makerbot a 3D fréza."
    },
    {
      title: "Připraveni na větší zakázky",
      text: "Výměna osazovacích strojů za modernější Essemtec Fox1 a Fox2, nákup mycího zařízení na desky plošných spojů InJet DCT a dvou 3D tiskáren Průša." 
    },
    {
      title: "Růst, automatizace a udržitelnost",
      text: "Nákup pájecího robota QUICK, nové navíjecí stroje TPC a toroidní navíječka RUFF, zařízení pro kabelovou konfekci SCHLEUNIGER. Zavedení čárových kódů ve skladovém hospodářství, pořízení skladovacího stroje SMT kotoučů Essemtec Cubus. Instalace solárních panelů."
    },
    {
      title: "Flexibilita, obrábění a lakování",
      text: "Pořízení dávkovače pájecí pasty MYCRONIC JET MY700, CNC obráběcího centra DMN 4500 a selektivní lakovačky PVA Delta 6. Zisk certifikace a zavedení environmetálního managementu v oboru výroby a vývoje elektroniky podle normy ČSN EN ISO 14001:2016."
    },
    {
      title: "Rok velkých investic",
      text: "Zahájení stavby administrativních budov. Rozšíření technologií pro výrobu malých kabelových svazků o stroje značky WiMes Wist-10 a WiBS-10. Tisk na průmyslové 3D tiskárně PRAGOSTROJ."
    },
    {
      title: "Vstříc budoucnosti",
      text: "Firma slaví 30 let. Inovace technologií selektivního pájení pořízením ERSA VERSAFLOW ONE. Rozšíření o dalšího pájecího robota QUICK, laserové vypalování a čištění suchým ledem."
    }
  ];

  let activeChevron = 0;

  function showChevron(index) {
    activeChevron = index;

    let firstVisible;

    if (activeChevron === 0) {
      firstVisible = 0;
    } else if (activeChevron === chevronItems.length - 1) {
      firstVisible = chevronItems.length - 3; 
    } else {
      firstVisible = activeChevron - 1; 
    }
  
    const lastVisible = firstVisible + 2;

    chevronItems.forEach(function (item, itemIndex) {
      item.classList.remove("visible", "active");

      if (
        itemIndex >= firstVisible &&
        itemIndex <= lastVisible
      ) {
        item.classList.add("visible");
      }

      if (itemIndex === activeChevron) {
        item.classList.add("active");
      }
    });

    chevronDetailTitle.textContent = chevronData[activeChevron].title;
    chevronDetailText.textContent = chevronData[activeChevron].text;
  }

chevronItems.forEach(function(item, index) {
  item.addEventListener("click", function() {
    showChevron(index);
  });
});

showChevron(0);
}

const processItems = document.querySelectorAll(".process-item");
const processNavigation = document.querySelector(".process-navigation");
const processDetails = document.querySelectorAll(".process-detail");
const processSection = document.querySelector(".process-section");

processItems.forEach(function(item){
                    item.addEventListener("click", function() {

                      const isActive = item.classList.contains("active");
                      const processName = item.dataset.process;
                      const detail = document.getElementById(processName);

                      if (isActive) {
                        item.classList.remove("active");
                        detail.classList.remove("active");
                        processNavigation.classList.remove("sticky-mode");

                        return;
                      }
                      
                      processItems.forEach(function(otherItem) {
                        otherItem.classList.remove("active");
                      });

                      processDetails.forEach(function(detail) { 
                         detail.classList.remove("active");
                      });
                      
                      item.classList.add("active");
                      detail.classList.add("active");
                      
                      processNavigation.classList.add("sticky-mode");

                      processSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      });
                    });
                  });

const departmentTitle = document.querySelector(".department-title");
const departmentHeader = document.querySelector(".department-header");

departmentTitle.addEventListener("click", function() {

  processItems.forEach(function(item) {
    item.classList.remove("active");
  });

  processDetails.forEach(function(detail) {
    detail.classList.remove("active");
  });

  processNavigation.classList.remove("sticky-mode");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });  
});


const photoSliders = document.querySelectorAll(".photo-slider");

photoSliders.forEach(function(slider) {

  const slides = slider.querySelectorAll(".photo-slide");
  const dots = slider.querySelectorAll(".slider-dot");
  const prevButton = slider.querySelector(".slider-prev");
  const nextButton = slider.querySelector(".slider-next");

  let currentPhotoSlide = 0;

  function showPhotoSlide(index) {

    if (index)
    
  }
  
});
