
// // Аккордеон
// function accordion() {
// 	const items = document.querySelectorAll('.accord__trigger')
// 	items.forEach(item => {
// 			item.addEventListener('click', () => {
// 					const parent = item.parentNode
// 					if (parent.classList.contains('active')) {
// 							parent.classList.remove('active')
// 					} else {
// 							document
// 									.querySelectorAll('.accord__item')
// 									.forEach(child => child.classList.remove('active'))   
// 							parent.classList.add('active')
// 					}
// 			})
// 	})
// }
// accordion() 


//accordion mobile & desktop
	$(".js-trigger").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("active")) {
			$(".js-content").slideUp(400);
			$(".js-trigger").removeClass("active");
			$('.js-img').removeClass('js-img--rotate');
		}

		$this.toggleClass("active");
		$this.next().slideToggle();
		$('.js-img',this).toggleClass('js-img--rotate');
	});

// load more btn 
$('.products-content').ready(function(){
  $(".products-card").slice(0, 3).show();
  $("#products-btn").on("click", function(e){
    e.preventDefault();
    $(".products-card:hidden").slice(0, 3).slideDown();
    if($(".products-card:hidden").length == 0) {
      $("#products-btn").addClass("lock-btn");
    }
  });
});