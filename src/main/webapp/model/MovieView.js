function MovieView()
{

}

MovieView.prototype = {

	render : function(movie,element)
	{
		
		if(element==null)
			return;
		if(element.children.length!=6){
			console.log(element.children.length);
		var bootsTrapCol = document.createElement("div");
		bootsTrapCol.classList.add("col-2");
		var div = document.createElement("div");
		div.classList.add("film-container")
		var img = document.createElement("img");
		img.setAttribute("src",movie.imageSource);
		
		var a = document.createElement("a");
		a.setAttribute("href","pages/detailPage.html?id="+movie.id);
		var span = document.createElement("span");
		span.textContent=movie.name;
		span.classList.add("film-name");
		a.append(span);
		div.appendChild(img);
		div.appendChild(a);
		var i = document.createElement("i");
		i.classList.add("fas");
		i.classList.add("fa-redo-alt");
		i.classList.add("reload-button");
		i.setAttribute("name",movie.id);
		// var modal = document.querySelector(".modal");
		// var span = document.querySelector(".close")
		// function closeModal(){
		// 	modal.style.display = "none";
		// 	span.removeEventListener("click",closeModal);
		// };
		// i.addEventListener("click",function(){
		// 	modal.style.display = "block";
		// 	span.addEventListener("click",closeModal);
		// });
		div.appendChild(i);
		var containerEvent = document.querySelector(".container.film-showing");

		function sendData(){
			var movie = window.MovieList.findMovieById(i.getAttribute("name"));
			if(movie == null || movie == undefined){
				console.log("Movie is undefined");
				return;
			}
			var arr = document.querySelectorAll(".textinput");
			var filmName = arr[0].getAttribute("value");
			var filmDesc = arr[1].textContent;
			var filmGenre = arr[2].getAttribute("value");
			var filmCountry = arr[3].getAttribute("value");
			var filmRating = arr[4].getAttribute("value");
			var filmYear = arr[5].getAttribute("value");

			if(filmName != null){
				if(filmName.length > 0)
					movie.name = filmName;
				if(filmDesc.length > 0)
					movie.description = filmDesc;
				if(filmGenre.length > 0)
					movie.genre = filmGenre;
				if(filmCountry.length > 0)
					movie.country = filmCountry;
				if(filmRating.length > 0)
					movie.rating = filmRating;
				if(filmYear.length > 0)
					movie.year = filmYear;
			}
			sendAjaxData(movie,function(){alert("The data was update successful")});


		}
		function closeModal(){
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			mod.style.display = "none";
			span.removeEventListener("click",closeModal);
			i.addEventListener("click",openModal);
			window.MovieEditView.clear(element);
		};
		function openModal(){
			
			window.MovieEditView.render(i.getAttribute("name"),element);
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			var buttonSend = document.querySelector(".edit-movie-button");
			mod.style.display = "block";
			span.addEventListener("click",closeModal);
			buttonSend.addEventListener("click",sendData);
			i.removeEventListener("click",openModal);
		}
		i.addEventListener("click",openModal);
		bootsTrapCol.appendChild(div);
		element.append(bootsTrapCol);

		}else{

			var el = element.nextElementSibling
			if((el)!=null)
			{
				this.render(movie,el);
			}else
			{
				var newRow = document.createElement("div");
			newRow.classList.add("row");
			newRow.classList.add("film-showing");
			var filmContainer =  document.querySelector(".container.film-showing").append(newRow);
			this.render(movie,newRow);
			}
			
		}
		
	}
}