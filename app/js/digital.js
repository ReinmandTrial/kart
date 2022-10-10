
// function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
// 	const header = document.querySelector(headerSelector),
// 				tab = document.querySelectorAll(tabSelector),
// 				content = document.querySelectorAll(contentSelector)
// 	function hideTabContent() {
// 			content.forEach(item => {
// 					item.style.display = 'none'
// 			});
// 			tab.forEach(item => {
// 					item.classList.remove(activeClass)
// 			});
// 	}
// 	function showTabContent(i = 0) {
// 		 content[i].style.display = display
// 		 tab[i].classList.add(activeClass)
// 	}
// 	hideTabContent()
// 	showTabContent()
// 	header.addEventListener('click', e => {
// 			const target = e.target
// 			if (target.classList.contains(tabSelector.replace(/\./, '')) || 
// 			target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
// 					tab.forEach((item, i) => {
// 							if ( target == item || target.parentNode == item ) {
// 									hideTabContent()
// 									showTabContent(i)
// 							}
// 					});
// 			}
// 	})
// }

// tabs( '.tabs-digital__header' ,'.tabs-digital__header-item', '.tabs-digital__content-item', 'active');


function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
	const header = document.querySelector(headerSelector),
				tab = document.querySelectorAll(tabSelector),
				content = document.querySelectorAll(contentSelector)
	function hideTabContent() {
			content.forEach(item => {
					item.style.display = 'none'
			});
			tab.forEach(item => {
					item.classList.remove(activeClass)
			});
	}
	function showTabContent(i = 0) {
		 content[i].style.display = display
		 tab[i].classList.add(activeClass)
	}
	hideTabContent()
	showTabContent()
	header.addEventListener('click', e => {
			const target = e.target
			if (target.classList.contains(tabSelector.replace(/\./, '')) || 
			target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
					tab.forEach((item, i) => {
							if ( target == item || target.parentNode == item ) {
									hideTabContent()
									showTabContent(i)
							}
					});
			}
	})
}

tabs( '.js-tabs-header' ,'.js-tabs-header-item', '.js-tabs-content-item', 'active')
tabs( '.location__tabs-header' ,'.location__tabs-header-item', '.location__tabs-content-item', 'location__tabs-header-item--active');


function accordion() {
	const items = document.querySelectorAll('.location__accordion-item-trigger')
	items.forEach(item => {
			item.addEventListener('click', () => {
					const parent = item.parentNode
					if (parent.classList.contains('location__accordion-item--active')) {
							parent.classList.remove('location__accordion-item--active')
					} else {
							document
									.querySelectorAll('.location__accordion-item')
									.forEach(child => child.classList.remove('location__accordion-item--active'))   
							parent.classList.add('location__accordion-item--active')
					}
			})
	})
}
accordion();

const swiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.slider-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
	
});