const reviewTabs = function () {
  const tabsTitle = document.querySelectorAll('.personal-area__tab');
  const tabsContent = document.querySelectorAll('.personal-area__tab-content');

  tabsTitle.forEach((item) =>
    item.addEventListener('click', (event) => {
      const tabsTitleTarget = event.target.getAttribute('data-tab');

      tabsTitle.forEach((element) =>
        element.classList.remove('personal-area__tab_active')
      );

      tabsContent.forEach((element) =>
        element.classList.add('personal-area__tab-content-hidden')
      );

      item.classList.add('personal-area__tab_active');

      document
        .getElementById(tabsTitleTarget)
        .classList.remove('personal-area__tab-content-hidden');
    })
  );

  document
    .querySelector('[data-tab="tab-1"]')
    .classList.add('personal-area__tab_active');

  document
    .querySelector('#tab-1')
    .classList.remove('personal-area__tab-content-hidden');
};

reviewTabs();

!(function initReviewTabs() {
  const ACTIVE_CLASS = {
    BUTTON: 'personal-area__tab_active',
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
      `[data-tab-body=${target.dataset.tabButton}]`
    );
    activeBody.classList.add(ACTIVE_CLASS.BODY);
  }

  function removeTabActiveClass(selector, block) {
    const list = block.querySelectorAll(`.${selector}`);
    list.length && list.forEach((item) => item.classList.remove(selector));
  }
})();

!(function reviewAccordeon() {
  const titles = document.querySelectorAll('.spoiler-title');
  const contents = document.querySelectorAll('.spoiler-content');

  titles.forEach((item) =>
    item.addEventListener('click', () => {
      const activeContent = document.querySelector('#' + item.dataset.tab);

      if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
      } else {
        contents.forEach((element) => {
          element.classList.remove('active');
          element.style.maxHeight = 0;
        });

        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      }
    })
  );
})();

const openPopupReview = function () {
  let page = document.querySelector('html');
  const btnsReview = document.querySelectorAll('.product-personal__message');
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
    }
  };
};

openPopupReview();
