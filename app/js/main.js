jQuery(document).ready(function ($) {
	// $(".js-scroll").mCustomScrollbar({
	//    scrollInertia: 0,
	//    mouseWheel: { scrollAmount: 40 },
	// });
	AOS.init({});


	if ($(window).width() >= 768) {
		$($('body').find('.product__categories-block')).each(function () {
			let block = $(this),
				newWrap = block.find(".product__categories-more-wrap"),
				hiddenWrap = block.find(".product__categories-more");

			while ($(this).width() >= $(this).closest(".product__categories").width()) {
				hiddenWrap.show();
				newWrap.prepend(block.children(".product__categories-link").eq(-2));
			}
		})
	}

	const anchor = document.querySelector('.btn-top')

	if(anchor){ 
			anchor.addEventListener('click', function (e) {
				e.preventDefault()

				const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
	


	let btnTop = document.querySelector('.btn-top')

	function toTop() {
		if (window.pageYOffset > 300) {
			btnTop.style.opacity = '1'
		} else {
			btnTop.style.opacity = '0'
		}

	}



	$(document).on('scroll', function () {
		toTop();

		if ($(this).scrollTop() > 32) {
			$('.header').addClass('fixed-on');
		}
		else if ($(this).scrollTop() < 50) {
			$('.header').removeClass('fixed-on');
		}
	})

	// burger

	$('.js-burger').on('click', function () {
		if ($(this).closest('.js-burger-block').hasClass('open')) {
			$(this).closest('.js-burger-block').removeClass('open');
			$(this).closest('.js-burger-block').find('.burger__body').slideUp()

		} else {

			$(this).closest('.js-burger-block').addClass('open');
			$(this).closest('.js-burger-block').find('.burger__body').slideDown()
		}
	})
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".js-burger-block").length) {
			$('.js-burger-block').removeClass('open');
			$(this).closest('.js-burger-block').find('.burger__body').slideUp()
			// $('.js-burger').addClass('icon-burger');
			// $('.js-burger').removeClass('icon-close');
		}
		e.stopPropagation();
	});
	// burger end

	// select
	$('.js-select-head').on('click', function () {
		var thisSelect = $(this).closest('.js-select');

		$('.js-select').not(thisSelect).not('.js-simple-select').removeClass('open');
		thisSelect.toggleClass('open');
		if ($(this).closest('.js-burger')) {
			$('.js-burger-block').removeClass('open');
			// $('.js-burger').addClass('icon-burger');
			// $('.js-burger').removeClass('icon-close');
		}
	})
	$('.js-select-item').on('click', function () {
		var thisVal = $(this).text();

		$(this).closest('.js-select').find('.js-select-title').text(thisVal);
		$(this).closest('.js-select').find('.js-select-item').removeClass('active');
		$(this).addClass('active');

		$(this).closest('.js-select').removeClass('open');
	})
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".js-select").length) {
			$('.js-select').not('.js-simple-select').removeClass('open');
		}
		e.stopPropagation();
	});

	$('.js-notification').on('click', function () {
		$('.js-burger-block').removeClass('open');
		// $('.js-burger').addClass('icon-burger');
		// $('.js-burger').removeClass('icon-close');

		$('.js-notification-body').toggleClass('open');

	})
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".js-notification-body").length && !$(e.target).closest(".js-notification").length) {
			$('.js-notification-body').removeClass('open');
		}
		e.stopPropagation();
	});

	$('.js-accordion-head').on('click', function () {
		var thisAcc = $(this).closest('.js-accordion');
		$('.js-accordion').not(thisAcc).removeClass('open');
		$('.js-accordion').not(thisAcc).find('.js-accordion-body').slideUp(300);

		if (thisAcc.hasClass('open')) {
			thisAcc.find('.js-accordion-body').slideUp(300);
			thisAcc.removeClass('open');
		} else {
			thisAcc.find('.js-accordion-body').slideDown(300);
			thisAcc.addClass('open');
		}


	})

	// popup
	$('.btn-popup-search').on('click', function () {
		$('.popup-search').fadeIn(200);
	})
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".btn-popup").length && !$(e.target).closest(".popup__content").length) {
			$('.popup').fadeOut(200);
		}
		e.stopPropagation();
	});
	$('.popup-close').on('click', function () {
		$(this).closest('.popup').fadeOut(200);
	})

	// popup media
	$('.page-media__item').on('click', function () {
		$('.popup-media').fadeIn(200);
	})
	// popup media end

	// popup end

	// search
	$('.popup-search__input').on('keyup', function () {
		if ($(this).val().length > 0) {
			$('.popup-search').addClass('fill');
			// if (event.keyCode == 13) {
			$('.popup-search').addClass('find');
			// }
		} else {
			$('.popup-search').removeClass('fill');
		}
	});
	$('.popup-search__input-to-clear').on('click', function () {
		$('.popup-search__input').val('');
		$('.popup-search').removeClass('fill');
	});

	$('.header__search-btn').on('click', function () {
		$(this).closest('.header__search').addClass('open');
	})
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".header__search").length) {
			$('.header__search').removeClass('open');
		}
		e.stopPropagation();
	});
	// search end


	new Swiper('.slider-team', {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			1200: {
				spaceBetween: 25,
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 2,
				spaceBetween: 12,
			}
		},
		watchOverflow: true,
		// spaceBetween: 30,
		// slidesPerView: 4,
	})


	const sliderInnovationTabs = new Swiper(".slider-innovation-tabs__pagination", {
		slidesPerView: 'auto',
		watchSlidesProgress: true,
	});

	const sliderInnovationImages = new Swiper(".innovation-categories-images-slider__container", {
		slidesPerView: 1,
		watchSlidesProgress: true,
		simulateTouch: false,

	});

	const sliderInnovationMain = new Swiper('.slider-innovation-tabs__container', {
		navigation: {
			prevEl: '.slider-innovation-tabs__next',
			nextEl: '.slider-innovation-tabs__prev',
		},
		slidesPerView: 1,
		spaceBetween: 20,
		simulateTouch: false,
		thumbs: {
			//    // swiper: sliderInnovationImages,
			swiper: sliderInnovationTabs,
		},
		pagination: {
			el: '.slider-innovation-tabs__pagination--mobile',
			type: 'bullets',
		},
	})
	sliderInnovationMain.on('slidePrevTransitionStart', function () {
		sliderInnovationImages.slidePrev();
		console.log('prev');

	});
	sliderInnovationMain.on('slideNextTransitionStart', function () {
		sliderInnovationImages.slideNext();
		console.log('Next');

	});
	new Swiper(".slider-banner", {
		slidesPerView: 1,
		direction: 'vertical',
		simulateTouch: false,
		noSwiping: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
	});

	new Swiper(".slider-login-reg", {
		slidesPerView: 1,
		direction: 'vertical',
		simulateTouch: false,
		noSwiping: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
	});
	var swiperRight = new Swiper('.slider-right__container', {
		navigation: {
			nextEl: '.slider-right__btn-next',
			prevEl: '.slider-right__btn-prev',
		},
		pagination: {
			el: '.slider-right__pagination',
			type: 'bullets',
		},
		breakpoints: {
			1400: {
				spaceBetween: 110,
			},
			1100: {
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 45,
			},
			320: {
				slidesPerView: 2,
				spaceBetween: 35,
			}
		},
		autoplay: {
			delay: 3700,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
		loop: true,
	});
	swiperRight.on('afterInit slideChange', function () {
		var el = $('.slider-right .timer:last-child'),
			newone = el.clone(true);

		el.before(newone);
		el.remove();

	});
	var swiperPromotion = new Swiper(".promotion-large__slider", {
		slidesPerView: 1,
		simulateTouch: false,
		noSwiping: false,
		navigation: {
			nextEl: '.promotion-large__btn-right',
			prevEl: '.promotion-large__btn-left',
		},
		pagination: {
			el: '.swiper-pagination-main',
			type: 'bullets',
		},
		autoplay: {
			delay: 3700,
			disableOnInteraction: false,
		},
		loop: true,

	});
	swiperPromotion.on('afterInit slideChange', function () {
		var el = $('.promotion-large__slider .timer:last-child'),
			newone = el.clone(true);

		el.before(newone);
		el.remove();

	});
	var swiperArticles = new Swiper('.slider-articles__swiper', {
		navigation: {
			nextEl: '.slider-articles__btn-next',
			prevEl: '.slider-articles__btn-prev',
		},
		pagination: {
			el: '.slider-articles__pagin',
			type: 'bullets',
		},
		breakpoints: {
			1100: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 15,
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			}
		},
		slidesPerView: 4,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 3700,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
		loop: false,
	});
	$(swiperArticles).on('afterInit slideChange', function () {
		var el = $('.slider-articles .timer:last-child'),
			newone = el.clone(true);
		console.log('start swiper');

		el.before(newone);
		el.remove();

	});
	new Swiper('.slider-product', {
		navigation: {
			nextEl: '.slider-product__btn-right',
			prevEl: '.slider-product__btn-left',
		},
		pagination: {
			el: '.slider-product__pagin',
			type: 'bullets',
		},
		breakpoints: {
			1100: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 2,
				spaceBetween: 8,
			}
		},
		slidesPerView: 4,
		watchOverflow: true,
	});
	$($('.woocommerce #reviews #comments ol.commentlist').find('li')).each(function () {
		$(this).addClass('swiper-slide');
	})
	new Swiper('.slider-reviews', {
		navigation: {
			nextEl: '.slider-reviews__btn-right',
			prevEl: '.slider-reviews__btn-left',
		},
		pagination: {
			el: '.slider-reviews__pagin',
			type: 'bullets',
		},
		breakpoints: {
			1100: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			}
		},
		slidesPerView: 3,
		watchOverflow: true,
		// loop: true,
		observer: true,
		observeParents: true
	});


	$($('body').find('.slider-product')).each(function () {
		let sliderProductSlides = 0;
		// console.log('slides amount');

		$($('.slider-product').find('.slider-product__slide')).each(function () {
			sliderProductSlides++;
		})
		if (sliderProductSlides = 0) {
			$(this).hide();
		}
	});
	// $($('.slider-product').find('.slider-product__slide')).each(function () {
	//    sliderProductSlides++;
	// })
	// if (sliderProductSlides = 0) {

	// }


	// sliders end

	$(".js-tabs-item").on('click', function () {
		// aleft('l')
		if (!$(this).hasClass("active")) {
			let btns = $(this).closest(".js-tabs").find(".js-tabs-item");
			let count;
			$(btns).each(function () {
				$(this).removeClass("active");
			})

			$(this).addClass("active");

			$(btns).each(function (index) {
				if ($(this).hasClass("active")) {
					count = index;
				}
			})

			let blocks = $('.js-tabs-body').find('.js-tabs-body-item');

			$(blocks).each(function (index) {
				if (index == count) {
					$(this).addClass("active");
					// $(this).show();
				} else {
					$(this).removeClass("active");
					// $(this).hide();
				}
			})
		}

	})


	//    const anchors = document.querySelectorAll('a[href*="#"]')

	//    for (let anchor of anchors) {
	//       anchor.addEventListener('click', function (e) {
	//          e.preventDefault()

	//          const blockID = anchor.getAttribute('href').substr(1)

	//          document.getElementById(blockID).scrollIntoView({
	//             behavior: 'smooth',
	//             block: 'start'
	//          })
	//       })
	//    }

	// for php
	if ($('body').hasClass('post-type-archive-product')) {
		$($('.wpfFilterWrapper').find('.wpfFilterContent')).each(function () {
			if ($(document).width() >= 992) {

				// $(this).addClass('wpfHide');
				// $(this).addClass('wpfBlockAnimated');
				$(this).find('.wpfFilterTitle').click();
			}
		})
		$('.js-open-filters').on('click', function () {
			$('.category__filter-wrap').css('display', 'flex');
		})
		// $(document).on('click', '.wpfFilterContent__close', function () {
		// 	alert('close')
		// 	$(this).closest('.category__filter-wrap').fadeOut();
		// 	// $(this).closest('.wpfFilterWrapper').find('.wpfFilterTitle').click();
		// })
		// $(document).on('click', function (e) {
		// 	if (!$(e.target).closest(".js-open-filters").length && !$(e.target).closest(".wpfMainWrapper").length) {
		// 		$('.category__filter-wrap').fadeOut();
		// 	}
		// 	e.stopPropagation();
		// });

		// $($('.wpfFilterWrapper').find('.wpfFilterTitle')).each(function () {
		// 	$(this).find('.wpfTitleToggle').hide();
		// 	$(this).append('<span class="icon icon-triangle-down"></span>');
		// })

		$('.wpfFilterTitle').on('click', function () {
			$(this).find('.icon').toggleClass('open');
		})
		$(".wpfMainWrapper").append('<button class="icon icon-close wpfFilterContent__close"></button>');

		$(".wpfMainWrapper").wrap("<div class='category__filters'><div class='category__filter-wrap'></div></div>");
		$('.woocommerce-ordering').appendTo('.category__filters');

		$('.woocommerce-ordering').wrap("<div class='category__sort-wrap'></div>")


		// optionby

		// Select

		$('.orderby').each(function () {

			// Variables

			var $this = $(this),

				selectOption = $this.find('option'),

				selectOptionLength = selectOption.length,

				selectedOption = selectOption.filter(':selected'),

				dur = 0;

			$this.hide();

			// Wrap all in select box

			$this.wrap('<div class="orderby-style"></div>');


			// Style box

			$('<div>', {

				class: 'orderby-style__gap',

				text: $('.orderby').attr("aria-label"),

			}).insertAfter($this);

			// $('.orderby-style__gap').val($('.orderby').attr('aria-label'))

			var selectGap = $this.next('.orderby-style__gap'),

				caret = selectGap.find('.caret');

			// Add ul list

			$('<ul>', {

				class: 'orderby-style__list'

			}).insertAfter(selectGap);

			var selectList = selectGap.next('.orderby-style__list');

			// Add li - option items

			for (var i = 0; i < selectOptionLength; i++) {


				$('<li>', {


					class: 'orderby-style__item',

					html: $('<span>', {

						text: selectOption.eq(i).text()


					})

				})

					.attr('data-value', selectOption.eq(i).val())

					.appendTo(selectList);

			}

			// Find all items

			var selectItem = selectList.find('li');


			selectList.slideUp(0);

			selectGap.on('click', function () {


				if (!$(this).hasClass('on')) {

					$(this).addClass('on');

					selectList.slideDown(dur);

					selectItem.on('click', function () {

						var chooseItem = $(this).data('value');
						var selectBlock = $(this).closest('.orderby-style');
						var selectItemAttr = $(this).attr('data-value');

						$('.orderby').val(chooseItem).attr('selected', 'selected');

						$('select').val(chooseItem).attr('selected', 'selected');

						$(selectBlock.find('option')).each(function (i) {
							var attr = $(this).attr('value');

							// $(this).removeAttr('selected')

							if (attr == selectItemAttr) {
								$(this).attr('selected', 'selected');
								$(this).click();
								$(this).selectedIndex = i;
							}
						})

						selectGap.text($(this).find('span').text());

						selectItem.removeClass('active');

						$(this).addClass('active');

						selectList.slideUp(dur);
						selectGap.removeClass('on');
					});

				} else {

					$(this).removeClass('on');
					selectList.slideUp(dur);

				}

			});


		});
		// optionby end

	}

	// prodact page
	$('.variations_form').append('<span></span>');
	$('.product__social-share .ya-share2 .ya-share2__item_service_facebook a').append('<span class="socials-link icon icon-facebook"></span>');

	$('.product__social-share .ya-share2 .ya-share2__item_service_whatsapp a').append('<span class="socials-link icon icon-call"></span>');
	$('.product__social-share .ya-share2 .ya-share2__item_service_twitter a').append('<span class="socials-link icon icon-twitter"></span>');
	$('.product__social-share .ya-share2 .ya-share2__item_service_telegram a').append('<span class="socials-link icon icon-telegram"></span>');

	// prodact page end

	// acticle
	$('.post__to-share-socials .ya-share2 .ya-share2__item_service_facebook a').append('<span class="socials-link icon icon-facebook"></span>');
	$('.post__to-share-socials .ya-share2 .ya-share2__item_service_whatsapp a').append('<span class="socials-link icon icon-call"></span>');
	$('.post__to-share-socials .ya-share2 .ya-share2__item_service_pinterest a').append('<span class="socials-link icon icon-pint"></span>');
	// acticle end

	// news
	$('.news-sidebar__socials .ya-share2 .ya-share2__item_service_facebook a').append('<span class="socials-link icon icon-facebook"></span>');
	$('.news-sidebar__socials .ya-share2 .ya-share2__item_service_twitter a').append('<span class="socials-link icon icon-twitter"></span>');
	$('.news-sidebar__socials .ya-share2 .ya-share2__item_service_pinterest a').append('<span class="socials-link icon icon-pint"></span>');
	// news end

	// gallery slider
	var swiper = new Swiper(".swiper-pagin", {
		spaceBetween: 20,
		slidesPerView: 'auto',
		watchSlidesProgress: true,
		direction: "vertical",
	});
	var swiper2 = new Swiper(".gallery-slider", {
		simulateTouch: true,
		loop: true,
		spaceBetween: 50,
		thumbs: {
			swiper: swiper,
		},
		pagination: {
			el: '.gallery-slider__pagin',
			type: 'bullets',
		},
	});
	// gallery slider end


	// for php end


	// textarea
	(function ($) {
		$.fn.autogrow = function (options) {
			return this.filter('textarea').each(function () {
				var self = this;
				var $self = $(self);
				var minHeight = $self.height();
				var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;
				var settings = $.extend({
					preGrowCallback: null,
					postGrowCallback: null
				}, options);

				var shadow = $('<div></div>').css({
					position: 'absolute',
					top: -10000,
					left: -10000,
					width: $self.width(),
					fontSize: $self.css('fontSize'),
					fontFamily: $self.css('fontFamily'),
					fontWeight: $self.css('fontWeight'),
					lineHeight: $self.css('lineHeight'),
					resize: 'none',
					'word-wrap': 'break-word'
				}).appendTo(document.body);

				var update = function (event) {
					var times = function (string, number) {
						for (var i = 0, r = ''; i < number; i++) r += string;
						return r;
					};

					var val = self.value.replace(/&/g, '&amp;')
						.replace(/</g, '&lt;')
						.replace(/>/g, '&gt;')
						.replace(/\n$/, '<br/>&#xa0;')
						.replace(/\n/g, '<br/>')
						.replace(/ {2,}/g, function (space) {
							return times('&#xa0;', space.length - 1) + ' '
						});

					// Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
					if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
						val += '<br />';
					}

					shadow.css('width', $self.width());
					shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.

					var newHeight = Math.max(shadow.height() + noFlickerPad, minHeight);
					if (settings.preGrowCallback != null) {
						newHeight = settings.preGrowCallback($self, shadow, newHeight, minHeight);
					}

					$self.height(newHeight);

					if (settings.postGrowCallback != null) {
						settings.postGrowCallback($self);
					}
				}

				$self.change(update).keyup(update).keydown({ event: 'keydown' }, update);
				$(window).resize(update);

				update();
			});
		};
	})(jQuery);

	$('.page-contact-us__textarea .textarea').autogrow();
	// textarea end

	// tabs
	// transform

	(function ($, window, document) {
		"use strict";

		var div = document.createElement("div"),
			divStyle = div.style,
			prefixes = [
				"O",
				"ms",
				"Webkit",
				"Moz"
			],
			prefix,
			i = prefixes.length,
			properties = [
				"transform",
				"transformOrigin",
				"transformStyle",
				"perspective",
				"perspectiveOrigin",
				"backfaceVisibility"
			],
			property,
			j = prefixes.length;

		// Find the right prefix
		while (i--) {
			if (prefixes[i] + leadingUppercase(properties[0]) in divStyle) {
				prefix = prefixes[i];
				continue;
			}
		}

		// This browser is not compatible with transforms
		if (!prefix) {
			return;
		}

		// Build cssHooks for each property
		while (j--) {
			property = prefix + leadingUppercase(properties[j]);

			if (property in divStyle) {

				// px isn't the default unit of this property
				$.cssNumber[properties[j]] = true;

				// populate cssProps
				$.cssProps[properties[j]] = property;

				// MozTranform requires a complete hook because "px" is required in translate
				property === "MozTransform" && ($.cssHooks[properties[j]] = {
					get: function (elem, computed) {
						return (computed ?
							// remove "px" from the computed matrix
							$.css(elem, property).split("px").join("") :
							elem.style[property]
						);
					},
					set: function (elem, value) {
						// add "px" to matrices
						/matrix\([^)p]*\)/.test(value) && (
							value = value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, "matrix$1$2px,$3px")
						);
						elem.style[property] = value;
					}
				});

			}
		}

		function leadingUppercase(word) {
			return word.slice(0, 1).toUpperCase() + word.slice(1);
		}

	})(jQuery, window, document);
	// transform end
	$(".js-tabs-head-item").on('click', function () {
		// aleft('l')
		if (!$(this).hasClass("active")) {
			let btns = $(this).closest(".js-tabs").find(".js-tabs-head-item");
			let custom_target_group = $(this).data('custom-link-group');
			let current_link_target = $(this).data('custom-target-link');

			if (custom_target_group && current_link_target) {
				$(`[data-custom-target-group="${custom_target_group}"]`).removeClass('active');
				$(`[data-custom-target-group="${custom_target_group}"][data-custom-target="${current_link_target}"]`).addClass('active');
				$(window).resize();
			}

			let count;
			$(btns).each(function () {
				$(this).removeClass("active");
			})

			$(this).addClass("active");

			$(btns).each(function (index) {
				if ($(this).hasClass("active")) {
					count = index;
				}
			})

			let blocks = $('.js-tabs-body').find('.js-tabs-body-item');

			$(blocks).each(function (index) {
				if (index == count) {
					$(this).addClass("active");
					if ($(this).hasClass('js-anim-left')) {
						$(this).css('display', 'block')
							.css('left', '100px').css('opacity', '0')
							.animate({
								// transform: "translate3d(0, 0, 0)",
								left: '0px',
								opacity: '1'
							}, 400)
					}
				} else {
					$(this).removeClass("active");
					if ($(this).hasClass('js-anim-left')) {
						$(this).css('opacity', '0').css('display', 'none')
					}
				}
			})
		}

	})
	// tabs end

	///quantity plus
	$(document).on('click', '.js-quantity-plus', function () {
		var btn = $(this);
		var Block = btn.closest('.js-quantity');
		var kol = Block.find('.js-quantity-input').val();
		if (kol <= 100) {
			kol++;
		}
		Block.find('.js-quantity-input').val(kol);
		Block.find('.js-quantity-input').trigger('change');
	});

	///quantity minus
	$(document).on('click', '.js-quantity-minus', function () {
		var btn = $(this);
		var Block = btn.closest('.js-quantity');
		var kol = Block.find('.js-quantity-input').val();
		if (kol > 1) {
			kol--;
		}
		Block.find('.js-quantity-input').val(kol);
		Block.find('.js-quantity-input').trigger('change');
	});

	// amount comments
	let amountComments = 0;
	$($('.tabs__body .commentlist').find('li')).each(function () {
		amountComments++;
	})
	$('.tabs__item[data-tab-open="reviews"] span').text("(" + amountComments + ")");

	// input anim
	$($('.log-reg').find('.input')).each(function () {
		if ($(this).val() === '') {
			$(this).closest('.input__box').removeClass('fill');
		} else {
			$(this).closest('.input__box').addClass('fill');
		}
	})
	$('.log-reg .input, .log-reg .input__text').on('focusin click input', function () {
		$(this).closest('.input__box').addClass('fill');
	})
	$('.log-reg .input').on('blur', function () {
		if ($(this).val() === '') {
			$(this).closest('.input__box').removeClass('fill');
		}
	})
	$(document).on('click', '.show-password-input', (e) => {
		if ($(e.target).hasClass('display-password')) {
			$(e.target).closest('.input__box').find('span.icon.icon-eye').removeClass('icon-eye').addClass('icon-eye-off');
			return false;
		}
		$(e.target).closest('.input__box').find('span.icon.icon-eye-off').removeClass('icon-eye-off').addClass('icon-eye');
	})
	$('.input').on('keyup', () => {
		console.log('click');

		if (!$(this).val()) {
			console.log('>1');
			$(this).closest('.input__box').find('.icon').show();
			$(this).closest('.input__box').find('.show-password-input').show();
		} else {
			console.log('0');

		}
		console.log($(this).val());

	})
	// input anim end


	$(".remove_from_wishlist").on("click", function (e) {
		$(".inside").append('<p>Your product was deleted"</p>');
	});


	//   start Karush dev


	function getFormData($form) {
		var unindexed_array = $form.serializeArray();
		var indexed_array = {};

		$.map(unindexed_array, function (n, i) {
			indexed_array[n['name']] = n['value'];
		});
		return indexed_array;
	}

	$("#register_btn").on("click", function (event) {
		event.preventDefault();
		let formData = $('#register_form');
		let dataFormArray = getFormData(formData);
		let val_count = 0;
		let user_role = document.getElementsByName('user_role');
		let selected_user_role = '';
		for (let j = 0; j < user_role.length; j++) {
			if (user_role[j].checked == true) {
				selected_user_role = user_role[j];
			}
		}
		function onlyLetters(str) {
			return /^[a-zA-Z]+$/.test(str);
		}

		let check_first_name = onlyLetters(dataFormArray.register_first_name);
		let check_last_name = onlyLetters(dataFormArray.register_last_name);
		if (check_first_name == false) {
			let register_first_name_inp = document.getElementById('register_first_name').nextElementSibling;
			register_first_name_inp.innerText = 'השדות צריכים להכיל אותיות בלבד';
		} else if (check_last_name == false) {
			let register_last_name_inp = document.getElementById('register_last_name').nextElementSibling;
			register_last_name_inp.innerText = 'השדות צריכים להכיל אותיות בלבד';
		} else {
			alert('999');
			// let agreement_terms = document.getElementById('agreement__terms');
			// let check_checkbox = agreement_terms.nextElementSibling.getElementsByClassName('icon')[0];
			// let checkbox_classname = check_checkbox.className;
			// let split_class_name =  checkbox_classname.split(" ");
			// let checkbox_current_class_name = split_class_name[1];
			// if ( agreement_terms.checked == true){
			//     if (selected_user_role != '' || selected_user_role.length != 0){
			//
			//         for (const key in dataFormArray) {
			//             if (dataFormArray[key] != undefined || dataFormArray[key] != '') {
			//                 if (dataFormArray[key].length == 0) {
			//                     val_count++;
			//                     let elem = document.getElementsByName(key)[0];
			//                     elem.classList.add('error_validate');
			//                 }
			//             }
			//         }
			//         if (val_count == 0) {
			//             function validateEmail(email) {
			//                 var re = /\S+@\S+\.\S+/;
			//                 return re.test(email);
			//             }
			//
			//             let validateUserEmail = validateEmail(dataFormArray.email);
			//             if (validateUserEmail === true) {
			//                 $.ajax({
			//                     type: "post",
			//                     url: my_ajax_object.ajax_url,
			//                     cache: false,
			//                     data: {
			//                         emailValue: dataFormArray.email,
			//                         action: 'check_user_by_email'
			//                     },
			//                     success: function (response) {
			//                         if (response.data) {
			//                             if (dataFormArray.name === response.data.user_login) {
			//                                 swal({
			//                                     icon: "error",
			//                                     title: "שם משתמש כבר קיים",
			//                                     button: {
			//                                         text: "ok ",
			//                                     },
			//                                 });
			//                             } else if (dataFormArray.email === response.data.user_email) {
			//                                 swal({
			//                                     icon: "error",
			//                                     title: 'משתמש אחר משתמש בדוא " ל זה.',
			//                                     button: {
			//                                         text: "ok ",
			//                                     },
			//                                 });
			//                             }
			//                         } else {
			//                             if ( dataFormArray.password.length < 6) {
			//                                 swal({
			//                                     icon: "error",
			//                                     title: "הססמה חייבת להיות לא פחות מ-6 תווים",
			//                                     button: {
			//                                         text: "ok ",
			//                                     },
			//                                 });
			//                             }else {
			//                                 $.ajax({
			//                                     type: "post",
			//                                     url: my_ajax_object.ajax_url,
			//                                     cache: false,
			//                                     data: {
			//                                         selected_user_role:selected_user_role,
			//                                         dataFormArray: dataFormArray,
			//                                         action: 'custom_register_user'
			//                                     },
			//                                     success: function (userId) {
			//                                         swal({
			//                                             html: true,
			//                                             icon: "success",
			//                                             title: "ההרשמה עברה בהצלחה",
			//                                             text: 'נשלח מייל לאישור החשבון שצויין בתהליך ההרשמה.',
			//                                             button: {
			//                                                 text: "המשך ",
			//                                             },
			//                                             confirm: {
			//                                                 value: true,
			//                                                 visible: true,
			//                                                 className: "",
			//                                                 closeModal: true
			//                                             }
			//                                         }).then(
			//                                             function (isConfirm) {
			//                                                 if (isConfirm) {
			//                                                     window.location.href = 'https://kart.exit-tech.com/my-account/';
			//                                                 }
			//                                             });
			//                                     }
			//                                 });
			//
			//                             }
			//                         }
			//                     }
			//                 });
			//             } else {
			//                 swal({
			//                     icon: "error",
			//                     title: "דואר אלקטרוני לא חוקי",
			//                     button: {
			//                         text: "אישור ",
			//                     },
			//                 });
			//             }
			//         }else{
			//             swal({
			//                 icon: "error",
			//                 title: "בדוק שדות עבור שגיאה",
			//                 button: {
			//                     text: "אישור",
			//                 },
			//             });
			//         }
			//     }else{
			//         swal({
			//             icon: "error",
			//             title: 'אנא בחר תפקיד',
			//             button: {
			//                 text: "ok ",
			//             },
			//         });
			//     }
			//
			// }else{
			//     swal({
			//         icon: "error",
			//         title: 'אנא מסכים עם הכללים',
			//         button: {
			//             text: "ok ",
			//         },
			//     });
			// }
		}





	});
	//   end Karush dev

	function miniCartAjaxUpdate() {
		$.ajax({
			type: "post",
			url: my_ajax_object.ajax_url,
			cache: false,
			data: {
				action: 'update_mini_cart_action'
			},
			success: function (response) {
				let miniCartCount = document.getElementById('mini-cart-count');
				let miniCartItemsContainer = document.getElementById('sidebar-all-items');
				let miniCartSubtotal = document.getElementById('cart-subtotal');

				miniCartCount.innerText = response.cart_items_count;

				miniCartItemsContainer.innerHTML = '';
				miniCartSubtotal.innerHTML = '';

				$('#cart-subtotal').append(response.cart_total);
				$('#sidebar-all-items').append(response.cart_contents);

			}
		});
	}

	function addToCartWithQuantity(url) {
		$.ajax({
			url: url,
			type: 'POST',
			error: function (response) {
				console.log(response);
			},
			success: function (response) {
				miniCartAjaxUpdate();
			}
		});
	}


	$(".add-to-cart-with-quantity-btn").on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		let thisBtn = this;
		let addToCartUrlWithQuantity = this.href;
		let quantity = $("input[name=prod_quantity]").val();
		let getIdFromUrl = addToCartUrlWithQuantity.split('=');
		let productID = parseInt(getIdFromUrl[1]);
		let clickedBtn = this;
		if (parseInt(quantity) == 0) {
			alert("warning!");
		} else {
			// alert("work?");
			$.ajax({
				type: "post",
				url: my_ajax_object.ajax_url,
				cache: false,
				data: {
					product_id: productID,
					action: 'check_if_product_exist_in_cart'
				},
				success: function (response) {
					addToCartUrlWithQuantity += '&quantity=' + quantity;
					$.ajax({
						type: "post",
						url: my_ajax_object.ajax_url,
						cache: false,
						data: {
							product_id: productID,
							action: 'check_if_product_in_stock'
						},
						success: function (response_s) {
							if (response_s.stock_status == true) {
								addToCartWithQuantity(addToCartUrlWithQuantity);
							} else {
								alert("no work");
							}
						}
					});
				}
			});
		}
	});





	function addToCartWithQuantityVariableProduct(prod_obj) {
		$.ajax({
			url: my_ajax_object.ajax_url,
			type: 'post',
			data: {
				prod_obj: prod_obj,
				action: 'add_to_cart_variable_product'
			},
			error: function (response) {
				console.log(response);
			},
			success: function (response) {
				if (response.stock_status == true) {
					miniCartAjaxUpdate();
					//                alert("success addToCartWithQuantityVariableProduct");
				} else {
					alert("warning addToCartWithQuantityVariableProduct")
				}
			}
		});
	}

	$(".add-to-cart-btn").on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		let thisBtn = this;
		let addToCartUrl = this.href;
		let getIdFromUrl = addToCartUrl.split('=');
		let productID = parseInt(getIdFromUrl[1]);
		$.ajax({
			type: "post",
			url: my_ajax_object.ajax_url,
			cache: false,
			data: {
				product_id: productID,
				action: 'check_if_product_exist_in_cart'
			},
			success: function (response) {
				$.ajax({
					type: "post",
					url: my_ajax_object.ajax_url,
					cache: false,
					data: {
						product_id: productID,
						action: 'check_if_product_in_stock'
					},
					success: function (response_s) {
						if (response_s.stock_status == true) {
							addToCart(addToCartUrl);
						} else {
							alert("warning .add-to-cart-btn")
						}
					}
				});
			}
		});
	});


	$(".add_to_cart_with_quantity_variable_product_shop_page").on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		let thisBtn = this;
		let quantity = $this.get(0).nextElementSibling.nextElementSibling.nextElementSibling.value;
		let variation_id = $this.get(0).nextElementSibling.value;
		let productID = $this.get(0).nextElementSibling.nextElementSibling.value;
		let variable_product_obj = {
			quantity: quantity,
			variation_id: variation_id,
			productID: productID,
		};
		console.log(variable_product_obj);
		let clickedBtn = this;
		if (parseInt(quantity) == 0) {
			alert("warning first add_to_cart_with_quantity_variable_product_shop_page")
		} else {
			$.ajax({
				type: "post",
				url: my_ajax_object.ajax_url,
				cache: false,
				data: {
					product_id: productID,
					action: 'check_if_product_exist_in_cart'
				},
				success: function (response) {
					$.ajax({
						type: "post",
						url: my_ajax_object.ajax_url,
						cache: false,
						data: {
							product_id: productID,
							action: 'check_if_product_in_stock'
						},
						success: function (response_s) {
							if (response_s.stock_status == true) {
								addToCartWithQuantityVariableProduct(variable_product_obj);
							} else {
								alert("warning add_to_cart_with_quantity_variable_product_shop_page")
							}
						}
					});
				}
			});
		}
	});


	function addToCart(url) {
		$.ajax({
			url: url,
			type: 'POST',
			error: function (response) {
				console.log(response);
			},
			success: function (response) {
				miniCartAjaxUpdate();
				let miniCartCount = document.getElementById("mini-cart-count")[0];
				let currentCount = parseInt(miniCartCount.innerHTML) + 1;
				miniCartCount.innerText = currentCount;
			}
		})
	}





	$(".add-to-cart-with-quantity-variable_product-btn").on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		var thisBtn = this;
		let quantity = $("input[name=prod_quantity]").val();
		let variation_id = $("input[name=variation_id]").val();
		let productID = $("input[name=product_id]").val();
		if (variation_id) {
			let variable_product_obj = {
				quantity: quantity,
				variation_id: variation_id,
				productID: productID,
			};
			let clickedBtn = this;
			if (parseInt(quantity) == 0) {
				alert("warning add-to-cart-with-quantity-variable_product-btn 1");
			} else {
				$.ajax({
					type: "post",
					url: my_ajax_object.ajax_url,
					cache: false,
					data: {
						product_id: productID,
						action: 'check_if_product_exist_in_cart'
					},
					success: function (response) {
						$.ajax({
							type: "post",
							url: my_ajax_object.ajax_url,
							cache: false,
							data: {
								product_id: productID,
								action: 'check_if_product_in_stock'
							},
							success: function (response_s) {
								if (response_s.stock_status == true) {
									addToCartWithQuantityVariableProduct(variable_product_obj);
								} else {
									alert("not work addToCartWithQuantityVariableProduct 2  ")
								}
							}
						});

					}
				});
			}
		} else {
			alert("not work warning add-to-cart-with-quantity-variable_product-btn ")
		}
	});

	$("#wpcf7-f937-o1").addClass("page-support__form");
	$("#wpcf7-f938-o1").attr("dir", "rtl");
	$('.phone__number').attr('maxlength', '15');
	$(".phone__number").on('input', function (e) {
		this.value = this.value.replace(/[^0-9+()-\^]/g, '');
	});





	$('.js-open-cart').on('click', function () {
		$('.sidebar-cart').addClass("active");
	});
	$(".js-sidebar-cart-close").on("click", function () {
		$('.sidebar-cart').removeClass("active");
	})
	// quantity__plus

	$(document).on("click", ".cart__item .quantity__plus", function (e) {
		e.preventDefault();
		$('[name="update_cart"]').prop('disabled', false);
		$('[name="update_cart"]').attr('aria-disabled', 'false');

		let quantity_inp_elem = this.parentElement.previousElementSibling;
		let quantity_inp = this.nextElementSibling;
		let prod_id = quantity_inp_elem.getAttribute("data-product_id");
		quantity_inp.value = parseInt(quantity_inp.value) + 1;
		$.ajax({
			type: "post",
			url: my_ajax_object.ajax_url,
			cache: false,
			data: {
				prod_id: prod_id,
				quantity: quantity_inp.value,
				action: 'update_product_quantity'
			},
			success: function (response) {
				miniCartAjaxUpdate();
			}
		})
	});

	// quantity__minus
	$(document).on("click", ".cart__item .quantity__minus", function (e) {
		e.preventDefault();
		$('[name="update_cart"]').prop('disabled', false);
		$('[name="update_cart"]').attr('aria-disabled', 'false');


		let quantity_inp_elem = this.parentElement.previousElementSibling;
		let quantity_inp = this.previousElementSibling;

		let prod_id = quantity_inp_elem.getAttribute("data-product_id");

		if (parseInt(quantity_inp.value) != 1) {
			quantity_inp.value = parseInt(quantity_inp.value) - 1;
			$.ajax({
				type: "post",
				url: my_ajax_object.ajax_url,
				cache: false,
				data: {
					prod_id: prod_id,
					quantity: quantity_inp.value,
					action: 'update_product_quantity'
				},
				success: function (response) {
					miniCartAjaxUpdate();
				}
			})
		}
	});

	window.onload = function () {
		$('[name="update_cart"]').prop('disabled', false);
	};


	// lang
	function getCookie(name) {
		let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	// console.log(getCookie('googtrans'));

	const langFlagsHeader = $('.header__topline-lang #flags').clone().addClass('clone')

	$('.header__topline-lang').append(langFlagsHeader)

	if (getCookie('googtrans') == '/iw/en') {
		// console.log('eng'); 
		$('.header__topline-lang #flags.clone li').not('#English').hide()

	} else if (getCookie('googtrans') == '/iw/ru') {
		// console.log('ru'); 
		$('.header__topline-lang #flags.clone li').not('#Russian').hide()

	} else {
		// console.log('iw'); 
		$('.header__topline-lang #flags.clone li').not('#Hebrew').hide()
	}


	$('.header__topline-lang').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.header__topline-lang #flags li').on('click', function () {
		let langId = $(this).attr('id')

		$('.header__topline-lang #flags.clone li').not(`#${langId}`).hide()
		$(`.header__topline-lang #flags.clone li#${langId}`).show()

	})

	// mobile
	function getCookie(name) {
		let matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	// console.log(getCookie('googtrans'));

	const langFlagsMob = $('.burger-mobile__lang #flags').clone().addClass('clone')

	$('.burger-mobile__lang').append(langFlagsMob)

	if (getCookie('googtrans') == '/iw/en') {
		// console.log('eng'); 
		$('.burger-mobile__lang #flags.clone li').not('#English').hide()

	} else if (getCookie('googtrans') == '/iw/ru') {
		// console.log('ru'); 
		$('.burger-mobile__lang #flags.clone li').not('#Russian').hide()

	} else {
		// console.log('iw'); 
		$('.burger-mobile__lang #flags.clone li').not('#Hebrew').hide()
	}


	$('.burger-mobile__lang').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.burger-mobile__lang #flags li').on('click', function () {
		let langId = $(this).attr('id')

		$('.burger-mobile__lang #flags.clone li').not(`#${langId}`).hide()
		$(`.burger-mobile__lang #flags.clone li#${langId}`).show()

	})
	// lang


	$('.select-header__categories li.cat-item:first-child').addClass('hover')
	$('.select-header__categories li.cat-item').on('mouseenter', function () {
		$('.select-header__categories li.cat-item').removeClass('hover')
		$(this).addClass('hover')
	})

	$('.header__profile-exit').on('click', function () {
		$('.popup-exit').fadeIn()

	})
	$('.popup-exit__close, .popup-exit__button-cancel').on('click', function () {
		$('.popup-exit').fadeOut()

	})
	$(document).on('click', function (e) {
		if (!e.target.closest('.popup-exit__content') && !e.target.closest('.header__profile-exit')) {
			$('.popup-exit').fadeOut()
		}
	})


	$('.dgwt-wcas-ico-magnifier').on('click', function () {
		$('.dgwt-wcas-search-wrapp').addClass('open')
	})
	$(document).on('click', function (e) {
		if (!e.target.closest('.dgwt-wcas-search-wrapp')) {
			$('.dgwt-wcas-search-wrapp').removeClass('open')
		}
	})

	// news
	// tags 
	if ($(window).width() >= 576) {
		const newsTags = $('.news-sidebar__tags-wrapper .tags').find('.news-sidebar__tag')

		if (newsTags.length > 30) {

			$('.news-sidebar__tags-wrapper').find('.product__categories-more').show()
			$(".product__categories-more-wrap").prepend(newsTags.slice(30));
			newsTags.splice(30, newsTags.length - 30)
		}
	}
	// tags

	// tabs in burger mobile
	$('.burger-mobile__link-large').on('click', function () {
		let block = $(this).closest('.dropdown')

		if (block.hasClass('active')) {
			block.removeClass('active')
			block.find('.dropdown-content').slideUp()
			block.find('.dropdown2').slideUp()
		} else {
			block.addClass('active')
			block.find('.dropdown-content').slideDown()
			block.find('.dropdown2').slideDown()

		}
	})
	// tabs in burger mobile
	// news


	// position for header dropdown
	function setPos() {
		let posFromLeft = document.querySelector('.dropdown-pos-from').getBoundingClientRect().right

		let rightFromContainer = (window.innerWidth - 1430) / 2
		if (window.innerWidth < 1460) {
			rightFromContainer = 15
		}
		let posFromRight = window.innerWidth - posFromLeft

		document.querySelector('.dropdown-pos-to').style.right = posFromRight - rightFromContainer + 'px'

	}
	setPos();
	// position for header dropdown




	$("#save_cart").on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		let thisBtn = this;
		let products_ids_arr = [];
		let user_id = document.getElementById('user_id').value;
		let basket_name = document.getElementById('basket_name').value;
		let get_ids = document.getElementsByClassName('prod_id');
		for (let a = 0; a < get_ids.length; a++) {
			products_ids_arr.push(get_ids[a].value);
		}
		console.log(basket_name);
		console.log(products_ids_arr);

		$.ajax({
			type: "post",
			url: my_ajax_object.ajax_url,
			cache: false,
			data: {
				user_id: user_id,
				basket_name: basket_name,
				products_ids_arr: products_ids_arr,
				action: 'save_cart_data'
			},
			success: function (response) {
				alert('aaa');
			}
		});
	});

	///////Slider Banner Shop page
	const swiperShop = new Swiper('.shop-slider__container', {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 20,
	});

	$(document).ready(function () {
		var show = true;
		var countbox = ".page-dimonds__amount dimonds-amount";
		$('.dimonds-amount__num').css('opacity', '1');
		$('.dimonds-amount__num').spincrement({
			// thousandSeparator: "",
			duration: 1200
		});
		start = 0
		show = false;
	});
	$(document).ready(function () {

		// 	var show = true;
		// 	var countbox = ".benefits__inner";
		// 	$(window).on("scroll load resize", function () {
		// 		if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
		// 		var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
		// 		var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
		// 		var w_height = $(window).height(); // Высота окна браузера
		// 		var d_height = $(document).height(); // Высота всего документа
		// 		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		// 		if (w_top + 0 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
		// 			$('.benefits__number').css('opacity', '1');
		// 			$('.benefits__number').spincrement({
		// 				// thousandSeparator: "",
		// 				duration: 1200
		// 			});

		// 			show = false;
		// 		}
		// 	});

	});

	// my account saved
	$('.saved-tabs-edit__icon').on('click', function (e) {
		e.stopPropagation();
		$('.saved-tabs-edit').addClass('edit')
		$('.saved-tabs-edit__input').removeAttr('disabled')
	})
	$('.saved-tabs-edit__save').on('click', function (e) {
		e.stopPropagation();

		if ($('.saved-tabs-edit__input').val() == '') {
			$('.saved-tabs-edit').addClass('error')
		} else {
			$('.saved-tabs-edit').removeClass('edit')
			$('.saved-tabs-edit').removeClass('error')
			$('.saved-tabs-edit__input').attr('disabled', 'disabled')
		}
	})
	$('.saved-tabs-edit__input, .saved-tabs__remove-tab').on('click', function (e) {
		e.stopPropagation();
	})


	$('.saved-tabs__head').on('click', function (e) {
		let block = $(this).closest('.saved-tabs')

		block.toggleClass('open')
		if (block.hasClass('open')) {
			block.find('.saved-tabs__body').slideDown(500)
		} else {
			block.find('.saved-tabs__body').slideUp(500)
		}
	})

	$('.saved-tabs__remove-tab .btn-popup').on('click', function () {
		$(this).closest('.saved-tabs').find('.popup-delete-saved-card').fadeIn(200)
	})



	$('#contact-form').validate({
		rules: {
			emailContact: {
				required: true,
				email: true
			},
			telContact: {
				required: true,
				minlength: 15
			}
		},
		messages: {
			emailContact: "אנא הזן כתובת דוא ל תקנית.",
			telContact: "נא להזין לפחות 15 תווים."
		},
		errorPlacement: function (error, element) {
			element.after(error);
		},
	});

	$("#nameContact").attr('maxlength', '15');


	$("#nameContact").on('input', function (e) {
		this.value = this.value.replace(/[^a-z]/g, '');
	});

	$("#telContact").on('input', function (e) {
		this.value = this.value.replace(/[^0-9+()-\^]/g, '');
	});





	// my account saved

	// $(document).ready(function() {
	// 	$('#preloader').fadeOut(400);
	// });

	let policyItem = document.querySelectorAll('.page-private-policy__aside-item')
	if(policyItem){
		let identif = '#policy-block'
		let count = 1
		policyItem.forEach(el => {
			el.setAttribute('href',identif + '-'+count)
			count++
		});
	}


	let policyBlock = document.querySelector('.page-private-policy__post')
	let policyBlockItem = policyBlock.querySelectorAll('.text-post__block .anchor')
	if(policyBlockItem){
		let identif = 'policy-block'
		let count = 1
		policyBlockItem.forEach(el => {
			el.setAttribute('id',identif + '-'+count)
			count++
		});
	}

	const policyAnchor = document.querySelector('.anchor') 

	policyAnchor.addEventListener('click', function (e) {
		e.preventDefault()

		let policyBlockID = policyAnchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})

})

