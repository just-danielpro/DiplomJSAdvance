// function  Movie(movie)
// {
// 	this.id = movie.id;
// 	this.name = movie.name;
// 	this.description = movie.description;
// 	this.genre = movie.genre;
// 	this.listOfActors = movie.listOfActors;
// 	this.rating = movie.rating;
// }
function  Movie()
{
	this.id = undefined;
	this.name= undefined; 
	this.description= undefined;
	this.genre= undefined;
	this.country= undefined;
	this.rating= undefined; 
	this.year= undefined;
	this.imageSource = undefined;
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
	},

	setImageSource : function(source){
		this.imageSource = source;
	},

	getImageSource : function(){
		return this.imageSource;
	}






}