function filterMovie()
{
	var inputSearch = document.querySelector("#myInput");
	var filter = inputSearch.value.toUpperCase();
	var searchResult = document.querySelectorAll(".film-container");
	for(var i = 0; i < searchResult.length; i++)
	{
		if(searchResult[i].querySelector(".film-name").textContent.toUpperCase().indexOf(filter) > -1)
		{
			searchResult[i].parentNode.style.display = "";
			//searchResult[i].style.display = "";
		}else
			searchResult[i].parentNode.style.display = "none";		
			// searchResult[i].style.display = "none";
	}

}


