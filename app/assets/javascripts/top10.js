var tmdbkey   = '262ba0731667a5ccd2afa4cf5a34e20f';
var lastfmkey = '9c5d9862b1419381c2fa9257bd250192';
var pages = [];
var currentpage = '';

$(document).ready(function(){
	$('body > .page').each(function(){
		pages.push($(this).attr('id'));
	});

	$('.details').hide();
	$('figure').click(function(e){
		$(this).toggleClass('expanded-details');
		$(this).find('+ .details').slideToggle();
	});
	// $('body').swipeRight(function(s){

	// });
});
$.pagechange(function(){
	console.log('page changed');
});