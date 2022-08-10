
// Аккордеон
function accordion() {
	const items = document.querySelectorAll('.accord__trigger')
	items.forEach(item => {
			item.addEventListener('click', () => {
					const parent = item.parentNode
					if (parent.classList.contains('accord__active')) {
							parent.classList.remove('accord__active')
					} else {
							document
									.querySelectorAll('.accord__item')
									.forEach(child => child.classList.remove('accord__active'))   
							parent.classList.add('accord__active')
					}
			})
	})
}
accordion() 

// $('.saved-tabs__head').on('click', function (e) {
// 	let block = $(this).closest('.saved-tabs')

// 	block.toggleClass('open')
// 	if (block.hasClass('open')) {
// 		 block.find('.saved-tabs__body').slideDown(500)
// 	} else {
// 		 block.find('.saved-tabs__body').slideUp(500)
// 	}
// })