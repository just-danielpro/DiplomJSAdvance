package testmain;

import com.google.gson.Gson;

import controller.MovieController;
import model.Movie;

public class Main {

	public static void  main(String[]args) 
	{
		MovieController mc = new MovieController ();
		String json = new Gson().toJson(mc.getAllMovies());
	//	System.out.println(json);
		Movie movie = new Movie(1,"Кобейн чёртов монтаж","бла бла","Документальный","США",5,2018,"images/1.jpg");
		mc.updateMovie(movie);
		System.out.println(mc.getAllMovies());
		
	}
}
