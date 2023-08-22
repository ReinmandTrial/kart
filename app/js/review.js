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

reviewTabs();
