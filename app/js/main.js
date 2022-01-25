// import "./swiper-bundle.min.js"; 
// import { all } from '../js/jquery.mCustomScrollbar.concat.min.js'; 
$.getScript("js/jquery.mCustomScrollbar.concat.min.js", function () {
   console.log("Сценарий загружен, но необязательно выполнен.");
   $(".js-scroll").mCustomScrollbar({
      // scrollInertia: 0,
      mouseWheel: { scrollAmount: 10000 },
   });
});

jQuery(document).ready(function ($) {
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
   // if ($(document).width() <= 768) {

   //    new Swiper('.slider-team', {
   //       pagination: {
   //          el: '.swiper-pagination',
   //          type: 'bullets',
   //       },
   //       breakpoints: {
   //          320: {
   //             slidesPerView: 2,
   //             spaceBetween: 12,
   //          }
   //       },
   //       // spaceBetween: 30,
   //       // slidesPerView: 4,
   //    })
   // }

   // var swiperPagin = new Swiper(".slider-innovation-tabs__pagination", {
   //    slidesPerView: 'auto',
   //    watchSlidesProgress: true,
   // });

   // new Swiper('.slider-innovation-tabs__container', {
   //    navigation: {
   //       prevEl: '.slider-innovation-tabs__prev',
   //       nextEl: '.slider-innovation-tabs__next',
   //    },
   //    slidesPerView: 1,
   //    spaceBetween: 20,
   //    simulateTouch: false,
   //    thumbs: {
   //       swiper: swiperPagin,
   //    },
   //    pagination: {
   //       el: '.slider-innovation-tabs__pagination--mobile',
   //       type: 'bullets',
   //    },
   // })
   // new Swiper(".slider-banner", {
   //    slidesPerView: 1,
   //    direction: 'vertical',
   //    simulateTouch: false,
   //    noSwiping: false,
   //    loop: true,
   //    autoplay: {
   //       delay: 4000,
   //    },

   // });
   // new Swiper('.slider-right__container', {
   //    navigation: {
   //       nextEl: '.slider-right__btn-next',
   //       prevEl: '.slider-right__btn-prev',
   //    },
   //    pagination: {
   //       el: '.slider-right__pagination',
   //       type: 'bullets',
   //    },
   //    breakpoints: {
   //       1400: {
   //          spaceBetween: 110,
   //       },
   //       1100: {
   //          spaceBetween: 20,
   //       },
   //       768: {
   //          slidesPerView: 3,
   //          spaceBetween: 45,
   //       },
   //       320: {
   //          slidesPerView: 2,
   //          spaceBetween: 35,
   //       }
   //    },
   //    slidesPerView: 3,
   //    loop: true,
   // });
   // new Swiper(".promotion-large__slider", {
   //    slidesPerView: 1,
   //    simulateTouch: false,
   //    noSwiping: false,
   //    navigation: {
   //       nextEl: '.promotion-large__btn-right',
   //       prevEl: '.promotion-large__btn-left',
   //    },
   //    pagination: {
   //       el: '.swiper-pagination-main',
   //       type: 'bullets',
   //    },

   // });
   // new Swiper('.slider-articles__swiper', {
   //    navigation: {
   //       nextEl: '.slider-articles__btn-next',
   //       prevEl: '.slider-articles__btn-prev',
   //    },
   //    pagination: {
   //       el: '.slider-articles__pagin',
   //       type: 'bullets',
   //    },
   //    breakpoints: {
   //       1100: {
   //          slidesPerView: 4,
   //          spaceBetween: 30,
   //       },
   //       768: {
   //          slidesPerView: 3,
   //          spaceBetween: 20,
   //       },
   //       576: {
   //          slidesPerView: 15,
   //          slidesPerView: 2,
   //       },
   //       320: {
   //          slidesPerView: 1,
   //          spaceBetween: 15,
   //       }
   //    },
   //    slidesPerView: 4,
   //    loop: true,
   //    observer: true,
   //    observeParents: true,
   // });

   // // sliders end

   $(".js-tabs-item").on('click', function () {
      // aleft('l')
      if (!$(this).hasClass("active")) {
         let btns = $(this).closest(".js-tabs").find(".js-tabs-item");
         let count;
         $(btns).each(function () {
            $(this).removeClass("active");
         })

         $(this).addClass("active");

         $(btns).each(function (index) {
            if ($(this).hasClass("active")) {
               count = index;
            }
         })

         let blocks = $('.js-tabs-body').find('.js-tabs-body-item');

         $(blocks).each(function (index) {
            if (index == count) {
               $(this).addClass("active");
            } else {
               $(this).removeClass("active");
            }
         })
      }

   })


   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }

   // for php  
   if ($('body').hasClass('post-type-archive-product')) {
      $($('.wpfFilterWrapper').find('.wpfFilterContent')).each(function () {
         if ($(document).width() >= 992) {

            // $(this).addClass('wpfHide');
            // $(this).addClass('wpfBlockAnimated');
            $(this).find('.wpfFilterTitle').click();
         }
      })
      $('.js-open-filters').on('click', function () {
         $('.category__filter-wrap').css('display', 'flex');
      })
      $(document).on('click', '.wpfFilterContent__close', function () {
         alert('close')
         $(this).closest('.category__filter-wrap').fadeOut();
         // $(this).closest('.wpfFilterWrapper').find('.wpfFilterTitle').click();
      })
      $(document).on('click', function (e) {
         if (!$(e.target).closest(".js-open-filters").length && !$(e.target).closest(".wpfMainWrapper").length) {
            $('.category__filter-wrap').fadeOut();
         }
         e.stopPropagation();
      });

      $($('.wpfFilterWrapper').find('.wpfFilterTitle')).each(function () {
         $(this).find('.wpfTitleToggle').hide();
         $(this).append('<span class="icon icon-triangle-down"></span>');
      })

      $('.wpfFilterTitle').on('click', function () {
         $(this).find('.icon').toggleClass('open');
      })
      $(".wpfMainWrapper").append('<button class="icon icon-close wpfFilterContent__close"></button>');

      $(".wpfMainWrapper").wrap("<div class='category__filters'><div class='category__filter-wrap'></div></div>");
      $('.woocommerce-ordering').appendTo('.category__filters');

      $('.woocommerce-ordering').wrap("<div class='category__sort-wrap'></div>")


      // optionby

      // Select

      $('.orderby').each(function () {

         // Variables

         var $this = $(this),

            selectOption = $this.find('option'),

            selectOptionLength = selectOption.length,

            selectedOption = selectOption.filter(':selected'),

            dur = 0;

         $this.hide();

         // Wrap all in select box

         $this.wrap('<div class="orderby-style"></div>');



         // Style box

         $('<div>', {

            class: 'orderby-style__gap',

            text: $('.orderby').attr("aria-label"),

         }).insertAfter($this);

         // $('.orderby-style__gap').val($('.orderby').attr('aria-label'))

         var selectGap = $this.next('.orderby-style__gap'),

            caret = selectGap.find('.caret');

         // Add ul list

         $('<ul>', {

            class: 'orderby-style__list'

         }).insertAfter(selectGap);

         var selectList = selectGap.next('.orderby-style__list');

         // Add li - option items

         for (var i = 0; i < selectOptionLength; i++) {


            $('<li>', {


               class: 'orderby-style__item',

               html: $('<span>', {

                  text: selectOption.eq(i).text()


               })

            })

               .attr('data-value', selectOption.eq(i).val())

               .appendTo(selectList);

         }

         // Find all items

         var selectItem = selectList.find('li');


         selectList.slideUp(0);

         selectGap.on('click', function () {


            if (!$(this).hasClass('on')) {

               $(this).addClass('on');

               selectList.slideDown(dur);

               selectItem.on('click', function () {

                  var chooseItem = $(this).data('value');
                  var selectBlock = $(this).closest('.orderby-style');
                  var selectItemAttr = $(this).attr('data-value');

                  $('.orderby').val(chooseItem).attr('selected', 'selected');

                  $('select').val(chooseItem).attr('selected', 'selected');

                  $(selectBlock.find('option')).each(function (i) {
                     var attr = $(this).attr('value');

                     // $(this).removeAttr('selected')

                     if (attr == selectItemAttr) {
                        $(this).attr('selected', 'selected');
                        $(this).click();
                        $(this).selectedIndex = i;
                     }
                  })

                  selectGap.text($(this).find('span').text());

                  selectItem.removeClass('active');

                  $(this).addClass('active');

                  selectList.slideUp(dur);
                  selectGap.removeClass('on');
               });

            } else {

               $(this).removeClass('on');
               selectList.slideUp(dur);

            }

         });


      });
      // optionby end

   }


   // for php end


})