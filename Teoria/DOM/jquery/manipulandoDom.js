$(document).ready(function(){

// .text()
//	 $('#titulo').text('<u>Faviola</u>');

// .html()
//	$('#titulo').html('<u>Encabezado Modificado con Jquery</u>');

// .val()
/*	var nombre = $('#nombre');
	nombre.on('change', function(){
		$('#titulo').text(nombre.val());
	});*/
	
// .attr()
	$('#enlace').text('UPDS');
//	$('#enlace').attr('href', 'http://www.upds.edu.bo');
	
	// Multiples atributos.
	$('#enlace').attr({
		'class': 'azul',
		'target': '_blank',
		'href': 'http://www.upds.edu.bo'
	});	

});
