$(document).ready(function(){

//alert();

//$('#padre').hide();

// Parent
/*	$('.caja').parent().css({
	 	background: '#1b3d82'
	 });*/

// Parents
	//$('#tercera').parents();

// Children
	// $('#padre').children().fadeOut(5000);
	// $('#padre').children('').fadeOut(1000);

// Find
//	 $('#contenedor').find('#tercera').slideUp();

// Siblings


	$('#tercera').siblings().fadeOut(2500);

// Next - Prev
$('#tercera').nextAll().css({
		background: '#000'
	});

});