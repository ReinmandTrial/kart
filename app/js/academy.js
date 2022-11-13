function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
   const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);
   if (!header) return;
   function hideTabContent() {
      content.forEach((item) => {
         item.style.display = 'none';
      });
      tab.forEach((item) => {
         item.classList.remove(activeClass);
      });
   }
   function showTabContent(i = 0) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
   }
   hideTabContent();
   showTabContent();
   header.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
         tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
}
function accordion(accItem, accBtn, body) {
   const accItemEl = document.querySelectorAll('.' + accItem);
   if (accItemEl) {
      accItemEl.forEach((item) => {
         item.addEventListener('click', (el) => {
            _slideToggleVinil(item.querySelector('.' + body));
            if (el.target.classList.contains(accBtn) && !item.classList.contains('_active')) {
               item.classList.add('_active');
            } else {
               item.classList.remove('_active');
            }
         });
      });
   }
}
//========================================================================================================================================================
//academy-recorded========================================================================================================================================================
tabs('.location__tabs-header', '.location__tabs-header-item', '.location__tabs-content-item', 'location__tabs-header-item--active');
function closeDropdowns() {
   const openDropdown = document.querySelectorAll('._active');
   openDropdown.forEach((sel) => {
      sel.classList.remove('_active');
   });
}
const sortByAcademy = document.querySelector('.sort-by');
if (sortByAcademy) {
   sortByAcademy.addEventListener('click', (el) => {
      if (el.target.classList.contains('sort-by__head') && sortByAcademy.classList.contains('_active')) {
         sortByAcademy.classList.remove('_active');
      } else {
         closeDropdowns();
         sortByAcademy.classList.add('_active');
      }
   });
}
const allSelect = document.querySelectorAll('.select');
allSelect.forEach((select) => {
   select.addEventListener('click', (el) => {
      if (el.target.classList.contains('select__header') && select.classList.contains('_active')) {
         select.classList.remove('_active');
      } else {
         closeDropdowns();
         select.classList.add('_active');
      }
   });
});
const academyPlayBtn = document.querySelector('.product-top__btn-play');
if (academyPlayBtn) {
   academyPlayBtn.addEventListener('click', () => {
      document.body.classList.add('_popup-open');
   });
}
const popupBody = document.querySelector('.academy-popup__body');
if (popupBody) {
   popupBody.addEventListener('click', () => {
      document.body.classList.remove('_popup-open');
   });
}
const swiperRecordedReviews = new Swiper('.reviews-slider', {
   // centeredSlides: true,
   loop: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   grabCursor: true,

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 30,
      },
      620: {
         slidesPerView: 2,
         spaceBetween: 50,
      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 100,
      },
   },
   pagination: {
      el: '.reviews-slider__pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.reviews-slider__btn-next',
      prevEl: '.reviews-slider__btn-prev',
   },
});

const swiperRecordedDown = new Swiper('.product__slider', {
   loop: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   grabCursor: true,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 25,
      },
      620: {
         slidesPerView: 2,
         spaceBetween: 25,
      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 25,
      },
   },

   pagination: {
      el: '.product__pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.product__btn-next',
      prevEl: '.product__btn-prev',
   },
});
//academy-recorded========================================================================================================================================================
//academy-recorded-sale========================================================================================================================================================
const recordFaqItems = document.querySelectorAll('.product-after__questions-accordion-item');
if (recordFaqItems) {
   recordFaqItems.forEach((item) => {
      item.addEventListener('click', (el) => {
         if (el.target.classList.contains('questions-accordion-trigger')) {
            _slideToggleVinil(item.querySelector('.questions-accordion-content__text'), 500);
            item.classList.toggle('_active');
         }
      });
   });
}
//========================================================================================================================================================

const allRecordSalebtn = document.querySelectorAll('.product-after__playlist-btn , .product-after__play');
if (allRecordSalebtn) {
   allRecordSalebtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         document.body.classList.add('_popup-open');
      });
   });
}
//academy-recorded-sale========================================================================================================================================================

//academy-live========================================================================================================================================================
const copyBtn = document.querySelector('.top-digital__coupons-code');
const copuLabel = document.querySelector('.top-digital__copy-label');
if (copyBtn && copuLabel) {
   copyBtn.addEventListener('click', () => {
      copuLabel.classList.add('_active');
      setTimeout(() => {
         copuLabel.classList.add('_disactive');
      }, 1000);
      setTimeout(() => {
         copuLabel.classList.remove('_disactive', '_active');
      }, 1500);
      navigator.clipboard.writeText(copyBtn.textContent);
   });
}

//========================================================================================================================================================
tabs('.js-tabs-header', '.js-tabs-header-item', '.js-tabs-content-item', 'active', 'block');
accordion('accordion-location__item', 'accordion-location__head', 'accordion-location__body');
accordion('accordion-transport__item', 'accordion-transport__head', 'accordion-transport__body');
//========================================================================================================================================================
const swiperLiveDown = new Swiper('.digital-sale-slider__slider', {
   loop: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   grabCursor: true,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 25,
      },
      750: {
         slidesPerView: 2,
         spaceBetween: 25,
      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 25,
      },
   },

   pagination: {
      el: '.digital-sale-slider__pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.digital-sale-slider__button-next',
      prevEl: '.digital-sale-slider__button-prev',
   },
});
//academy-live========================================================================================================================================================

let _slideUpVinil = (target, duration = 500, showmore = 0) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = !showmore ? true : false;
         !showmore ? target.style.removeProperty('height') : null;
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         !showmore ? target.style.removeProperty('overflow') : null;
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
         // Создаем событие
         document.dispatchEvent(
            new CustomEvent('slideUpDone', {
               detail: {
                  target: target,
               },
            })
         );
      }, duration);
   }
};
let _slideDownVinil = (target, duration = 500, showmore = 0) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.hidden = target.hidden ? false : null;
      showmore ? target.style.removeProperty('height') : null;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
         // Создаем событие
         document.dispatchEvent(
            new CustomEvent('slideDownDone', {
               detail: {
                  target: target,
               },
            })
         );
      }, duration);
   }
};
let _slideToggleVinil = (target, duration = 500) => {
   if (target.hidden) {
      return _slideDownVinil(target, duration);
   } else {
      return _slideUpVinil(target, duration);
   }
};
