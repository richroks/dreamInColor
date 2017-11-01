// SCROLL NAV
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200 && $(this).width() > 951) {
                $('.top-nav-scroll').fadeIn(500).css('display', 'flex');
            } else {
                $('.top-nav-scroll').fadeOut(500);
            }
        });
    });
})(jQuery);

// SCROLL MOBLE NAV
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay2').toggleClass('open');
  });

  $('#overlay2 li').click(function() {
     $('#overlay2').toggleClass('open');
     $('.button_container').toggleClass('active');
    });

//FACEBOOK MODAL
$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;

	var $this = $(this),
			modal = $($this).data("modal");

	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
		$(modal).addClass("open");
	}, 350);

	$(document).on('click', function(e){
		var target = $(e.target);

		if ($(target).hasClass("overlay")){
			$(target).find(".modal").each( function(){
				$(this).removeClass("open");
			});
			setTimeout( function(){
				$(target).removeClass("open");
			}, 350);
		}

	});

});
$(".close-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;

	var $this = $(this),
			modal = $($this).data("modal");

	$(modal).removeClass("open");
	setTimeout( function(){
		$(modal).parents(".overlay").removeClass("open");
	}, 350);

});


// GOOGLE MAP
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 39.358462, lng: -76.372418},
    disableDefaultUI: true
  });

  var image = 'assets/icons/pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 39.358292, lng: -76.372118},
    map: map,
    icon: image
  });
};

//SMOOTH SCROLL
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
