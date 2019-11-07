package main;

import java.awt.image.BufferedImage;

import javax.imageio.ImageIO;

import controller.MovieController;

public class Main {

	public static void main(String[] args) {
		ClassLoader loader = Main.class.getClassLoader();
		System.out.println(Main.class.getProtectionDomain().getCodeSource().getLocation().getPath());
		String path = Main.class.getProtectionDomain().getCodeSource().getLocation().getPath();
		String newPath = path.substring(0,path.indexOf("/target"));
		System.out.println(newPath);
	}

}
