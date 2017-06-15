     
//  function checkDuplicate(){
//     var i =0;
//     var hints = document.querySelectorAll('#hintUL li'),
//       hintUL = document.getElementById('hintUL');
//     if(hints.length >1){
//         while(i <= hints.length){
//             var a = hints[i].innerHTML,
//                 b = hints[i+1].innerHTML;
//             if(a === b){
//                 hintUL.removeChild(hints[i+1]);
//             }
//             else if(a === 'no suggestion ' || b === 'no suggestion '){
//                 hintUL.innerHTML = "";
//             }
//             i++;
//         }
//     }
  
// }

// function clear() {
//      var txtHint = document.getElementById('txtHint'),
//      userInput = document.getElementById('userInput');
//     if(userInput.value.trim() === ""){
//         txtHint.innerHTML = "";
//     }
// }

//  function callback(res){
//     var arr =[],
//      autocomplete = document.getElementById('autocomplete'),
//      userInput = document.getElementById('userInput');
        
//     arr = res.split(',');
   
//     var ul = document.getElementById('hintUL');
//     for(var i=0; i<arr.length; i++){
//         var li = document.createElement('li');
//         ul.appendChild(li);
//         li.innerHTML = li.innerHTML + arr[i];
        

//         if(arr[i] !== 'no suggestion '){
//             autocomplete.value = arr[i];
//         }
//         else if( arr[i] === "no suggestion " || userInput.value.trim() === ""){
//             autocomplete.value ="";
//             clear();
//         }
//     }
   
// }

// function showHint(str, callback) {
//         if (str.length <3 || str === "") {
//             document.getElementById("txtHint").innerHTML = "";
//             return;
//         } else {
//             var xmlhttp = new XMLHttpRequest();
//             xmlhttp.onreadystatechange = function() {
//                 if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//                    // clear();
//                     callback(xmlhttp.responseText);
//                     checkDuplicate();
                   
//                     var suggestions = document.querySelectorAll('#txtHint ul li');
//                     if(suggestions.length > 5){
//                         txtHint.innerHTML = '';
//                 }
//             } 
//         };
//             xmlhttp.open("GET", "getusers.php?q=" + str, true);
//             xmlhttp.send();
//         }
// }


$(document).ready(function(){
    $('#getLoc').click(function(){
        $.get("http://ipinfo.io", function (response) {
            $("#userLoc").html( response.city + ", " + response.region);
        }, "jsonp"); 
    })

    $('#ttt').on('click',function(){
        $('.ajax-cont').hide();
        $('.ttt-cont').show();
        $('li#ajaxModule').removeClass('active');
        $('li#ttt').addClass('active');
    })

    $('.play-btn').click(function(){
        location.href= "http://localhost:8008/ajax/ticTacToe.html";
    })
})


