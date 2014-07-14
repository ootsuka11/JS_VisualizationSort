function make_bar(){
	for(var i = 1; i <= 20; i++){
 		var date = {id : "#"+i+"bar",size : (i * 20) + "px", no: i}	
 		console.log(date);
 		$("#tmpl_bar").tmpl(date).appendTo("#bars");
	}
		
	
}
