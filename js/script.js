// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var global_gif = "nothing";

$("#search-button").click(function(){
    // Get Value
    var API = "https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC";
    
    var search = $("#search-term").val();
    
    API = API + "&q=" + search;
    
    // GET From API
    if (search != ""){
        $.ajax({
            url: API,
            method: "GET",
            success: function(response){
                var random = Math.floor(Math.random() * Math.floor(response.data.length));
                var gif = response.data[random].images.original.url;
                
                // Display
                $(".text-center").empty();
                $(".text-center").append("<img src='"+gif+"'>");
                global_gif = gif;
            }
        });
    } else {
        $(".text-center").empty();
        $(".text-center").append("<h1>Oh look. Nothing.</h1>");
    }
});

$("#mailto").click(function(){
    window.location.href = "mailto:'"+$("#email").val()+"'?subject=Get Memed&body="+global_gif+"";
});

$(".text-center").click(function(){
    $(".modal").css("display", "block");
    $("#modal-image").html("<img src='"+ global_gif +"'>");
});

$(".close").click(function(){
    $(".modal").css("display", "none"); 
});