
function sendAjaxData(data,callback){
		$.ajax({
			url: "/DiplomJSAdvance/MoviesServlet",
			method: "POST",
			data: JSON.stringify(data),
			contentType: "application/json",
			error: function(message){
				console.log("Error with method most");
			},

			success: function(){
				callback();	
			}
		})

}