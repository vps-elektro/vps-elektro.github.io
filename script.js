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

if (departmentTitle && processNavigation) {

departmentTitle.addEventListener("click", function() {
    processNavigation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
});  

}

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
};

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

const processPrevButtons = document.querySelectorAll(".process-prev");
const processTopButtons = document.querySelectorAll(".process-top");
const processNextButtons = document.querySelectorAll(".process-next");

function updateBottomNavigation(currentProcess) {
  const currentIndex = processOrderPCB.indexOf(currentProcess);
  const previousProcess = processOrderPCB[currentIndex - 1];
  const nextProcess = processOrderPCB[currentIndex + 1];

processPrevButtons.forEach(function(button) {

  if (previousProcess) {
    button.style.visibility = "visible";

    button.textContent = "← Předchozí (" + processNamesPCB[previousProcess] + ")";

    button.dataset.process = previousProcess;
  } else {

    button.style.visibility = "hidden";

  }
});

processNextButtons.forEach(function(button) {
  if (nextProcess) {
    button.style.visibility = "visible";

    button.textContent = "Další (" + processNamesPCB[nextProcess] + ") →";

    button.dataset.process = nextProcess;
  } else {

    button.style.visibility = "hidden";
  
  }
});
}

processPrevButtons.forEach(function(button) {

  button.addEventListener("click", function() {
    const process = this.dataset.process;

    document
      .querySelector(`.process-item[data-process="${process}"]`)
      .click();

    
    processNavigation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

processNextButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const process = this.dataset.process;

    document
      .querySelector(`.process-item[data-process="${process}"]`)
      .click();

    processNavigation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

processTopButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    processNavigation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

updateBottomNavigation("data");

const careerBlocks = document.querySelectorAll(".career-content-block");

careerBlocks.forEach(function(block) {

  const moreButton = block.querySelector(".more");
  const lessButton = block.querySelector(".less");

  if (moreButton && lessButton) {

    moreButton.addEventListener("click", function() {
      block.classList.add("open");
    });

    lessButton.addEventListener("click", function() {
      block.classList.remove("open");
    });
  }
  
});


const actualityBlocks = document.querySelectorAll(".actualities-content-block");
const overlay = document.querySelector(".actualities-overlay");

actualityBlocks.forEach(function(block) {

  const preview = block.querySelector(".actualities-preview");
  const moreBtn = block.querySelector(".more");
  const lessBtn = block.querySelector(".less");
  const galleryBtn = block.querySelector(".gallery-open");
  const actualityLink = block.querySelector(".actuality-link");

  moreBtn.addEventListener("click", function() {
    preview.classList.add("actualities-preview-expanded");
    
    block.classList.add("focused");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

    moreBtn.style.display = "none";
    lessBtn.style.display = "inline-flex";

    if (galleryBtn) {
      galleryBtn.style.display = "inline-flex";
    }

    if (actualityLink) {
      actualityLink.style.display = "inline-flex";
    }

  setTimeout(function() {
    const blockRect = block.getBoundingClientRect();

    const blockCenter = 
      window.scrollY +
      blockRect.top + 
      (blockRect.height / 2);

    const viewportCenter = 
      window.innerHeight / 2;
    
    const targetScroll = 
      blockCenter - viewportCenter - 30;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  }, 100);

  });

  lessBtn.addEventListener("click", function() {
    preview.classList.remove("actualities-preview-expanded");

    block.classList.remove("focused");
    overlay.classList.remove("active");

    document.body.style.overflow = "";

    lessBtn.style.display = "none";
    moreBtn.style.display = "inline-flex";

    if (galleryBtn) {
      galleryBtn.style.display = "none";
    }

    if (actualityLink) {
      actualityLink.style.display = "none";
    }

  });

});

document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash.substring(1);

  let process = hash || "data";

  const processItem = document.querySelector(`.process-item[data-process="${process}"]`);

  if (processItem) {
    processItem.click();
  }
});


const galleryOpenButtons = document.querySelectorAll(".gallery-open");
const galleryLightbox = document.querySelector(".gallery-lightbox");
const galleryImage = document.querySelector(".gallery-image");
const galleryClose = document.querySelector(".gallery-close");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");
const galleryCounter = document.querySelector(".gallery-counter");

if (
  galleryLightbox &&
  galleryImage &&
  galleryClose &&
  galleryPrev &&
  galleryNext &&
  galleryCounter
) {

  let galleryImages = [];
  let currentGalleryImage = 0;

  galleryOpenButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        galleryImages = button.dataset.images
          .split(",")
          .map(function(image){
            return image.trim();
          });

        currentGalleryImage = 0;

        showGalleryImage();

        galleryLightbox.classList.add("active");
    });
  });

  function showGalleryImage() {
    galleryImage.src = galleryImages[currentGalleryImage];

    galleryCounter.textContent =
      (currentGalleryImage + 1) + "/" + galleryImages.length;
  }

  galleryNext.addEventListener("click", function() {
    currentGalleryImage++;
    if (currentGalleryImage>=galleryImages.length) {
      currentGalleryImage = 0;
    }
    showGalleryImage();
  });

  galleryPrev.addEventListener("click", function() {
    currentGalleryImage--;

    if (currentGalleryImage<0) {
      currentGalleryImage = galleryImages.length - 1;
    }
    showGalleryImage();
  });

  galleryClose.addEventListener("click", function() {
    galleryLightbox.classList.remove("active");
  });

}


const actualityItems = document.querySelectorAll(".actualities-content-block");

