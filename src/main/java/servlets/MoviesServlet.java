package servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.google.gson.Gson;

import controller.MovieController;
import model.Movie;


public class MoviesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
      private MovieController mc = new MovieController();
   
    public MoviesServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String json = new Gson().toJson(mc.getAllMovies());
		response.setCharacterEncoding("UTF-8"); 
		 response.setContentType("application/json");
		PrintWriter out = response.getWriter();
        out.write(json);
        out.flush();   
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		StringBuffer sb = new StringBuffer();
	    String line = null;
		request.setCharacterEncoding("UTF-8");
	    BufferedReader reader = request.getReader();
	    while ((line = reader.readLine()) != null)
	        sb.append(line);
	    Gson gson = new Gson();
	    Movie movie = gson.fromJson(sb.toString(), Movie.class);
	    System.out.println(movie);
	    mc.updateMovie(movie);
		
	}

}
