function MovieDetailsView(){

}

MovieDetailsView.prototype = {

	render: function(movie,element){
		var containerFS = document.createElement("div");
		containerFS.classList.add("container");
		containerFS.classList.add("film-showing");
		var row = document.createElement("div");
		row.classList.add("row");
		var divNameFilm = document.createElement("div");
		divNameFilm.classList.add("col-1");
		var filmName = document.createElement("h1");
		filmName.textContent = movie.getName();
		divNameFilm.appendChild(filmName);
		row.appendChild(divNameFilm);
		containerFS.appendChild(row);



		var rowFS = document.createElement("div");
		rowFS.classList.add("row");
		rowFS.classList.add("film-showing");
		var colFilmImage = document.createElement("div");
		colFilmImage.classList.add("col-5");
		var img = document.createElement("img");
		img.id = "detailPage-img";
		img.setAttribute("src","../images/"+movie.getId()+".jpg");
		colFilmImage.appendChild(img);
		rowFS.appendChild(colFilmImage);
		var colFilmInfo = document.createElement("div");
		colFilmInfo.classList.add("col-7");
		var rowFilmInfo = document.createElement("div");
		rowFilmInfo.classList.add("row");
		var bootsTrapDiv1 = document.createElement("div");
		var bootsTrapDiv2 = document.createElement("div");
		var bootsTrapDiv3 = document.createElement("div");
		var bootsTrapDiv4 = document.createElement("div");
		bootsTrapDiv1.classList.add("col-3");
		bootsTrapDiv2.classList.add("col-3");
		bootsTrapDiv3.classList.add("col-3");
		bootsTrapDiv4.classList.add("col-3");
		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var p3 = document.createElement("p");
		var p4 = document.createElement("p");
		p1.textContent = movie.getRating();
		bootsTrapDiv1.appendChild(p1);
		p2.textContent = movie.getYear();
		bootsTrapDiv2.appendChild(p2);
		p3.textContent = movie.getGenre();
		bootsTrapDiv3.appendChild(p3);
		p4.textContent = movie.getCountry();
		bootsTrapDiv4.appendChild(p4);

		var filmDesc = document.createElement("p");
		filmDesc.id = "text-description";
		filmDesc.textContent = movie.getDescription();
		
		rowFilmInfo.appendChild(bootsTrapDiv1);
		rowFilmInfo.appendChild(bootsTrapDiv3);
		rowFilmInfo.appendChild(bootsTrapDiv3);
		rowFilmInfo.appendChild(bootsTrapDiv4);
		colFilmInfo.appendChild(rowFilmInfo);
		colFilmInfo.appendChild(filmDesc);
		rowFS.appendChild(colFilmInfo)
		containerFS.appendChild(rowFS);
		element.appendChild(containerFS);

	}
}

