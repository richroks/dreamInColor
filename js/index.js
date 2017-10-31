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
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 400 && $(this).width() < 951) {
                $('#mobile').fadeIn(500);
								$('#mobile img').fadeIn(500);
            } else {
                $('#mobile').fadeOut(500);
            }
        });
    });
})(jQuery);

// MOBILE SCROLL TOGGLE
	$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

	$('#overlay li').click(function() {
	 $(this).toggleClass('active');
	 $('#overlay').toggleClass('open');
	 $(".button_container").toggleClass("active");
	});

// FACEBOOK MODAL
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
