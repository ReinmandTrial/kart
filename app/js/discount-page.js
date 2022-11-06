//Search========================================================================================================================================================
const discSearchEl = document.querySelector('.discount-search');
if (discSearchEl) {
   const label = discSearchEl.querySelector('.discount-search__label');
   const removeBtn = discSearchEl.querySelector('.discount-search__close-icon');
   const input = discSearchEl.querySelector('.discount-search__input');
   input.addEventListener('focus', () => {
      label.classList.add('_focus');
   });
   input.addEventListener('blur', () => {
      if (input.value == '') {
         label.classList.remove('_focus');
      }
   });
   input.addEventListener('input', () => {
      removeBtn.classList.add('_active');
   });
   removeBtn.addEventListener('click', () => {
      input.value = '';
      label.classList.remove('_focus');
      removeBtn.classList.remove('_active');
   });
}
//Search========================================================================================================================================================


//favorites========================================================================================================================================================
const cardList = document.querySelector('.discount-page__card-list');

if (cardList) {
   cardList.addEventListener('click', (el) => {
      const item = el.target.closest('.discount-card-item');
      if (el.target.classList.contains('discount-card-item__add-to-favorites')) {
         item.classList.toggle('_favorites');
      }
      if (el.target.classList.contains('discount-card-item__add-to-basket')) {
         item.classList.toggle('_basket');
      }
   });
}

//favorites========================================================================================================================================================
