var tmdbkey   = '262ba0731667a5ccd2afa4cf5a34e20f';
var lastfmkey = '9c5d9862b1419381c2fa9257bd250192';

console.log(tmdbkey);
$(document).ready(function(){
	// $('#list').click(function(){
	// 	// $.getJSON('http://api.themoviedb.org/3/movie/11/images?api_key=262ba0731667a5ccd2afa4cf5a34e20f&callback=1', function(data) {
	//  //  		console.log(data)
	// 	// });
	// 	// return false;
	// });

	// $.getJSON("http://api.themoviedb.org/3/movie/11/images?callback=",
	//   {
	//     api_key: "262ba0731667a5ccd2afa4cf5a34e20f"
	//   },
	//   function(data) {
	//     console.log(data);
	//   });
	$('.details').hide();
	$('figure').click(function(e){
		$(this).toggleClass('expanded-details');
		$(this).find('+ .details').slideToggle();
	});
});