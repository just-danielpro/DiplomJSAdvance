package controller;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import model.Actor;
import model.Movie;

public class MovieController {

	private Connection conn;
	private Statement st;
	
	
	public MovieController() 
	{
		System.out.println("Connection.....");
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			this.conn = DriverManager.getConnection("jdbc:mysql://localhost/diplomjsadvanced?characterEncoding=UTF-8&user=root&password=");
			st = conn.createStatement();
			System.out.println("Connection obtained");
		} catch (ClassNotFoundException | InstantiationException | IllegalAccessException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void updateMovie(Movie movie) 
	{
		String UPDATE_MOVIE = "UPDATE movies SET name='"+movie.getName()+"',description='"+movie.getDescription()+"',genre='"+movie.getGenre()+
				"',country='"+movie.getCountry()+"',rating="+movie.getRating()+",year="+movie.getYear()+" WHERE id="+movie.getId();
		try {
			st.execute(UPDATE_MOVIE);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public ArrayList<Movie>  getAllMovies()
	{
		List<Movie> list = new ArrayList<>();
		try {
			ResultSet rs = st.executeQuery("SELECT * FROM movies");
			while(rs.next()) 
			{
				list.add(new Movie(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4)
						,rs.getString(5),Integer.parseInt(rs.getString(6)),Integer.parseInt(rs.getString(7)),rs.getString(8)));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return (ArrayList<Movie>) list;
	}
	
	public void createMovie(String name,String description,String genre,String country,int rating,int year,String imgSource) 
	{
		String CREATE_MOVIE = "INSERT INTO `movies`(`name`,`description`,genre,country,rating,`year`,`img-source`) VALUES('"+name+"',"
	+"'"+description+"',"+"'"+genre+"','"+country+"',"+rating+","+year+",'"+imgSource+"');";
		
		try {
			st.execute(CREATE_MOVIE);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void deleteMovie(Movie movie) 
	{
		String DELETE_USER = "DELETE FROM movies WHERE id = "+movie.getId();
		String MAX_ID = "SELECT MAX(id) FROM movies";
		try {
			st.execute(DELETE_USER);
			ResultSet rs = st.executeQuery(MAX_ID);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
}
