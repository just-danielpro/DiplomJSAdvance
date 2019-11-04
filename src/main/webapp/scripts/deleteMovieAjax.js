function removeMovie(id,errorCallBack, successCallBack){
	$.ajax({
		url: "/DiplomJSAdvance/MovieServletDeleteOrCreate",
		method: "POST",
		contentType: "application/json",
		data: JSON.stringify(window.MovieList.findMovieById(id)),
		error : function(errorMessage){
			errorCallBack(errorMessage);
		},

		success: function(successMessage){
			successCallBack(successMessage);
		},
		async:false,

	});
}