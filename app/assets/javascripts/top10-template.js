var movieMarkup =
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

var albumMarkup =
			'<article class="album col-50">								\
			  <figure>													\
			    <img src="${imageurl}" class="full">					\
			    <figcaption class="title">								\
			      ${title}												\
			    </figcaption>											\
			  </figure>													\
			  <ul class="details nobull">								\
			    <li class="col-60">										\
			      <h3>Artist</h3>										\
			      <p>${artist}</p>										\
			    </li>													\
			    <li class="col-40 col-last">							\
			      <h3>Release Date</h3>									\
			      <p>${releasedate}</p>									\
			    </li>													\
			  </ul>														\
			</article>';