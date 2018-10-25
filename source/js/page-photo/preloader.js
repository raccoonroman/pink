document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.body.querySelector('.preloader');
		if (!preloader.classList.contains('preloader__no-active')) {
			preloader.classList.add('preloader__no-active')
		}
	}, 1);
}
