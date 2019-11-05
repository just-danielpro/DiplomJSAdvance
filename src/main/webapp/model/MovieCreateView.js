(function(){

	
	
	var MovieCreateView = {
			render : function(element){	
			var modal = document.createElement("div");
			modal.classList.add("modal"); // первый div

			var modalContent = document.createElement("div");
			modalContent.classList.add("modal-content"); // второй div

			var span = document.createElement("span"); // кнопка закрытия окна
			span.classList.add("close");

			var i = document.createElement("i");
			i.classList.add("fas");
			i.classList.add("fa-times");
			span.appendChild(i);
			


			var container = document.createElement("div"); // контейнер
			container.classList.add("container");

			var row1 = document.createElement("div"); // ряд для изменений
			row1.classList.add("row");
			row1.classList.add("inputs-modal");

			var colFilmName = document.createElement("div");
			colFilmName.classList.add("col-2");
			colFilmName.textContent = "Название фильма";
			var colFilmNameInput = document.createElement("div");
			colFilmNameInput.classList.add("col-2");
			var inputFilmName = document.createElement("input");
			inputFilmName.classList.add("textinput");
			inputFilmName.setAttribute("type","text");

			colFilmNameInput.appendChild(inputFilmName);
			row1.appendChild(colFilmName);
			row1.appendChild(colFilmNameInput);

			var row2 = document.createElement("div"); // ряд для изменений
			row2.classList.add("row");
			row2.classList.add("inputs-modal");

			var colFilmDesc = document.createElement("div");
			colFilmDesc.classList.add("col-2");
			colFilmDesc.textContent = "Описание фильма";
			var colFilmDescInput = document.createElement("div");
			colFilmDescInput.classList.add("col-2");
			var inputFilmDesc = document.createElement("textarea");
			inputFilmDesc.classList.add("textinput");
			inputFilmDesc.id = "textArea";

			colFilmDescInput.appendChild(inputFilmDesc);
			row2.appendChild(colFilmDesc);
			row2.appendChild(colFilmDescInput);

			var row3 = document.createElement("div"); // ряд для изменений
			row3.classList.add("row");
			row3.classList.add("inputs-modal");

			var colFilmGenre = document.createElement("div");
			colFilmGenre.classList.add("col-2");
			colFilmGenre.textContent = "Жанр фильма";
			var colFilmGenrecInput = document.createElement("div");
			colFilmGenrecInput.classList.add("col-2");
			var inputFilmGenre = document.createElement("input");
			inputFilmGenre.classList.add("textinput")
			inputFilmGenre.setAttribute("type","text");
			

			colFilmGenrecInput.appendChild(inputFilmGenre);
			row3.appendChild(colFilmGenre);
			row3.appendChild(colFilmGenrecInput);

			var row4 = document.createElement("div"); // ряд для изменений
			row4.classList.add("row");
			row4.classList.add("inputs-modal");

			var colFilmCountry = document.createElement("div");
			colFilmCountry.classList.add("col-2");
			colFilmCountry.textContent = "Страна фильма";
			var colFilmCountrycInput = document.createElement("div");
			colFilmCountrycInput.classList.add("col-2");
			var inputFilmCountry = document.createElement("input");
			inputFilmCountry.classList.add("textinput");
			inputFilmCountry.setAttribute("type","text");
			

			colFilmCountrycInput.appendChild(inputFilmCountry);
			row4.appendChild(colFilmCountry);
			row4.appendChild(colFilmCountrycInput);

			var row5 = document.createElement("div"); // ряд для изменений
			row5.classList.add("row");
			row5.classList.add("inputs-modal");

			var colFilmRating = document.createElement("div");
			colFilmRating.classList.add("col-2");
			colFilmRating.textContent = "Рейтинг фильма";
			var colFilmRatingInput = document.createElement("div");
			colFilmRatingInput.classList.add("col-2");
			var inputFilmRating = document.createElement("input");
			inputFilmRating.classList.add("textinput");
			inputFilmRating.setAttribute("type","text");
			

			colFilmRatingInput.appendChild(inputFilmRating);
			row5.appendChild(colFilmRating);
			row5.appendChild(colFilmRatingInput);

			var row6 = document.createElement("div"); // ряд для изменений
			row6.classList.add("row");
			row6.classList.add("inputs-modal");

			var colFilmYear = document.createElement("div");
			colFilmYear.classList.add("col-2");
			colFilmYear.textContent = "Год фильма";
			var colFilmYearInput = document.createElement("div");
			colFilmYearInput.classList.add("col-2");
			var inputFilmYear = document.createElement("input");
			inputFilmYear.classList.add("textinput");
			inputFilmYear.setAttribute("type","text");
			

			colFilmYearInput.appendChild(inputFilmYear);
			row6.appendChild(colFilmYear);
			row6.appendChild(colFilmYearInput);

			var row7 = document.createElement("div"); // ряд для изменений
			row7.classList.add("row");
			row7.classList.add("inputs-modal");

			var colFilmButton = document.createElement("div");
			colFilmButton.classList.add("col-2");
			var button = document.createElement("i");
			button.classList.add("far");
			button.classList.add("fa-share-square");
			button.classList.add("edit-movie-button");

			colFilmButton.appendChild(button);

			row7.appendChild(colFilmButton);

			var row8 = document.createElement("div"); // ряд для изменений
			row8.classList.add("row");
			row8.classList.add("inputs-modal");

			var colFilmImage = document.createElement("div");
			colFilmImage.classList.add("col-2");
			colFilmImage.textContent = "Картинка фильма";
			var colFilmImageInput = document.createElement("div");
			colFilmImageInput.classList.add("col-2");
			var inputFilmImage = document.createElement("input");
			inputFilmImage.classList.add("textinput");
			inputFilmImage.setAttribute("type","file");

			colFilmImageInput.appendChild(inputFilmImage);
			row8.appendChild(colFilmImage);
			row8.appendChild(colFilmImageInput);
			
			container.appendChild(row1);
			container.appendChild(row2);
			container.appendChild(row3);
			container.appendChild(row4);
			container.appendChild(row5);
			container.appendChild(row6);
			container.appendChild(row8);
			container.appendChild(row7);
			modalContent.appendChild(span);
			modalContent.appendChild(container);
			modal.appendChild(modalContent);
			element.appendChild(modal);
			
	},
	clear : function(element){
		var modal = document.querySelector(".modal");
		element.removeChild(modal);
	},
	}

window.MovieCreateView = MovieCreateView;
}());