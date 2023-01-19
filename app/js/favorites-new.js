//favorites========================================================================================================================================================
favoritesItemLogic()
function favoritesItemLogic() {
   const cardList = document.querySelector('.favorites-new__list')
   if (cardList) {
      cardList.addEventListener('click', (el) => {
         const item = el.target.closest('.new-favorites-item')
         if (el.target.classList.contains('new-favorites-item__add-to-favorites')) {
            item.classList.toggle('_favorites')
         }
         if (el.target.classList.contains('new-favorites-item__add-to-basket')) {
            item.classList.toggle('_basket')
         }
      })
   }
}

//favorites========================================================================================================================================================
//popup========================================================================================================================================================
const favoriteClearBtn = document.querySelector('.favorites-new__cancel-all')
const favoritePopup = document.querySelector('.favorites-new-popup')

favoriteClearBtn &&
   favoriteClearBtn.addEventListener('click', (el) => {
      favoritePopup.classList.add('_active')
   })

favoritePopup &&
   favoritePopup.addEventListener('click', (el) => {
      if (el.target.classList.contains('favorites-new-popup__body') || el.target.classList.contains('favorites-new-popup__close-btn')) {
         favoritePopup.classList.remove('_active')
      }
   })

//popup========================================================================================================================================================
