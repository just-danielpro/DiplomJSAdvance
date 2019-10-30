package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.google.gson.Gson;

import controller.MovieController;


public class MoviesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public MoviesServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		MovieController mc = new MovieController();
		String json = new Gson().toJson(mc.getAllMovies());
		System.out.println(json);
		response.setCharacterEncoding("UTF-8"); 
		 response.setContentType("application/json");
		PrintWriter out = response.getWriter();
        out.write(json);
        out.flush();   
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
	}

}
