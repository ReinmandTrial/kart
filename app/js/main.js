jQuery(document).ready(function ($) {
   // $(".js-scroll").mCustomScrollbar({
   //    scrollInertia: 0,
   //    mouseWheel: { scrollAmount: 40 },
   // });
   AOS.init({
   });


   if ($(window).width() >= 768) {
      $($('body').find('.product__categories-block')).each(function () {
         let block = $(this),
            newWrap = block.find(".product__categories-more-wrap"),
            hiddenWrap = block.find(".product__categories-more");

         while ($(this).width() >= $(this).closest(".product__categories").width()) {
            hiddenWrap.show();
            newWrap.prepend(block.children(".product__categories-link").eq(-2));
         }
      })
   }
   $($('body').find('.product__categories-block')).each(function () {
      let block = $(this),
         newWrap = block.find(".product__categories-more-wrap"),
         hiddenWrap = block.find(".product__categories-more");

      while ($(this).width() >= $(this).closest(".product__categories").width()) {
         hiddenWrap.show();
         newWrap.prepend(block.children(".product__categories-link").eq(-2));
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

   let btnTop = document.querySelector('.btn-top')
   function toTop() {
      if (window.pageYOffset > 300) {
         btnTop.style.opacity = '1'
      } else { btnTop.style.opacity = '0' }

   }

   let headerHide = document.querySelector('.header')
   function headerToHide() {
      if (window.pageYOffset > 100) {
         headerHide.classList.remove('aos-animate')
      } else { headerHide.classList.add('aos-animate') }

   }
   $(document).on('scroll', function () {
      toTop();
      headerToHide();
   })

   // burger

   $('.js-burger').on('click', function () {
      $(this).closest('.js-burger-block').toggleClass('open');
      // $(this).toggleClass('icon-burger');
      // $(this).toggleClass('icon-close');
   })
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".js-burger-block").length) {
         $('.js-burger-block').removeClass('open');
         // $('.js-burger').addClass('icon-burger');
         // $('.js-burger').removeClass('icon-close');
      }
      e.stopPropagation();
   });
   // burger end

   // select
   $('.js-select-head').on('click', function () {
      var thisSelect = $(this).closest('.js-select');

      $('.js-select').not(thisSelect).not('.js-simple-select').removeClass('open');
      thisSelect.toggleClass('open');
      if ($(this).closest('.js-burger')) {
         $('.js-burger-block').removeClass('open');
         // $('.js-burger').addClass('icon-burger');
         // $('.js-burger').removeClass('icon-close');
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
      // $('.js-burger').addClass('icon-burger');
      // $('.js-burger').removeClass('icon-close');

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

   // popup media
   $('.page-media__item').on('click', function () {
      $('.popup-media').fadeIn(200);
   })
   // popup media end

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

   $('.header__search-btn').on('click', function () {
      $(this).closest('.header__search').addClass('open');
   })
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".header__search").length) {
         $('.header__search').removeClass('open');
      }
      e.stopPropagation();
   });
   // search end


   new Swiper('.slider-team', {
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
      },
      breakpoints: {
         992: {
            slidesPerView: 4,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         0: {
            slidesPerView: 2,
            spaceBetween: 12,
         }
      },
      watchOverflow: true,
      // spaceBetween: 30,
      // slidesPerView: 4,
   })



   const sliderInnovationTabs = new Swiper(".slider-innovation-tabs__pagination", {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
   });

   const sliderInnovationImages = new Swiper(".innovation-categories-images-slider__container", {
      slidesPerView: 1,
      watchSlidesProgress: true,
      simulateTouch: false,

   });

   const sliderInnovationMain = new Swiper('.slider-innovation-tabs__container', {
      navigation: {
         prevEl: '.slider-innovation-tabs__next',
         nextEl: '.slider-innovation-tabs__prev',
      },
      slidesPerView: 1,
      spaceBetween: 20,
      simulateTouch: false,
      thumbs: {
         //    // swiper: sliderInnovationImages,
         swiper: sliderInnovationTabs,
      },
      pagination: {
         el: '.slider-innovation-tabs__pagination--mobile',
         type: 'bullets',
      },
   })
   sliderInnovationMain.on('slidePrevTransitionStart', function () {
      sliderInnovationImages.slidePrev();
      console.log('prev');

   });
   sliderInnovationMain.on('slideNextTransitionStart', function () {
      sliderInnovationImages.slideNext();
      console.log('Next');

   });
   new Swiper(".slider-banner", {
      slidesPerView: 1,
      direction: 'vertical',
      simulateTouch: false,
      noSwiping: false,
      loop: true,
      autoplay: {
         delay: 4000,
      },
   });
   var swiperRight = new Swiper('.slider-right__container', {
      navigation: {
         nextEl: '.slider-right__btn-next',
         prevEl: '.slider-right__btn-prev',
      },
      pagination: {
         el: '.slider-right__pagination',
         type: 'bullets',
      },
      breakpoints: {
         1400: {
            spaceBetween: 110,
         },
         1100: {
            spaceBetween: 20,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 45,
         },
         320: {
            slidesPerView: 2,
            spaceBetween: 35,
         }
      },
      autoplay: {
         delay: 3700,
         disableOnInteraction: false,
      },
      slidesPerView: 3,
      loop: true,
   });
   swiperRight.on('afterInit slideChange', function () {
      var el = $('.slider-right .timer:last-child'),
         newone = el.clone(true);

      el.before(newone);
      el.remove();

   });
   var swiperPromotion = new Swiper(".promotion-large__slider", {
      slidesPerView: 1,
      simulateTouch: false,
      noSwiping: false,
      navigation: {
         nextEl: '.promotion-large__btn-right',
         prevEl: '.promotion-large__btn-left',
      },
      pagination: {
         el: '.swiper-pagination-main',
         type: 'bullets',
      },
      autoplay: {
         delay: 3700,
         disableOnInteraction: false,
      },
      loop: true,

   });
   swiperPromotion.on('afterInit slideChange', function () {
      var el = $('.promotion-large__slider .timer:last-child'),
         newone = el.clone(true);

      el.before(newone);
      el.remove();

   });
   var swiperArticles = new Swiper('.slider-articles__swiper', {
      navigation: {
         nextEl: '.slider-articles__btn-next',
         prevEl: '.slider-articles__btn-prev',
      },
      pagination: {
         el: '.slider-articles__pagin',
         type: 'bullets',
      },
      breakpoints: {
         1100: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         576: {
            slidesPerView: 15,
            slidesPerView: 2,
         },
         320: {
            slidesPerView: 1,
            spaceBetween: 15,
         }
      },
      slidesPerView: 4,
      observer: true,
      observeParents: true,
      autoplay: {
         delay: 3700,
         disableOnInteraction: false,
      },
      slidesPerView: 3,
      loop: true,
   });
   swiperArticles.on('afterInit slideChange', function () {
      var el = $('.slider-articles .timer:last-child'),
         newone = el.clone(true);

      el.before(newone);
      el.remove();

   });
   new Swiper('.slider-product', {
      navigation: {
         nextEl: '.slider-product__btn-right',
         prevEl: '.slider-product__btn-left',
      },
      pagination: {
         el: '.slider-product__pagin',
         type: 'bullets',
      },
      breakpoints: {
         1100: {
            slidesPerView: 4,
            spaceBetween: 32,
         },
         768: {
            slidesPerView: 3,
         },
         576: {
            spaceBetween: 20,
         },
         0: {
            slidesPerView: 2,
            spaceBetween: 8,
         }
      },
      slidesPerView: 4,
      watchOverflow: true,
   });
   $($('.woocommerce #reviews #comments ol.commentlist').find('li')).each(function () {
      $(this).addClass('swiper-slide');
   })
   new Swiper('.slider-reviews', {
      navigation: {
         nextEl: '.slider-reviews__btn-right',
         prevEl: '.slider-reviews__btn-left',
      },
      pagination: {
         el: '.slider-reviews__pagin',
         type: 'bullets',
      },
      breakpoints: {
         1100: {
            slidesPerView: 3,
         },
         992: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         0: {
            slidesPerView: 1,
            spaceBetween: 20,
         }
      },
      slidesPerView: 3,
      watchOverflow: true,
      // loop: true,
      observer: true,
      observeParents: true
   });


   $($('body').find('.slider-product')).each(function () {
      let sliderProductSlides = 0;
      // console.log('slides amount');

      $($('.slider-product').find('.slider-product__slide')).each(function () {
         sliderProductSlides++;
      })
      if (sliderProductSlides = 0) {
         $(this).hide();
      }
   });
   // $($('.slider-product').find('.slider-product__slide')).each(function () {
   //    sliderProductSlides++;
   // })
   // if (sliderProductSlides = 0) {

   // }



   // sliders end

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
               // $(this).show();
            } else {
               $(this).removeClass("active");
               // $(this).hide();
            }
         })
      }

   })


   //    const anchors = document.querySelectorAll('a[href*="#"]')

   //    for (let anchor of anchors) {
   //       anchor.addEventListener('click', function (e) {
   //          e.preventDefault()

   //          const blockID = anchor.getAttribute('href').substr(1)

   //          document.getElementById(blockID).scrollIntoView({
   //             behavior: 'smooth',
   //             block: 'start'
   //          })
   //       })
   //    }

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

   // prodact page
   $('.variations_form').append('<span">תכולה</span>');
   $('.product__social-share .ya-share2 .ya-share2__item_service_facebook a').append('<span class="socials-link icon icon-facebook"></span>');

   $('.product__social-share .ya-share2 .ya-share2__item_service_whatsapp a').append('<span class="socials-link icon icon-call"></span>');
   $('.product__social-share .ya-share2 .ya-share2__item_service_twitter a').append('<span class="socials-link icon icon-twitter"></span>');
   $('.product__social-share .ya-share2 .ya-share2__item_service_telegram a').append('<span class="socials-link icon icon-telegram"></span>');

   // prodact page end

   // acticle 
   $('.post__to-share-socials .ya-share2 .ya-share2__item_service_facebook a').append('<span class="socials-link icon icon-facebook"></span>');
   $('.post__to-share-socials .ya-share2 .ya-share2__item_service_whatsapp a').append('<span class="socials-link icon icon-call"></span>');
   $('.post__to-share-socials .ya-share2 .ya-share2__item_service_pinterest a').append('<span class="socials-link icon icon-pint"></span>');
   // acticle end

   // news  
   $('.news-sidebar__socials .ya-share2 .ya-share2__item_service_facebook a').append('<span class="socials-link icon icon-facebook"></span>');
   $('.news-sidebar__socials .ya-share2 .ya-share2__item_service_twitter a').append('<span class="socials-link icon icon-twitter"></span>');
   $('.news-sidebar__socials .ya-share2 .ya-share2__item_service_pinterest a').append('<span class="socials-link icon icon-pint"></span>');
   // news end

   // gallery slider
   var swiper = new Swiper(".swiper-pagin", {
      spaceBetween: 20,
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      direction: "vertical",
   });
   var swiper2 = new Swiper(".gallery-slider", {
      simulateTouch: true,
      loop: true,
      spaceBetween: 50,
      thumbs: {
         swiper: swiper,
      },
      pagination: {
         el: '.gallery-slider__pagin',
         type: 'bullets',
      },
   });
   // gallery slider end






   // for php end


   // textarea
   (function ($) {
      $.fn.autogrow = function (options) {
         return this.filter('textarea').each(function () {
            var self = this;
            var $self = $(self);
            var minHeight = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;
            var settings = $.extend({
               preGrowCallback: null,
               postGrowCallback: null
            }, options);

            var shadow = $('<div></div>').css({
               position: 'absolute',
               top: -10000,
               left: -10000,
               width: $self.width(),
               fontSize: $self.css('fontSize'),
               fontFamily: $self.css('fontFamily'),
               fontWeight: $self.css('fontWeight'),
               lineHeight: $self.css('lineHeight'),
               resize: 'none',
               'word-wrap': 'break-word'
            }).appendTo(document.body);

            var update = function (event) {
               var times = function (string, number) {
                  for (var i = 0, r = ''; i < number; i++) r += string;
                  return r;
               };

               var val = self.value.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/\n$/, '<br/>&#xa0;')
                  .replace(/\n/g, '<br/>')
                  .replace(/ {2,}/g, function (space) { return times('&#xa0;', space.length - 1) + ' ' });

               // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
               if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
                  val += '<br />';
               }

               shadow.css('width', $self.width());
               shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.

               var newHeight = Math.max(shadow.height() + noFlickerPad, minHeight);
               if (settings.preGrowCallback != null) {
                  newHeight = settings.preGrowCallback($self, shadow, newHeight, minHeight);
               }

               $self.height(newHeight);

               if (settings.postGrowCallback != null) {
                  settings.postGrowCallback($self);
               }
            }

            $self.change(update).keyup(update).keydown({ event: 'keydown' }, update);
            $(window).resize(update);

            update();
         });
      };
   })(jQuery);

   $('.page-contact-us__textarea .textarea').autogrow();
   // textarea end

   // tabs
   // transform

   (function ($, window, document) {
      "use strict";

      var div = document.createElement("div"),
         divStyle = div.style,
         prefixes = [
            "O",
            "ms",
            "Webkit",
            "Moz"
         ],
         prefix,
         i = prefixes.length,
         properties = [
            "transform",
            "transformOrigin",
            "transformStyle",
            "perspective",
            "perspectiveOrigin",
            "backfaceVisibility"
         ],
         property,
         j = prefixes.length;

      // Find the right prefix
      while (i--) {
         if (prefixes[i] + leadingUppercase(properties[0]) in divStyle) {
            prefix = prefixes[i];
            continue;
         }
      }

      // This browser is not compatible with transforms
      if (!prefix) { return; }

      // Build cssHooks for each property
      while (j--) {
         property = prefix + leadingUppercase(properties[j]);

         if (property in divStyle) {

            // px isn't the default unit of this property
            $.cssNumber[properties[j]] = true;

            // populate cssProps
            $.cssProps[properties[j]] = property;

            // MozTranform requires a complete hook because "px" is required in translate
            property === "MozTransform" && ($.cssHooks[properties[j]] = {
               get: function (elem, computed) {
                  return (computed ?
                     // remove "px" from the computed matrix
                     $.css(elem, property).split("px").join("") :
                     elem.style[property]
                  );
               },
               set: function (elem, value) {
                  // add "px" to matrices
                  /matrix\([^)p]*\)/.test(value) && (
                     value = value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, "matrix$1$2px,$3px")
                  );
                  elem.style[property] = value;
               }
            });

         }
      }

      function leadingUppercase(word) {
         return word.slice(0, 1).toUpperCase() + word.slice(1);
      }

   })(jQuery, window, document);
   // transform end
   $(".js-tabs-head-item").on('click', function () {
      // aleft('l')
      if (!$(this).hasClass("active")) {
         let btns = $(this).closest(".js-tabs").find(".js-tabs-head-item");
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
               if ($(this).hasClass('js-anim-left')) {
                  $(this).css('display', 'block')
                     .css('left', '100px').css('opacity', '0')
                     .animate({
                        // transform: "translate3d(0, 0, 0)",
                        left: '0px',
                        opacity: '1'
                     }, 400)
               }
            } else {
               $(this).removeClass("active");
               if ($(this).hasClass('js-anim-left')) {
                  $(this).css('opacity', '0').css('display', 'none')
               }
            }
         })
      }

   })
   // tabs end

   ///quantity plus
   $(document).on('click', '.js-quantity-plus', function () {
      var btn = $(this);
      var Block = btn.closest('.js-quantity');
      var kol = Block.find('.js-quantity-input').val();
      if (kol <= 100) {
         kol++;
      }
      Block.find('.js-quantity-input').val(kol);
      Block.find('.js-quantity-input').trigger('change');
   });

   ///quantity minus
   $(document).on('click', '.js-quantity-minus', function () {
      var btn = $(this);
      var Block = btn.closest('.js-quantity');
      var kol = Block.find('.js-quantity-input').val();
      if (kol > 0) {
         kol--;
      }
      Block.find('.js-quantity-input').val(kol);
      Block.find('.js-quantity-input').trigger('change');
   });

   // amount comments
   let amountComments = 0;
   $($('.tabs__body .commentlist').find('li')).each(function () {
      amountComments++;
   })
   $('.tabs__item[data-tab-open="reviews"] span').text("(" + amountComments + ")");

   // input anim
   $($('.log-reg').find('.input')).each(function () {
      if ($(this).val() === '') {
         $(this).closest('.input__box').removeClass('fill');
      } else {
         $(this).closest('.input__box').addClass('fill');
      }
   })
   $('.log-reg .input, .log-reg .input__text').on('focusin click input', function () {
      $(this).closest('.input__box').addClass('fill');
   })
   $('.log-reg .input').on('blur', function () {
      if ($(this).val() === '') {
         $(this).closest('.input__box').removeClass('fill');
      }
   })
   $(document).on('click', '.show-password-input', (e) => {
      if ($(e.target).hasClass('display-password')) {
         $(e.target).closest('.input__box').find('span.icon.icon-eye').removeClass('icon-eye').addClass('icon-eye-off');
         return false;
      }
      $(e.target).closest('.input__box').find('span.icon.icon-eye-off').removeClass('icon-eye-off').addClass('icon-eye');
   })
   $('.input').on('keyup', function () {
      console.log('click');

      if (!$(this).val()) {
         console.log('>1');
         $(this).closest('.input__box').find('.icon').show();
         $(this).closest('.input__box').find('.show-password-input').show();
      } else {
         console.log('0');

      }
      console.log($(this).val());

   })
   // input anim end


})