!(function initReviewTabs() {
   const ACTIVE_CLASS = {
      BUTTON: '_active-tab-button',
      BODY: '_active-tab-body',
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
!(function initReviewSpoilers() {
   const SPOILER = {
      ACTIVE: '_active-spoiler',
   };

   const spoilerListEl = document.querySelectorAll('[data-spoiler]');

   spoilerListEl.length &&
      spoilerListEl.forEach((spoilerList) => initSpoiler(spoilerList));

   function initSpoiler(list) {
      list.addEventListener('click', (e) => onSpoilerClick(e, list));
   }

   function onSpoilerClick(e, list) {
      const t = e.target;
      if (t.hasAttribute('data-spoiler-head')) {
         const item = t.closest('[data-spoiler-item]');
         spoilerHandler(item, list);
      }
   }

   function spoilerHandler(item, list) {
      if (!item.classList.contains(SPOILER.ACTIVE)) {
         if (list.dataset.spoiler) closeAllSpoilers(list);
         openSpoiler(item);
      } else {
         closeSpoiler(item);
      }
   }

   function calcMaxHeight(body) {
      const childrens = body.children;
      let height = 0;

      for (let i = 0; i < 3; i++) {
         const element = childrens[i];
         if (!element) {
            height = 99999999;
            break;
         }
         height += element.scrollHeight + 1;
      }
      return height;
   }
   function closeAllSpoilers(list) {
      const itemList = list.querySelectorAll(
         `[data-spoiler-item].${SPOILER.ACTIVE}`
      );
      itemList.length && itemList.forEach((item) => closeSpoiler(item));
   }
   function openSpoiler(item) {
      const body = item.querySelector('[data-spoiler-body]');
      const maxHeight = calcMaxHeight(body);
      item.classList.add(SPOILER.ACTIVE);
      body.style.height = `${
         body.scrollHeight > maxHeight
            ? maxHeight
            : body.scrollHeight + body.children.length
      }px`;
   }
   function closeSpoiler(item) {
      const body = item.querySelector('[data-spoiler-body]');
      item.classList.remove(SPOILER.ACTIVE);
      body.style.height = '0px';
   }
})();
//Галерея========================================================================================================================================================

lightbox.option({
   alwaysShowNavOnTouchDevices: true,
   fitImagesInViewport: true,
});

//Попапы========================================================================================================================================================

!(function initReviewPopup() {
   const POPUP = {
      OPEN: '_popup-open',
   };
   const dataPopupEdit = document.querySelector('[data-popup="edit"]');
   const dataPopupExit = document.querySelector('[data-popup="exit"]');
   const dataPopupSuccess = document.querySelector('[data-popup="success"]');
   const popupButtonsList = document.querySelectorAll('[data-popup-button]');

   popupButtonsList.length &&
      popupButtonsList.forEach((button) => initButtonHandler(button));

   function initButtonHandler(button) {
      button.addEventListener('click', onClickPopupButton);
   }
   dataPopupEdit.addEventListener('click', onCloseEditPopup);
   dataPopupExit.addEventListener('click', onCloseExitPopup);
   dataPopupSuccess.addEventListener('click', onCloseSuccessPopup);

   function onCloseEditPopup(e) {
      if (e.target.hasAttribute('data-popup-close')) {
         dataPopupExit.classList.add(POPUP.OPEN);
      }
      if (e.target.hasAttribute('data-popup-success')) {
         dataPopupEdit.classList.remove(POPUP.OPEN);
         dataPopupSuccess.classList.add(POPUP.OPEN);
      }
   }
   function onCloseExitPopup(e) {
      if (e.target.hasAttribute('data-popup-close')) {
         dataPopupExit.classList.remove(POPUP.OPEN);
      }
      if (e.target.hasAttribute('data-popup-close-all')) {
         dataPopupEdit.classList.remove(POPUP.OPEN);
         dataPopupExit.classList.remove(POPUP.OPEN);
         document.documentElement.style.overflow = '';
      }
   }

   function onCloseSuccessPopup(e) {
      if (e.target.hasAttribute('data-popup-close')) {
         dataPopupSuccess.classList.remove(POPUP.OPEN);
         document.documentElement.style.overflow = '';
      }
   }

   function onClickPopupButton(e) {
      const currentPopup = document.querySelector(
         `[data-popup='${e.target.dataset.popupButton}']`
      );
      currentPopup.classList.add(POPUP.OPEN);
      document.documentElement.style.overflow = 'hidden';
   }
})();
