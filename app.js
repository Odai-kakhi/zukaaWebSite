$('.card').hover(function(){
	var div = $(this).find('.card_text');
	$(div).animate({
		height: '100%',
		padding : '15px'
	}, 350);
})

$('.card').mouseleave(function(){
	var div = $(this).find('.card_text');
	$(div).animate({
		height: '0',
		padding : '0px'
	}, 200);
})