package testmain;

import com.google.gson.Gson;

import controller.MovieController;

public class Main {

	public static void  main(String[]args) 
	{
		MovieController mc = new MovieController ();
		String json = new Gson().toJson(mc.getAllMovies());
		System.out.println(json);
		
		mc
	}
}
