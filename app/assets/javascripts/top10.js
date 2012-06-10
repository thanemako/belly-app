var currentpage;
var pages;

// template markup is in top10-template.js
function makeTemplate(data, appendTarget, template, name) {
	$.template(name, template);
	$.tmpl(name, data).appendTo(appendTarget);
}

$(document).bind("mobileinit", function(){
	// overrides default page transition to slide
	$.extend($.mobile, {
		defaultPageTransition: 'slide'
	});

	$(function() {
	    $.getJSON('movies.json', function(data) { 
	    	var movies;
	        $.each(data.movies, function(i, movie) {
	            makeTemplate(movie, $('#movieslist'), movieMarkup, "movies");
	        });
	        $('.details').hide();
	        $('figure').click(function(c){
	        	$(this).next('.details').slideToggle();
	        	$(this).toggleClass('expanded-details');
	        });
	    });
	    $.getJSON('albums.json', function(data) { 
	    	var albums;
	        $.each(data.albums, function(i, album) {
	            makeTemplate(album, $('#albumslist'), albumMarkup, "albums");
	        });
	        // $('.details').hide();
	        // $('figure').click(function(c){
	        // 	$(this).next('.details').slideToggle();
	        // 	$(this).next('.details').toggleClass('expanded-details');
	        // });
	    });
});
});

// jQuery recommends this for JQ mobile instead of document.ready
$(document).bind("pageinit", function(){
	$('body').swipe(function(){
		if (currentpage == 'movies') {
			$.mobile.changePage( "#albums", { transition: "slide"} );
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