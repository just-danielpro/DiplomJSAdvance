(function(){


	var MovieListView = {

		movieList:" ",

		renderById: function(id,element){
		var movie = this.movieList.find(item => item.getId()==id);
		window.MovieView.render(movie,element);
	},

	renderAll: function(element){
		this.movieList.forEach(item =>{
			window.MovieView.render(item,element);
			window.MovieView.renderCreateModal(element);
		});

	},
	}

	window.MovieListView = MovieListView;

}());