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
   dataPopupEdit && dataPopupEdit.addEventListener('click', onCloseEditPopup);
   dataPopupExit && dataPopupExit.addEventListener('click', onCloseExitPopup);
   dataPopupSuccess &&
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

!(function initEditPopup() {
   const FORM = {
      IMG_SELECTED: '_on-img',
      IMG_FULL: '_hide',
      TEMPLATE: `<div class="review-edit-popup__load-images">
                    <div class="review-edit-popup__load-image ">
                      <button data-remove-photo = {{ID}} type="button" class="review-popup__close-button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.4008 4.80078L4.80078 14.4008" stroke="#373737" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4.80078 4.80078L14.4008 14.4008" stroke="#373737" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                      <img src="{{IMG}}" alt="photo" />
                    </div>
                  </div>`,
   };
   const inputsBlock = document.getElementById('inputsBlock');
   const loadFileInput = document.getElementById('loadFile');
   const loadPhotoInput = document.getElementById('loadPhoto');
   const imgsBlock = document.getElementById('reviewImgsBlock');
   const textArea = document.getElementById('reviewTextarea');
   const progressPercent = document.getElementById('reviewProgressPercent');
   const progressBar = document.getElementById('reviewProgressBar');
   let data = [];

   loadFileInput && loadFileInput.addEventListener('change', onLoadFile);
   loadPhotoInput && loadPhotoInput.addEventListener('change', onLoadFile);
   imgsBlock && imgsBlock.addEventListener('click', onRemovePhoto);
   textArea && textArea.addEventListener('input', setPersent);

   function onLoadFile(e) {
      const inputFiles = Array.from(e.target.files);
      inputFiles.forEach((file) => onRead(file));
   }

   function onRead(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
         if (data.length >= 3) return;
         data.push(reader.result);
         photoLoaderStatus();
         renderPhotos();
      };
   }

   function renderPhotos() {
      const renderData = data
         .map((item, index) =>
            FORM.TEMPLATE.replace('{{IMG}}', item).replace('{{ID}}', index)
         )
         .join('');
      imgsBlock.innerHTML = renderData;
      setPersent();
   }

   function onRemovePhoto(e) {
      if (e.target.hasAttribute('data-remove-photo')) {
         data = data.filter(
            (i, index) => index !== +e.target.dataset.removePhoto
         );
         renderPhotos();
         photoLoaderStatus();
      }
   }

   function photoLoaderStatus() {
      if (data.length > 0) {
         inputsBlock.classList.add(FORM.IMG_SELECTED);
      }
      if (data.length >= 3) {
         inputsBlock.classList.add(FORM.IMG_FULL);
      }
      if (data.length === 0) {
         inputsBlock.classList.remove(FORM.IMG_SELECTED);
      }
      if (data.length < 3) {
         inputsBlock.classList.remove(FORM.IMG_FULL);
      }
   }

   function setPersent() {
      let percent = data.length * 25 + (textArea.value.trim() !== '' ? 25 : 0);
      progressPercent.textContent = percent + '%';
      progressBar.style.width = percent + '%';
   }
})();
