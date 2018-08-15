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




var filterIndex = 1;
showFilters(filterIndex);

function filter(n) {
	showFilters(filterIndex = n);
}

function showFilters(n) {
	var i;
	var slides = document.getElementsByClassName("upload__range-item");
	var filters = document.getElementsByClassName("upload__filter-btn");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < filters.length; i++) {
		filters[i].className = filters[i].className.replace(" upload__filter-btn--active", "");
	}
	slides[filterIndex-1].style.display = "block";
	filters[filterIndex-1].className += " upload__filter-btn--active";
}
