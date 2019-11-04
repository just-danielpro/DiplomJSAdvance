package servlets;

import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import controller.MovieController;
import model.Movie;


public class MovieServletDeleteOrCreate extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private MovieController mc = new MovieController();
  
    public MovieServletDeleteOrCreate() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		StringBuffer sb = new StringBuffer();
		String line = null;
		request.setCharacterEncoding("UTF-8");
		BufferedReader  reader = request.getReader();
		while((line = reader.readLine()) != null) 
			sb.append(line);
		Gson json = new Gson();
		Movie movie = json.fromJson(sb.toString(), Movie.class);
		mc.deleteMovie(movie);
	}

}
