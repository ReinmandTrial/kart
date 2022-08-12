
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