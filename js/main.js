const menuBtn = document.querySelector(".btn-menu");
const menuMobile = document.querySelector(".header-menu-list");
menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-open");
});

const swiperOne = new Swiper(".feedback-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certiaicates-slider", {
  loop: true,
  slidesPerView: "3",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const accordeon = document.querySelector(".accordeon");
const accordeonTitles = document.querySelectorAll(".accordeon-title");

accordeonTitles.forEach.call(accordeonTitles, (accordeonTitle) => {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon-text");
    accordeonTitle.classList.toggle("accordeon-title-active");
    currentText.classList.toggle("accordeon-text-visible");

    if (currentText.classList.contains("accordeon-text-visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
