var dataConfig;
$.ajax({
			url: "/DiplomJSAdvance/MoviesServlet",
			method: "GET",
			data: "text/html",
			error: function(message){
				console.log(message);
			},

			success: function(data){
				dataConfig = data;
			},

			async:false
		});

function getDataAjax()
{
	return dataConfig;
}