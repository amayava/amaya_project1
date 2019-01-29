$(document).ready(function(){

	$(".arrow-button").on('click', function(event) {
		if (this.hash !== "") {

      		event.preventDefault();

      		var hash = this.hash;

      $('html, body').animate({
		  scrollTop: $('.index-second-section').offset().top

	  }, 720, function(){
		  window.location.hash = hash;
        });
        }
    });
});
