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
         if (!element) break;
         height += element.scrollHeight;
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
         (body.scrollHeight > maxHeight ? maxHeight : body.scrollHeight) + 1
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
