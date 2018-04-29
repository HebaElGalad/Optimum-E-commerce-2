// Hot Deals Countdown Timer
$(window).on('load', function () {
	countDown();
});

function countDown() {
	// Set display interval every 1 SEC.
	var interval = setInterval(function () {
		// Deal ends on
		var endDay = new Date("May 15, 2018 15:37:25");
		// get end time in milliseconds
		var dealEnds = endDay.getTime();
		// get time now in milliseconds
		var timeNow = new Date().getTime();
		// Calculate the difference in seconds
		var remainingTime = Math.floor((dealEnds - timeNow) / 1000);
		// console.log(remainingTime);

		var days	= Math.floor(remainingTime / (60 * 60 * 24));
		var hours	= Math.floor(remainingTime % (60 * 60 * 24) / (60 * 60));
		var minutes = Math.floor(remainingTime % (60 * 60) / 60);
		var seconds = Math.floor(remainingTime % 60);
		// console.log(days + ' days ' + hours + ' hr ' + minutes + ' min ' + seconds + ' sec');

		var spanText = '<span class="d-block font-weight-normal text-dark h5 pt-3"></span>';

		$('.round-counter:first-child').children().text(days).append($(spanText).html('Days'));
		$('.round-counter:nth-of-type(2)').children().text(hours).append($(spanText).html('Hours'));
		$('.round-counter:nth-of-type(3)').children().text(minutes).append($(spanText).html('Min'));
		$('.round-counter:last-child').children().text(seconds).append($(spanText).html('Sec'));

		// When deal ends display expired
		if (remainingTime < 0) {
			clearInterval(interval);
			$('.hot-deal').html('<h1 class="display-4 text-dark text-uppercase pt-3">Expired</h1>');
			// OR HIDE THE WHOLE SECTION
			// $('.deal-ended').css('display', 'none');
		}

	}, 1000);

}
