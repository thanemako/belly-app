var currentPage;
var pages;
var pageIDs = [];

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
	pages = $('body > .page');
	if (pages.length > pageIDs.length) {
		pages.each(function(e){
			pageIDs.push($(this).attr('id'));
		});
	}

});

$(document).bind("pagechange", function(){
	// gets current page ID on page change
	currentPage = $('.ui-page-active').attr('id');
	var nextPageIndex = pageIDs.indexOf(currentPage) + 1;
	
	$('body').swipe(function(){
		// at the last page
		if ((pageIDs.indexOf(currentPage) + 1) == pages.length) {
			$.mobile.changePage('#'+pageIDs[0]);
		}
		else {
			$.mobile.changePage("#"+pageIDs[nextPageIndex]);
		}	
		
	});
	console.log(nextPageIndex);
});