document.querySelector(".menuBtn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("translate-x-full");
  });
  document.querySelector(".xBtn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("translate-x-full");
  });
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      250: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      552: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      989: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-butoon-next ",
      nextEl: ".swiper-butoon-prev",
    },
  });
  
  var swiper = new Swiper(".MySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv",
    },
  });
  var swiper = new Swiper(".nySwiper", {
    slidesPerView: "1",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      prevEl: ".swiper-button-prevv ",
      nextEl: ".swiper-button-nextt",
    },
  });