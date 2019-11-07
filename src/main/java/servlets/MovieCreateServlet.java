package servlets;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;

import javax.imageio.ImageIO;
import javax.imageio.ImageWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import controller.MovieController;
import main.Main;

/**
 * Servlet implementation class MovieCreateServlet
 */
@WebServlet("/upload")
@MultipartConfig
public class MovieCreateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       private MovieController mc = new MovieController();
    
    public MovieCreateServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		Part filePart = request.getPart("file");
		String fileName = Paths.get(filePart.getSubmittedFileName()).getFileName().toString();
		String temp = MovieCreateServlet.class.getProtectionDomain().getCodeSource().getLocation().getPath();
		String path = temp.substring(0,temp.indexOf("/WEB-INF"));
		InputStream fileContent = filePart.getInputStream();
		FileOutputStream fos = new FileOutputStream(path+"/images/"+fileName);
		String name = request.getParameter("name");
		String description = request.getParameter("description");
		String genre = request.getParameter("genre");
		String country = request.getParameter("country");
		int rating = Integer.parseInt(request.getParameter("rating").toString());
		int year = Integer.parseInt(request.getParameter("year").toString());
		int read = 0;
		byte[] bytes = new byte[1024];
		while((read= fileContent.read(bytes))!=-1) 
		{
			fos.write(bytes, 0, read);
		}
		
		mc.createMovie(name, description, genre, country, rating, year, "images/"+fileName);
		response.sendRedirect(request.getContextPath());
		
		
		
	}

}
