var deadline = "07/30/2018";


$(window).ready( function() {
	var timeRemaining = function() {
		//timer logic with the end date being bootcamp D-Day
		var remainingTime = Date.parse(deadline) - Date.parse(new Date());
		var seconds = Math.floor(((remainingTime / 1000) % 60));
		var minutes = Math.floor((((remainingTime / (1000 * 60)) % 60)));
		var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
		var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
		//assigns the variables to their designated ID's
		$('#daysNum').text(days);
		$('#hoursNum').text(hours);
		$('#minutesNum').text(minutes);
		$('#secondsNum').text(seconds);			
	}
	//runs the function above roughly every second
	var interv = setInterval(timeRemaining, 1000);
});

/*
There is currently a delay of about a second when the page is first opened
	will address at a later time 6/11/2018
*/
