$('.slider__list--reviews').slick({
	dots: true,
	arrows: false,
	adaptiveHeight: true,
	appendDots: ".slider__dots--reviews",
	dotsClass: "dots-list",
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 959,
			settings: {
				dots: false,
				arrows: true
			}
		}
	]
});

$('.slider__list--price').slick({
	dots: true,
	arrows: false,
	centerMode: true,
	centerPadding: "21px",
	appendDots: ".slider__dots--price",
	dotsClass: "dots-list"
});
