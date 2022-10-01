const swiper = new Swiper('.no-search__slider', {
  // Optional parameters
	slidesPerView: 4,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.no-search__slider-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.no-search__slider-button-next',
    prevEl: '.no-search__slider-button-prev',
  },
});