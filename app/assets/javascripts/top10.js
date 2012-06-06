var tmdbkey   = '262ba0731667a5ccd2afa4cf5a34e20f';
var lastfmkey = '9c5d9862b1419381c2fa9257bd250192';
var currentpage;
var pages;

$(document).bind("mobileinit", function(){
	// overrides default page transition to slide
	$.extend($.mobile, {
		defaultPageTransition: 'slide'
	});
});

// jquery recommends this for jq mobile instead of document.ready
$(document).bind("pageinit", function(){
	// get movie and music json
	$.getJSON('movies.json', function(data){
		var items = [];

		$.each(data, function(key, val) {
			items.push('<li>' + val + '</li>');
		});
		$('<ul/>', {
			html: items.join('')
		}).insertAfter('nav');
	});

	$('.details').hide();
	$('figure').click(function(){
		$(this).toggleClass('expanded-details');
		$(this).find('+ .details').slideToggle();
	});

	var pages = [];
	$('body > .page').each(function(){
		pages.push($(this).attr('id'));
	});
	
	$('body').swipe(function(){
		if (currentpage == 'movies') {
			$.mobile.changePage( "#music", { transition: "slide"} );
		}
		else {
			$.mobile.changePage( "#movies", { transition: "slide"} );
		}
		
	});
});

$(document).bind("pagechange", function(){
	// gets current page ID on page change
	currentpage = $('.ui-page-active').attr('id');
});