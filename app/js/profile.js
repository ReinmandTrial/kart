
//accordion mobile & desktop
	$(".js-trigger").on("click", function(e) {

		e.preventDefault();
		let $this = $(this);

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

// tooltip copy id
$('.sidebar__referal-link').on('click', function () {
	$('.prompt').fadeIn('active');

	setTimeout(function() {
    $(".prompt").fadeOut('active');
	}, 3000);
});

// tooltip info id
$( ".sidebar__points-icon" ).mouseenter(function() {
	$('.sidebar__points-info').fadeIn('active');
});

$( ".sidebar__points-icon" ).mouseleave(function() {
	$('.sidebar__points-info').fadeOut('active');
});