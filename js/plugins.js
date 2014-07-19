// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$( document ).ready(function() {
$(".navigation a").bind("click", function () {
$(".navigation a").removeClass("active");
$(this).addClass("active");
});

	var ascensor = $('#ascensorBuilding').ascensor();
	var ascensorInstance = $('#ascensorBuilding').data('ascensor');
	$(".navigation li").click(function(event, index) {
				ascensorInstance.scrollToFloor($(this).index());
			});

			$(".navigation li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

			ascensor.on("scrollStart", function(event, floor){
				$(".navigation li").removeClass("selected");
				$(".navigation li:eq("+floor.to+")").addClass("selected");
			});

function initialize() {
            var map_canvas = document.getElementById('map_canvas');
            var map_options = {
              center: new google.maps.LatLng(37.5687, -85.7347),
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(map_canvas, map_options)
          }
         google.maps.event.addDomListener(window, 'load', initialize);


$('.timer').countTo();
$('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });

});
