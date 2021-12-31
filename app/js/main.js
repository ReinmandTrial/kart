$(document).ready(function () {
   // burger
   $('.js-burger').on('click', function () {
      $(this).closest('.js-burger-block').toggleClass('open');
      $(this).toggleClass('icon-burger');
      $(this).toggleClass('icon-close');
   })
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".js-burger-block").length) {
         $('.js-burger-block').removeClass('open');
         $('.js-burger').addClass('icon-burger');
         $('.js-burger').removeClass('icon-close');
      }
      e.stopPropagation();
   });
   // burger end

   // select
   $('.js-select-head').on('click', function () {
      var thisSelect = $(this).closest('.js-select');

      $('.js-select').not(thisSelect).removeClass('open');
      thisSelect.toggleClass('open');
      if ($(this).closest('.js-burger')) {
         $('.js-burger-block').removeClass('open');
         $('.js-burger').addClass('icon-burger');
         $('.js-burger').removeClass('icon-close');
      }
   })
   $('.js-select-item').on('click', function () {
      var thisVal = $(this).text();

      $(this).closest('.js-select').find('.js-select-title').text(thisVal);
      $(this).closest('.js-select').find('.js-select-item').removeClass('active');
      $(this).addClass('active');

      $(this).closest('.js-select').removeClass('open');
   })
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".js-select").length) {
         $('.js-select').not('.js-simple-select').removeClass('open');
      }
      e.stopPropagation();
   });

   $('.js-notification').on('click', function () {
      $('.js-burger-block').removeClass('open');
      $('.js-burger').addClass('icon-burger');
      $('.js-burger').removeClass('icon-close');

      $('.js-notification-body').toggleClass('open');

   })
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".js-notification-body").length && !$(e.target).closest(".js-notification").length) {
         $('.js-notification-body').removeClass('open');
      }
      e.stopPropagation();
   });

   $('.js-accordion-head').on('click', function () {
      var thisAcc = $(this).closest('.js-accordion');
      $('.js-accordion').not(thisAcc).removeClass('open');
      $('.js-accordion').not(thisAcc).find('.js-accordion-body').slideUp(300);

      if (thisAcc.hasClass('open')) {
         thisAcc.find('.js-accordion-body').slideUp(300);
         thisAcc.removeClass('open');
      } else {
         thisAcc.find('.js-accordion-body').slideDown(300);
         thisAcc.addClass('open');
      }


   })

   // popup
   $('.btn-popup-search').on('click', function () {
      $('.popup-search').fadeIn(200);
   })
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".btn-popup").length && !$(e.target).closest(".popup__content").length) {
         $('.popup').fadeOut(200);
      }
      e.stopPropagation();
   });
   $('.popup-close').on('click', function () {
      $(this).closest('.popup').fadeOut(200);
   })
   // popup end

   // search
   $('.popup-search__input').on('keyup', function () {
      if ($(this).val().length > 0) {
         $('.popup-search').addClass('fill');
         // if (event.keyCode == 13) {
         $('.popup-search').addClass('find');
         // }
      } else {
         $('.popup-search').removeClass('fill');
      }
   });
   $('.popup-search__input-to-clear').on('click', function () {
      $('.popup-search__input').val('');
      $('.popup-search').removeClass('fill');
   });
   // search end

   // sliders
   if ($(document).width() <= 768) {

      new Swiper('.slider-team', {
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
         },
         breakpoints: {
            320: {
               slidesPerView: 2,
               spaceBetween: 12,
            }
         },
         // spaceBetween: 30,
         // slidesPerView: 4,
      })
   }

   var swiperPagin = new Swiper(".slider-innovation-tabs__pagination", {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
   });

   new Swiper('.slider-innovation-tabs__container', {
      navigation: {
         prevEl: '.slider-innovation-tabs__prev',
         nextEl: '.slider-innovation-tabs__next',
      },
      slidesPerView: 1,
      spaceBetween: 20,
      simulateTouch: false,
      thumbs: {
         swiper: swiperPagin,
      },
      pagination: {
         el: '.slider-innovation-tabs__pagination--mobile',
         type: 'bullets',
      },
   })


   // sliders end



})