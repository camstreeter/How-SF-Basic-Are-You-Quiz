$(document).ready(function(){
	// var total = $('input[name="question1"]:checked').val(); + $('input[name="question2"]:checked').val()  + ('input[name="question3"]:checked').val() + $('input[name="question4"]:checked').val() + $('input[name="question5"]:checked').val() + $('input[name="question6"]:checked').val() + $('input[name="question7"]:checked').val() + $('input[name="question8"]:checked').val() + $('input[name="question9"]:checked').val() + $('input[name="question10"]:checked').val(); 
	var result1 = parseInt($('input[type="radio"][name="question1"]:checked').val(), 10);
	var result2 = parseInt($('input[type="radio"][name="question2"]:checked').val(), 10);
	var total = result1 + result2;
	$('#submit').click(function(){
		var result1 = parseInt($('input[type="radio"][name="question1"]:checked').val(), 10);
		var result2 = parseInt($('input[type="radio"][name="question2"]:checked').val(), 10);
		var result3 = parseInt($('input[type="radio"][name="question3"]:checked').val(), 10);
		var result4 = parseInt($('input[type="radio"][name="question4"]:checked').val(), 10);
		var result5 = parseInt($('input[type="radio"][name="question5"]:checked').val(), 10);
		var result6 = parseInt($('input[type="radio"][name="question6"]:checked').val(), 10);
		var result7 = parseInt($('input[type="radio"][name="question7"]:checked').val(), 10);
		var result8 = parseInt($('input[type="radio"][name="question8"]:checked').val(), 10);
		var result9 = parseInt($('input[type="radio"][name="question9"]:checked').val(), 10);
		var result10 = parseInt($('input[type="radio"][name="question10"]:checked').val(), 10);
		var total = result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9 + result10;
		if (total <= 17) {
			$('body').empty();
			$('body').append('<p>You got a score of ' + total + '.</p><p>You\'re definitely not SF Basic.</p>');
		} else if (total >= 10 && total <= 25) {
			$('body').empty();
			$('body').append('<p>You got a score of ' + total + '.</p><p>You might be SF Basic.</p>');
		} else if (total <= 33) {
			$('body').empty();
			$('body').append('<p>You got a score of ' + total + '.</p><p>You\'re most likely SF Basic.</p>');
		} else if (total <= 40) {
			$('body').empty();
			$('body').append('<p>You got a score of ' + total + '.</p><p>You\'re totally SF Basic!</p>');
		}
	});
});