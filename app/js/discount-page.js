//Search========================================================================================================================================================
const discSearchEl = document.querySelector('.discount-search');
if (discSearchEl) {
   const removeBtn = discSearchEl.querySelector('.discount-search__close-icon');
   const input = discSearchEl.querySelector('.discount-search__input');

   input.addEventListener('input', () => {
      removeBtn.classList.add('_active');
   });
   removeBtn.addEventListener('click', () => {
      input.value = '';
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
