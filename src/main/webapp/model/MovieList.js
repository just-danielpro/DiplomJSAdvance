
(function(){
var MovieList = {

	movieList: " ",


	add:  function(movie)
	{
		if(this.movieList == undefined)
			this.movieList = [];
		this.movieList.push(movie);
	},

	findMovieById : function(id)
	{
		var movie =  this.movieList.find(item => item.id == id);
		// for(var i = 0; i < this.movieList.length; i++)
		// {
		// 	if(this.movieList[i].getId() == id)
		// 	{
		// 		movie = this.movieList[i];
		// 		break;
		// 	}
		// }

		return movie;
	},

	findMovieByName : function(name)
	{
		var movie = this.movieList.find(item => item.name.toUpperCase() == name.toUpperCase());;
		// for(var i = 0; i < this.movieList.length; i++)
		// {
		// 	if(this.movieList[i].getName().toUpperCase() == name.toUpperCase())
		// 	{
		// 		movie = this.movieList[i];
		// 		break;
		// 	}
		// }
		return movie;
	},

	

	deleteMovieById : function(id)
	{
		var movie = this.findMovieById(id);
		if(movie == null)
			return;
		this.movieList = this.movieList.splice(this.movieList.indexOf(movie)-1,1);
	},

	edit : function(id,data)
	{
		var movie = this.findMovieById(id);

		for(var atrib in movie)
		{
			movie[atrib] = data[atrib];
		}
	},

	sortByGenre:  function(genre)
	{
		if(this.movieList == undefined)
			return;
	
	var tempArr = this.movieList.concat();
	var sorted = false;
    while(sorted != true) {
        sorted = true;
        var temp = 0;
        for (var i = 0; i < tempArr.length-1; i++) {
        	
            if (tempArr[i].genre != genre && tempArr[i+1].genre == genre){
                temp = tempArr[i];
                tempArr[i] = tempArr[i+1];
                tempArr[i+1] = temp;
                sorted = false;
            }
        }
    }

    return tempArr;
	},

	getListOfMovies : function()
	{
		return this.movieList;
	},
}

window.MovieList = MovieList;
}());
