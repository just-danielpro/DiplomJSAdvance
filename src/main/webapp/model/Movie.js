// function  Movie(movie)
// {
// 	this.id = movie.id;
// 	this.name = movie.name;
// 	this.description = movie.description;
// 	this.genre = movie.genre;
// 	this.listOfActors = movie.listOfActors;
// 	this.rating = movie.rating;
// }
function  Movie(id,name,description,genre,country,rating,year)
{
	this.id = id;
	this.name = name;
	this.description = description;
	this.genre = genre;
	this.country = country;
	this.rating = rating;
	this.year = year;
}



Movie.prototype = 
{
	
	setId : function(idValue){
		this.id = idValue;
	},

	getId : function(){
		return this.id;
	},

	setName : function(nameValue){
		this.name = nameValue;
	},

	getName : function(){
		return this.name;
	},

	setDescription : function(descriptionValue){
		this.description = descriptionValue;
	},

	getDescription : function()
	{
		return this.description;
	},

	setGenre : function(genreValue){
		this.genre = genreValue;
	},

	getGenre : function(){
		return this.genre;
	},

	setRating : function(ratingValue)
	{
		this.rating = ratingValue; 
	},

	getRating : function()
	{
		return this.rating;
	},

	setCountry : function(country){
		this.country = country;
	},
	getCountry : function(){
		return this.country;
	},

	setYear : function(year){
		this.year = year;
	},

	getYear : function(){
		return this.year;
	}






}