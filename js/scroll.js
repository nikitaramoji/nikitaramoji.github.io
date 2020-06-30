$(document).ready(function(){
	$(this).scrollTop(0);
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
		  	scrollTop: $(hash).offset().top
		  }, 1000);
		}
	});
	$(window).on('scroll', function() {
		$("nav a").each(function() {
			$(this).removeClass('activelink');
        	$(this).addClass('notactive');
		});
	    $('.full-pg').each(function() {
	        if($(window).scrollTop() >= $(this).offset().top - 100 && $(window).scrollTop() <= $(this).offset().top + 100) {
	            var id = $(this).attr('id');
	            $("#"+id.substr(0,id.length-2)+"link").addClass('activelink');
	            $("#"+id.substr(0,id.length-2)+"link").removeClass('notactive');
	        }
	    });
	});
});
