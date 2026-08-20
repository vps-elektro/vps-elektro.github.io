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
const processDetails = document.querySelectorAll(".process-detail");

processItems.forEach(function(item){
                    item.addEventListener("click", function() {

                      const processName = item.dataset.process;
                      const detail = document.getElementById(processName);
                      
                      processItems.forEach(function(otherItem) {
                        otherItem.classList.remove("active");
                      });

                      processDetails.forEach(function(detail) { 
                         detail.classList.remove("active");
                      });
                      
                      item.classList.add("active");
                      detail.classList.add("active");
                    });
                  });


const departmentTitle = document.querySelector(".department-title");
const processNavigation = document.getElementById("process-navigation");

departmentTitle.addEventListener("click", function() {
    processNavigation.scrollIntoView({
      behavior: "smooth",
      block: "start"
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

    if (index >= slides.length) {
      currentPhotoSlide = 0; 
    }

    else if (index < 0) {
      currentPhotoSlide = slides.length - 1;
    }

    else {
      currentPhotoSlide = index;
    }

    slides.forEach(function(slide) {
      slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });

    slides[currentPhotoSlide].classList.add("active");
    dots[currentPhotoSlide].classList.add("active");
    
  }

  nextButton.addEventListener("click", function() {
    showPhotoSlide(currentPhotoSlide + 1);
  });

  prevButton.addEventListener("click", function() {
    showPhotoSlide(currentPhotoSlide - 1);
  });

  dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
      showPhotoSlide(index);
    });
  });
  
});


const departmentCurrentPCB = document.getElementById("department-current");

const processNamesPCB = {
  data: "Data",
  material: "Materiál",
  pasta: "Pasta",
  smt: "SMT",
  reflow: "Reflow",
  tht: "THT",
  myti: "Mytí",
  kontrola: "Kontrola",
  lakovani: "Lakování",
  expedice: "Expedice"
}

document.querySelectorAll(".process-item").forEach(function(item) {
  item.addEventListener("click", function() {
    const process = this.dataset.process;

    departmentCurrentPCB.textContent = processNamesPCB[process];

    updateBottomNavigation(process);
  });
});


const processOrderPCB = [
  "data",
  "material",
  "pasta",
  "smt",
  "reflow",
  "tht",
  "myti",
  "kontrola",
  "lakovani",
  "expedice"
];

const processPrev = document.getElementById("process-prev");
const processTop = document.getElementById("process-top");
const processNext = document.getElementById("process-next");

function updateBottomNavigation(currentProcess) {
  const currentIndex = processOrderPCB.indexOf(currentProcess);
  const previousProcess = processOrderPCB[currentIndex - 1];
  const nextProcess = processOrderPCB[currentIndex + 1];

if (previousProcess) {
  processPrev.style.visibility = "visible";

  processPrev.textContent = "← Předchozí (" + processNamesPCB[previousProcess] + ")";

  processPrev.dataset.process = previousProcess;
} else {

  processPrev.style.visibility = "hidden";

}
  
if (nextProcess) {
  processNext.style.visibility = "visible";

  processNext.textContent = "Další (" + processNamesPCB[nextProcess] + ") →";

  processNext.dataset.process = nextProcess;
} else {

  processNext.style.visibility = "hidden";
  
}
  
}

processPrev.addEventListener("click", function() {
  const process = this.dataset.process;

  document
    .querySelector(`.process-item[data-process="${process}"]`)
    .click();
});

processNext.addEventListener("click", function() {
  const process = this.dataset.process;

  document
    .querySelector(`.process-item[data-process="${process}"]`)
    .click();
});

processTop.addEventListener("click", function() {
  processNavigation.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

updateBottomNavigation("data");
