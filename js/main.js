$(document).ready(function () {
	$(".button-collapse").sideNav({
		menuWidth: 500,
		edge: 'right'
	})

	$('nav.fixed').midnight()

	var options = [{selector: '#cards-projects', offset: 200, callback: function() { Materialize.fadeInImage('#cards-projects') }}]

  Materialize.scrollFire(options);

})