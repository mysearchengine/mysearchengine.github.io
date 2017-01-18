$(document).ready(function() {

	var widthCurrent = $(window).width();
	var heightCurrent = $(window).height();
	var aspectRatio = widthCurrent / heightCurrent;

	if (aspectRatio > 16/9) {
		$("html").css("background-size", "100% auto");
	}

	else {
		$("html").css("background-size", "auto 100%");
	}

});