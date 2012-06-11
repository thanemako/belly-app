var currentPage;
var pages;
var nextPageIndex;
var pageIDs = [];

// template markup is in top10-template.js
function makeTemplate(data, appendTarget, template, name) {
	$.template(name, template);
	$.tmpl(name, data).appendTo(appendTarget);
}

$(document).bind("mobileinit", function(){
	$(function() {
	    $.getJSON('movies.json', function(data) { 
	    	var movies;
	        $.each(data.movies, function(i, movie) {
	            makeTemplate(movie, $('#movies-list'), movieMarkup, "movies");
	        });
	        $('.movie .details').hide();
	        $('.movie figure').click(function(c){
	        	$(this).next('.details').stop(true, true).slideToggle("fast");
	        	$(this).toggleClass('expanded-details');
	        });
	    });
	    $.getJSON('albums.json', function(data) { 
	    	var albums;
	        $.each(data.albums, function(i, album) {
	            makeTemplate(album, $('#albums-list'), albumMarkup, "albums");
	        });
	       	
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
	$('body').swipeleft(function(){
		// at the last page
		if ((pageIDs.indexOf(currentPage) + 1) == pages.length) {
			$.mobile.changePage('#'+pageIDs[0], { transition: "slide"});
		}
		else {
			$.mobile.changePage("#"+pageIDs[nextPageIndex], { transition: "slide"});
		}	
		
	});
});

$(document).bind("pagechange", function(){
	// gets current and next page IDs on page change
	currentPage = $('.ui-page-active').attr('id');
	nextPageIndex = pageIDs.indexOf(currentPage) + 1;
});