const actualitiesPerPage = 5;

let currentActualityPage = 1;

const pagination = document.querySelector(".actualities-pagination")

function showActualityPage(page) {
  currentActualityPage = page;

  const start = (page - 1) * actualitiesPerPage;
  const end = start + actualitiesPerPage;

  actualityItems.forEach(function(item, index) {

    if (index >= start && index < end) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });

  createPagination()

}

function createPagination() {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(actualityItems.length / actualitiesPerPage);

  const visiblePages = 5;

  let startPage = currentActualityPage - Math.floor(visiblePages / 2);
  let endPage = currentActualityPage + Math.floor(visiblePages / 2);

  const footer = document.querySelector(".footer")

  if (totalPages <= 1) {
    pagination.style.display = "none";
    footer.classList.add("actualities")
    return;
  }

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(visiblePages, totalPages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - visiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement("button");

    button.textContent = i;

    button.classList.add("pagination-btn");

    if (i === currentActualityPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", function(){
      showActualityPage(i);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    pagination.appendChild(button);
  }
}

if (pagination && actualityItems.length > 0) {showActualityPage(1);}


const homeActualitiesContent = document.getElementById("home-actualities-content");

if (homeActualitiesContent) {

  fetch("aktuality.html").then(function(response) {
    return response.text();
  }).then(function(html) {

    const parser = new DOMParser();

    const actualitiesDocument = parser.parseFromString(html, "text/html");

    const actualityBlocks = actualitiesDocument.querySelectorAll(".actualities-content-block");

    const latestActualities = Array.from(actualityBlocks).slice(0, 3);

    latestActualities.forEach(function(actuality, index) {

        const image = actuality.querySelector(".actualities-content-image img");

        const title = actuality.querySelector(".actualities-content-text-header h2");

        if (!image || !title) {
          return;
        }

        const card = document.createElement("div");
        card.classList.add("home-actuality-card");

        const cardImage = document.createElement("img");
        cardImage.src = image.getAttribute("src");
        cardImage.alt = image.getAttribute("alt") || "";

        const cardTitle = document.createElement("h3");

        const cardLink = document.createElement("a");
        cardLink.textContent = title.textContent.trim();
        cardLink.href = "aktuality.html?aktualita=" + index

        cardTitle.appendChild(cardLink);

        card.appendChild(cardImage);
        card.appendChild(cardTitle);

        homeActualitiesContent.appendChild(card);

    });

  });

}

const params = new URLSearchParams(window.location.search);
const actualityIndex = params.get("aktualita");

if (actualityIndex !== null) {

  const actualityBlocks = document.querySelectorAll(".actualities-content-block");

  const targetActuality = actualityBlocks[Number(actualityIndex)];

  if (targetActuality) {
    const moreBtn = targetActuality.querySelector(".more");

    if (moreBtn) {
      moreBtn.click();
    }
  }
}

const productionVideo = document.getElementById("production-video");

if (productionVideo) {

  productionVideo.addEventListener("ended", function() { 
    productionVideo.load();
  });

}

const productBlocks = document.querySelectorAll(".our-product-block");
const productOverlay = document.querySelector(".our-product-overlay");

productBlocks.forEach(function(block) {

  const preview = block.querySelector(".our-product-preview");
  const moreBtn = block.querySelector(".more");
  const lessBtn = block.querySelector(".less");

  if (preview &&
      moreBtn &&
      lessBtn &&
      productOverlay
     ) {
      moreBtn.addEventListener("click", function() {

        preview.classList.add("our-product-preview-expanded");

        block.classList.add("focused");
        productOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

        moreBtn.style.display = "none";
        lessBtn.style.display = "inline-flex";

        setTimeout(function() {

          const blockRect = block.getBoundingClientRect();

          const blockCenter = 
            window.scrollY +
            blockRect.top +
            (blockRect.height /2);

          const viewportCenter =
            window.innerHeight / 2;

          const targetScroll = 
            blockCenter - viewportCenter - 30;

          window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
          });

        }, 100);

      });

      lessBtn.addEventListener("click", function() {

        preview.classList.remove("our-product-preview-expanded");

        block.classList.remove("focused");
        productOverlay.classList.remove("active");

        document.body.style.overflow = "";

        lessBtn.style.display = "none";
        moreBtn.style.display = "inline-flex";

      });

     }

});


const productItems = document.querySelectorAll(".our-product-block");
const productsPerPage = 5;
let currentProductPage = 1;
const productPagination = document.querySelector(".our-products-pagination");

function showProductPage(page) {

  currentProductPage = page;

  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;

  productItems.forEach(function(item, index) {

    if (index >= start && index < end) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }

  });

  createProductPagination();

}

function createProductPagination() {

  productPagination.innerHTML = "";

  const totalPages = 
    Math.ceil(productItems.length / productsPerPage);

  const footer = document.querySelector(".footer")

  if (totalPages <= 1) {
    productPagination.style.display = "none";
    footer.classList.add("actualities")
    return;
  }

  const visiblePages = 5;

  let startPage = 
    currentProductPage - Math.floor(visiblePages / 2);

  let endPage = 
    currentProductPage + Math.floor(visiblePages / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(visiblePages, totalPages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - visiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {

    const button = document.createElement("button");

    button.textContent = i;

    button.classList.add("pagination-btn");

    if (i === currentProductPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", function() {

      showProductPage(i);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

    productPagination.appendChild(button);

  }

}

if (productPagination && productItems.length > 0) {
  showProductPage(1);
}
