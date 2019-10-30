(function(){


	var MovieListView = {

		movieList:" ",
		movieView: new MovieView(),

		renderById: function(id,element){
		var movie = this.movieList.find(item => item.getId()==id);
		this.movieView.render(movie,element);
	},

	renderAll: function(element){
		this.movieList.forEach(item =>{
			this.movieView.render(item,element);
		});
	},
	}

	window.MovieListView = MovieListView;

}());