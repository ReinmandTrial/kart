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
function accordion(accItem, accBtn) {
   const accItemEl = document.querySelectorAll('.' + accItem);
   if (accItemEl) {
      accItemEl.forEach((item) => {
         item.addEventListener('click', (el) => {
            if (el.target.classList.contains(accBtn) && !item.classList.contains('_active')) {
               closeAllItems();
               item.classList.add('_active');
               return;
            }
            if (el.target.classList.contains(accBtn) && item.classList.contains('_active')) {
               item.classList.remove('_active');
            }
         });
      });
   }
   function closeAllItems() {
      accItemEl.forEach((item) => {
         item.classList.remove('_active');
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
         if (el.target.classList.contains('questions-accordion-trigger') && !item.classList.contains('_active')) {
            closeAllFqa();
            item.classList.add('_active');
         } else {
            item.classList.remove('_active');
         }
      });
   });
}
function closeAllFqa() {
   recordFaqItems.forEach((item) => {
      item.classList.remove('_active');
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
tabs('.js-tabs-header', '.js-tabs-header-item', '.js-tabs-content-item', 'active', 'grid');
accordion('accordion-location__item', 'accordion-location__head');
accordion('accordion-transport__item', 'accordion-transport__head');
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
