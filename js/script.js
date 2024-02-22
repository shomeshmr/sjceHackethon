/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Decrease the delay to 2 seconds (2000 milliseconds)
  autoplay: {
    delay: 2000, // Delay between transitions in milliseconds
    disableOnInteraction: false, // Enable autoplay even if user interacts with swiper
  },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    if (slide.classList.contains("swiper-slide-next")) {
      swiper.slideNext();
    } else if (slide.classList.contains("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName('quote');
  for (const el of quoteEls) {
    el.style.width = el.offsetWidth;
    el.style.height = el.offsetHeight;
  }
  // Assuming textFit is a function from an external library
  textFit(quoteEls, { maxFontSize: 14 });
}

// Call resizeTextToFit initially and on window resize
resizeTextToFit();
addEventListener("resize", resizeTextToFit);
