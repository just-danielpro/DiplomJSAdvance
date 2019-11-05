
function sendAjaxData(URL,HTTP,data,callback){
		$.ajax({
			url: URL,
			method: HTTP,
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