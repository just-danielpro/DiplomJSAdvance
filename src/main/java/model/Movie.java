package model;

import java.util.List;

public class Movie {

	private int id;
	private String name;
	private String description;
	private String genre;
	private String country;
	private int rating;
	private int year;
	private String imageSource;
	
	
	public Movie(int id, String name, String description, String genre, String country,int rating, int year,String imageSource) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.genre = genre;
		this.country = country;
		this.rating = rating;
		this.year = year;
		this.imageSource = imageSource;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}



	public int getRating() {
		return rating;
	}


	public void setRating(int rating) {
		this.rating = rating;
	}


	public int getYear() {
		return year;
	}


	public void setYear(int year) {
		this.year = year;
	}


	public String getImageSource() {
		return imageSource;
	}


	public void setImageSource(String imageSource) {
		this.imageSource = imageSource;
	}
	



	
	
	
	
}
