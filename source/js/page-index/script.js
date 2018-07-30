var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});


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
