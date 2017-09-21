$(document).ready(function () {
	$(".button-collapse").sideNav({
		menuWidth: 500,
		edge: 'right'
	})

	$('nav.fixed').midnight()

	var options = {selector: '#texto-intro-home', offset: 500, callback: function(el) { $(el).fadeIn()}}

  Materialize.scrollFire(options);

})