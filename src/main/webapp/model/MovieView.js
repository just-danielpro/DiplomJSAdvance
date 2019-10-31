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
		function closeModal(){
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			mod.style.display = "none";
			span.removeEventListener("click",closeModal);
			i.addEventListener("click",openModal);
			window.MovieEditView.clear(element);
		};
		function openModal(){
			console.log(i.getAttribute("name"));
			window.MovieEditView.render(i.getAttribute("name"),element);
			var mod = document.querySelector(".modal");
			var span = document.querySelector(".close");
			mod.style.display = "block";
			span.addEventListener("click",closeModal);
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