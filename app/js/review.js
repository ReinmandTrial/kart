//Табы========================================================================================================================================================
!(function initReviewTabs() {
   const ACTIVE_CLASS = {
      BUTTON: '_active',
      BODY: '_active',
   };
   const tabsListEl = document.querySelectorAll('[data-tabs]');
   tabsListEl.length && tabsListEl.forEach((tab) => initialTab(tab));

   function initialTab(tab) {
      const tabsTitle = tab.querySelectorAll('[data-tab-button]');
      tabsTitle.forEach((tabButton) =>
         tabButton.addEventListener('click', (e) => onTabButtonClick(e, tab))
      );
   }

   function onTabButtonClick(e, tab) {
      const target = e.target;
      if (target.classList.contains(ACTIVE_CLASS.BUTTON)) return;
      removeTabActiveClass(ACTIVE_CLASS.BUTTON, tab);
      removeTabActiveClass(ACTIVE_CLASS.BODY, tab);
      target.classList.add(ACTIVE_CLASS.BUTTON);
      const activeBody = tab.querySelector(
         `[data-tab-body='${target.dataset.tabButton}']`
      );
      activeBody.classList.add(ACTIVE_CLASS.BODY);
   }

   function removeTabActiveClass(selector, block) {
      const list = block.querySelectorAll(`.${selector}`);
      list.length && list.forEach((item) => item.classList.remove(selector));
   }
})();

//Спойлеры========================================================================================================================================================

const openPopupReview = function () {
   let page = document.querySelector('html');
   const btnsReview = document.querySelectorAll(
      '.review-new-feetback__message'
   );
   const popup = document.querySelector('.review-popup');
   const closeBtn = document.querySelector('.review-popup__close');
   const surePopup = document.querySelector('.sure-popup');

   btnsReview.forEach((btn) =>
      btn.addEventListener('click', () => {
         popup.classList.add('open');
         page.style.overflow = 'hidden';
      })
   );

   closeBtn.addEventListener('click', () => {
      surePopup.classList.add('open');
   });

   document.onclick = function (event) {
      let target = event.target;

      if (target === popup) {
         popup.classList.remove('open');
         page.style.overflow = '';
      }
   };
};

openPopupReview();
