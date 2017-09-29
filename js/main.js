$(document).ready(function () {
	// Muestra el sitio en cuanto acabe de cargar todos los recursos
	$('body').animate({
		opacity: 1
	}, 150)
	// SideNav
	$(".button-collapse").sideNav({
		menuWidth: 500,
		edge: 'right'
	})
	// Ocultar SideNav
  $("#slide-out").find(".icon-close").click(function () {
  	$('.button-collapse').sideNav('hide')
  })
	// Midnight JS
	$('nav.fixed').midnight()
	// ScrollFire
	// var options = [{selector: '.scroll-item', offset: 200, callback: function($el) { console.log($el) }}]
  // Materialize.scrollFire(options)
  new WOW().init()
})