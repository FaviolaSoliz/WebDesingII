$(document).ready(function(){

	// Animacion

	// $(selector).animate({parametros}, velocidad, callback);

	$('#boton').on('click', function(){
		
		/*$('#caja').animate({
			//width: '+=100px',
		//	opacity: '+=0.2' ,
			//height: '200px'



			//  marginLeft: '+=20px'
			// marginLeft: '+=100px'

			// Las animaciones de color no estan incluidas en Jquery.
			// backgroundColor: '#ff8000'
		}, 500); */

		// Animando el color con Animaciones en CSS3
		 $('#caja').togleClass('animacion');

		// Podemos ejecutar multiples animaciones
		/*$('.caja').animate({
			marginLeft: '-=50px'
		}, 300);*/
	});

});
