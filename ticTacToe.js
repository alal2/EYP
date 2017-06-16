$(document).ready(function(){
	var x = 'X',
	o = 'O',
	row1 = $('#row1 td div'), 
	row2 = $('#row2 td div'),
	row3= $('#row3 td div'),
	col1 = $('#table tr > :nth-child(1)'),
	col2 = $('#table tr > :nth-child(2)'),
	col3 =$('#table tr > :nth-child(3)'),
	a=[],
	b=[],
	leftElem1,
	leftElem2,
	leftElem3,
	td,
	rightElem1,
	rightElem2,
	rightElem3;

	function callback(value){
		if(value == 'X'){
			$('#turnInfo').html('Player 1 is winner');
		}else if(value === 'O'){
			$('#turnInfo').html('Player 2 is winner');
		}
	}

	function callDraw(){
		$('#turnInfo').html('Match Draw');
		disableFunc(callback);
	}

	var counter = (function(e){
		var count =0;
		return function(e){
			count++;
			if(count %2 ==0){
				$('#turnInfo').html('Player 1 turn...');
				e.target.innerHTML = o;
				$(e.target).css('pointer-events','none');
			}else{
				$('#turnInfo').html('Player 2 turn...');
				e.target.innerHTML = x;
				$(e.target).css('pointer-events','none');
			}
			 
			if(count>9){
			 	callDraw();
			}
		}
	})();
	
	function disableFunc(callback, value){
		$('.container-fluid div').css('pointer-events','none');
		callback(value);
	}

	function checkRow(e){
		if(row1.text() === 'XXX' || row1.text() === 'OOO'){
			  	row1.css('background', 'yellow');
			  	disableFunc(callback,e.target.innerHTML);
		  }
		  else if(row2.text() === 'XXX' || row2.text() === 'OOO'){
		  		row2.css('background', 'yellow');
		  		disableFunc(callback,e.target.innerHTML);
		  }
		  else if(row3.text() === 'XXX' || row3.text() === 'OOO'){
		  		row3.css('background', 'yellow');
		  		disableFunc(callback,e.target.innerHTML);
		  }
	}

	function checkCol(e){
		var col1Text = col1.text().replace(/\n\s+/g,'').trim(),
		  	  col2Text = col2.text().replace(/\n\s+/g,'').trim(),
		  	  col3Text = col3.text().replace(/\n\s+/g,'').trim()
 
		  if(col1Text === 'XXX' || col1Text === 'OOO'){
		  	col1.css('background', 'yellow');
		  	disableFunc(callback,e.target.innerHTML);
		  } else if(col2Text === 'XXX' || col2Text === 'OOO'){
		  	col2.css('background', 'yellow');
		  	disableFunc(callback,e.target.innerHTML);
		  } else if(col3Text === 'XXX' || col3Text === 'OOO'){
		  	col3.css('background', 'yellow');
		  	disableFunc(callback,e.target.innerHTML);
		  } 
	}

	function checkLeftDiag(e){
		$('#table tr').each(function(index){
	        td = $(this).find('td').filter(function(cindex){
	            return cindex == index;
	        });
	        a.push(td);
	        //leftDiagonalStr += ( td.text().replace(/\n\s/g,'').trim());
	    });
	   	leftElem1 = a[0].text().trim();
	   	leftElem2 = a[1].text().trim();
	   	leftElem3 = a[2].text().trim();

	   	for(var i=0;i< a.length ;i++){
	   		if((leftElem1 === 'X' && leftElem2 === 'X' && leftElem3 === 'X')||(leftElem1 === 'O' && leftElem2 === 'O' && leftElem3 === 'O')){
	   			a[i].css('background', 'yellow');
	   			disableFunc(callback,e.target.innerHTML);
	   		}
	   	}
	}

	function checkRightDiag(e){
		$('#table tr').each(function(index){
	        var tdCount = $(this).find('td').length;
	        var rindex = tdCount - 1 - index;
	        var td = $(this).find('td:eq('+rindex+')');
	        b.push(td);
	    });

	    rightElem1 = b[0].text().trim();
	   	rightElem2 = b[1].text().trim();
	   	rightElem3 = b[2].text().trim();

	   	for(var i=0;i< b.length ;i++){
	   		if((rightElem1 === 'X' && rightElem2 === 'X' && rightElem3 === 'X')||(rightElem1 === 'O' && rightElem2 === 'O' && rightElem3 === 'O')){
	   			b[i].css('background', 'yellow');
	   			disableFunc(callback,e.target.innerHTML);
	   		}
	   	}
	}

	$('.container-fluid div').click(function(e){
		counter(e);	
		checkRow(e);
		checkCol(e);
		checkLeftDiag(e)
		checkRightDiag(e);
		  
	})

})