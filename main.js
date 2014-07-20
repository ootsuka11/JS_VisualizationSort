// 管理用の配列
var array = []

// 指定した範囲のランダムな数を返す関数
function random(min,max){
	return Math.floor(Math.random()*((max+1)-min)+min);
}

// ランダムに配列を作成する(重複無し)
function make_array(n){
	for(var i = 1; i <= n; i++){
		
		// 空きが見つかるまで回り続ける
		for(;;){
			var a = random(0,n-1)
				//console.log(a)
			if(array[a] === undefined){
				array[a] = i
				break;
			}
		}
		console.log(array)
	}
}

//配列をもとにグラフを作成する
function make_bar(n){
	array = [];
	make_array(n);
	for(var i = 0; i < n; i++){
 		var date = {
 			id : "#"+array[i]+"bar",
 			size : (array[i] * n) + "px",
 			no: array[i]
 		}	
		var pos = []
 		console.log(date);
 		$("#tmpl_bar").tmpl(date).appendTo("#bars");
	}
		
	
}

$(function(){
	$("#start").button().click(function( event ) {make_bar(20)});
});
