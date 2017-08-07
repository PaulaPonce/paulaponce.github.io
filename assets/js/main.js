$(document).ready(function() {
	var animation_elements = $('.animation-element');
	var animation_images = $('.animation-image');

	function check_if_in_view() {
		var window_height = $(window).height();
		var window_top_position = $(window).scrollTop();
		var window_bottom_position = (window_top_position + window_height);
	 
		$.each(animation_elements, function() {
			var element = $(this);
			var element_height = element.outerHeight();
			var element_top_position = element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
		 
			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				element.addClass('animated flash');
			} else {
				element.removeClass('animated flash');
			}
		});
		$.each(animation_images, function() {
			var element = $(this);
			var element_height = element.outerHeight();
			var element_top_position = element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
		 
			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				element.addClass('animated flip');
			} 
		});
	}

	$(window).on('scroll resize', check_if_in_view);
	$(window).trigger('scroll');
});


//Particles
var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
		stats.begin();
		stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
	requestAnimationFrame(update);
	};
requestAnimationFrame(update);