var tmdbkey   = '262ba0731667a5ccd2afa4cf5a34e20f';
var lastfmkey = '9c5d9862b1419381c2fa9257bd250192';
var currentpage;
var pages;
var title;

var moviemarkup =
			'<article class="movie">									\
			  <figure>													\
			    <img src="${imageurl}" class="full">					\
			    <figcaption class="title">								\
			      ${title}												\
			      <a class="more ui-link">Film details</a>				\
			    </figcaption>											\
			  </figure>													\
			  <ul class="details cols">									\
			    <li class="col-33">										\
			      <h3>Release Date</h3>									\
			      <p>${releasedate}</p>									\
			    </li>													\
			    <li class="col-33">										\
			      <h3>Directed By</h3>									\
			      <p>${director}</p>									\
			    </li>													\
			    <li class="col-33 col-last">							\
			      <h3>Starring</h3>										\
			      <ul>													\
			        <li>${starring[0]}</li>								\
			        <li>${starring[1]}</li>								\
			        <li>${starring[2]}</li>								\
			      </ul>													\
			    </li>													\
			  </ul>														\
			</article>';

var albummarkup =
			'<article class="album">									\
			  <figure>													\
			    <img src="${imageurl}" class="full">					\
			    <figcaption class="title">								\
			      ${title}												\
			      <a class="more ui-link">Album details</a>				\
			    </figcaption>											\
			  </figure>													\
			  <ul class="details cols">									\
			    <li class="col-50">										\
			      <h3>Artist</h3>										\
			      <p>${artist}</p>										\
			    </li>													\
			    <li class="col-50">										\
			      <h3>Release Date</h3>									\
			      <p>${releasedate}</p>									\
			    </li>													\
			  </ul>														\
			</article>';

function makeTemplate(data, appendTarget, template, name) {
	$.template(name, template);
	$.tmpl(name, data).appendTo(appendTarget);
}

//console.log(markup);
$(document).bind("mobileinit", function(){
	// overrides default page transition to slide
	$.extend($.mobile, {
		defaultPageTransition: 'slide'
	});

	$(function() {
	    $.getJSON('movies.json', function(data) { 
	    	var movies;
	        $.each(data.movies, function(i, movie) {
	            makeTemplate(movie, $('#movieslist'), moviemarkup, "movies");
	            console.log('made it in movies');
	        });
	        $('.details').hide();
	        $('figure').click(function(c){
	        	$(this).next('.details').slideToggle();
	        	$(this).next('.details').toggleClass('expanded-details');
	        });
	    });
	    $.getJSON('albums.json', function(data) { 
	    	var albums;
	        $.each(data.albums, function(i, album) {
	            makeTemplate(album, $('#albumslist'), albummarkup, "albums");
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
	// var pages = [];
	// $('body > .page').each(function(){
	// 	pages.push($(this).attr('id'));
	// });
	
	$('body').swipe(function(){
		if (currentpage == 'movies') {
			$.mobile.changePage( "#albums", { transition: "slide"} );
		}
		else {
			$.mobile.changePage( "#albums", { transition: "slide"} );
		}
		
	});
});

$(document).bind("pagechange", function(){
	// gets current page ID on page change
	currentpage = $('.ui-page-active').attr('id');
});