
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