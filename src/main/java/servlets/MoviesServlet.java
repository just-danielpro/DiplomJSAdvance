package servlets;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Paths;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.google.gson.Gson;

import controller.MovieController;
import model.Movie;

@MultipartConfig
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
		
//		StringBuffer sb = new StringBuffer();
//	    String line = null;
//		request.setCharacterEncoding("UTF-8");
//	    BufferedReader reader = request.getReader();
//	    while ((line = reader.readLine()) != null)
//	        sb.append(line);
//	    Gson gson = new Gson();
//	    Movie movie = gson.fromJson(sb.toString(), Movie.class);
//	    System.out.println(movie);
//	    mc.updateMovie(movie);
		request.setCharacterEncoding("UTF-8");
		Part filePart = request.getPart("file");
		System.out.println("PROVERKA : " + filePart.getSubmittedFileName());
		String fileName = Paths.get(filePart.getSubmittedFileName()).getFileName().toString();
		String temp = MovieCreateServlet.class.getProtectionDomain().getCodeSource().getLocation().getPath();
		String path = temp.substring(0,temp.indexOf("/WEB-INF"));
		InputStream fileContent = filePart.getInputStream();
		System.out.println(fileName);
		if(filePart.getSubmittedFileName().length() > 1) 
		{
			System.out.println("YA ZDEC'");
			FileOutputStream fos = new FileOutputStream(path+"/images/"+fileName);
			int read = 0;
			byte[] bytes = new byte[1024];
			while((read= fileContent.read(bytes))!=-1) 
			{
				fos.write(bytes, 0, read);
			}
		}
		int id = Integer.parseInt(request.getParameter("movieId"));
		String name = request.getParameter("name");
		String description = request.getParameter("description");
		String genre = request.getParameter("genre");
		String country = request.getParameter("country");
		int rating = Integer.parseInt(request.getParameter("rating").toString());
		int year = Integer.parseInt(request.getParameter("year").toString());
		

		mc.updateMovie(name, description, genre, country, rating, year, fileName != null ?"images/"+fileName : "", id);
		response.sendRedirect(request.getContextPath());
		
	}

}
