const swiper = new Swiper('.no-search__slider ', {
	// Optional parameters
	slidesPerView: 2,
	slidesPerGroup: 1,
	// centeredSlides: true,
	loop: true,
	spaceBetween: 15,
	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
		},
		1100: {
			slidesPerView: 4,
		},
	},
	pagination: {
		el: '.no-search__slider-pagination',
		clickable: true,
	},

	autoplay: {
		delay: 5000,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.no-search__slider-button-next',
		prevEl: '.no-search__slider-button-prev',
	},

});


const showItemsSearch = () => {
	const itemsCart = document.querySelectorAll('.search-item');
	const btnShowCart = document.querySelector('.btn-show-cart');
	let currentItem = 6;

	if (!btnShowCart) return

	if (itemsCart.length < 6) {
		btnShowCart.classList.add('btn-show-cart--disable');
	}

	btnShowCart.addEventListener('click', () => {
		let items = [...document.querySelectorAll('.search-items .search-item')];

		for (let i = currentItem; i < currentItem + 6; i++) {
			items[i].style.display = 'block';
		}

		currentItem += 6;
		if (currentItem >= items.length) {
			btnShowCart.style.display = 'none';
		}
	});
}
showItemsSearch();

const showItemsLiveCourses = () => {
	const itemsServices = document.querySelectorAll('.services-item');
	const btnShowItemServices = document.querySelector('.services-btn');
	let currentItemService = 3;
	if (!btnShowItemServices) return

	if (itemsServices.length < 3) {
		btnShowItemServices.classList.add('btn-show-cart--disable');
	}

	btnShowItemServices.addEventListener('click', () => {
		let itemsServices = [...document.querySelectorAll('.services-items .services-item')];

		for (let i = currentItemService; i < currentItemService + 3; i++) {
			itemsServices[i].style.display = 'block';
		}

		currentItemService += 3;
		if (currentItemService >= itemsServices.length) {
			btnShowItemServices.classList.add('btn-show-cart--disable');
		}
	});
}
showItemsLiveCourses();


const showItemsRecordedCourses = () => {
	const itemsServices = document.querySelectorAll('.recorded-item');
	const btnShowItemServices = document.querySelector('.recorded-btn');
	let currentItemService = 3;
	if (!btnShowItemServices) return

	if (itemsServices.length < 3) {
		btnShowItemServices.classList.add('btn-show-cart--disable');
	}

	btnShowItemServices.addEventListener('click', () => {
		let itemsServices = [...document.querySelectorAll('.recorded-items .recorded-item')];

		for (let i = currentItemService; i < currentItemService + 3; i++) {
			itemsServices[i].style.display = 'block';
		}

		currentItemService += 3;
		if (currentItemService >= itemsServices.length) {
			btnShowItemServices.classList.add('btn-show-cart--disable');
		}
	});
}
showItemsRecordedCourses();