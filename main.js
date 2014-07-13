function make_bar(ID){
	var date = {id : ID}
	
	$("#tmpl_bar").tmpl(date).appendTo("#bars");
	
}