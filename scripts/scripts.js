$(document).ready(function(){
	$('.events input, label, a').not('#loc1, .loc1').hide()
	$('.loc1').find('.add').click(function(){
		$('.events input, label, a').not('#loc3, .loc3, #loc4, .loc4').show()
	})
	$('.loc2').find('.remove').click(function(){
		$('.events input, label, a').not('#loc1, .loc1').hide()
	})
	$('.loc2').find('.add').click(function(){
		$('.events inputs, label, a').not('#loc4, .loc4').show()
	})
});
