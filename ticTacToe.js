$(document).ready(function(){
	var x = 'X',
		o = 'O',
		rows = 0,
		row1 = $('#row1'), cols=[];
	
	var counter = (function(e){
		var count =0;
		return function(e){
			count++;
			if(count %2 ==0){
				e.target.innerHTML = o;
			}else{
				e.target.innerHTML = x;
			}
			 var child =row1.children();
			 for
			 console.log(child)
			
			 if(count>9){
			 	alert('no more moves')
			 }
		}

	})();

	$('.container-fluid div').click(function(e){
		counter(e);		
	})

	

})