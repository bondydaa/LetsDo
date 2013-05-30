$(document).ready(function(){
	$('.events input, label, a').not('#loc1, .loc1').hide()
	$('a .add').click(function(){
		$('.events input, label, a').not('#loc3, .loc3, #loc4, .loc4').show()
	})

});
