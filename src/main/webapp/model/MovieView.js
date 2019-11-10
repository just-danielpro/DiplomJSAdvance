(function(){



var MovieView = {

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
		var i2 = document.createElement("i");
		i.classList.add("fas");
		i.classList.add("fa-redo-alt");
		i.classList.add("reload-button");
		i2.classList.add("far");
		i2.classList.add("fa-times-circle");
		i2.classList.add("delete-button");
		i.setAttribute("name",movie.id);
		i2.setAttribute("name",movie.id);
		div.appendChild(i);
		div.appendChild(i2);
		

		
		function closeModal(){
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			mod.style.display = "none";
			span.removeEventListener("click",closeModal);
			window.MovieEditView.clear(element);
		};
		function openModal(){
			
			window.MovieEditView.render(i.getAttribute("name"),element);
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			var buttonSend = document.querySelector(".edit-movie-button");
			mod.style.display = "block";
			span.addEventListener("click",closeModal);
		};
		i.addEventListener("click",openModal);
		i2.addEventListener("click",function(){
			var agreement = confirm("Are you sure, you want to delete the movie "+ window.MovieList.findMovieById(i2.getAttribute("name")).name,"");
			 agreement == true ? removeMovie(Number(i2.getAttribute("name")),errorMessage=>console.log(message),successMessage=>console.log(successMessage)):"";
			 agreement == true ? window.location.reload() : "";
		});
		bootsTrapCol.appendChild(div);
		element.append(bootsTrapCol);

		}else{

			var el = element.nextElementSibling;
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
	},



	renderCreateModal : function(element){
		if(element.children.length!=6){

		var bootsTrapCol = document.createElement("div");
		bootsTrapCol.classList.add("col-2");
		var div = document.createElement("div");
		div.classList.add("film-container")
		var createMovie = document.createElement("i");
		createMovie.classList.add("fas");
		createMovie.classList.add("fa-plus-circle");
		createMovie.id = "createMovie-button"

		function closeModal(){
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			mod.style.display = "none";
			span.removeEventListener("click",closeModal);
			window.MovieEditView.clear(element);
		};


		function openModal(){
			window.MovieCreateView.render(element);
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			var buttonSend = document.querySelector(".edit-movie-button");
			mod.style.display = "block";
			span.addEventListener("click",closeModal);
		}

		
		createMovie.addEventListener("click",openModal);
		div.appendChild(createMovie);
		createMovie.parentNode.style.border = "1px solid white";
		createMovie.parentNode.style.height = "256px";
		createMovie.parentNode.style.width = "160px";
		createMovie.parentNode.style.padding = "60px 0px 0px 30px";
		bootsTrapCol.appendChild(div);
		element.appendChild(bootsTrapCol);
		}else{
			var el = element.nextElementSibling;
			if((el)!=null)
			{
				this.renderCreateModal(el);
			}else
			{
				var newRow = document.createElement("div");
			newRow.classList.add("row");
			newRow.classList.add("film-showing");
			var filmContainer =  document.querySelector(".container.film-showing").append(newRow);
			this.renderCreateModal(newRow);
			}
			
		}
	}
}
window.MovieView = MovieView;
}());