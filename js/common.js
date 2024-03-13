var swiper = new Swiper(".mainVisualSwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".mvNxtBnt",
    prevEl: ".mvPrvBnt",
  },
  pagination: {
    el: ".mvPgn",
    clickable: true,
  },
});
