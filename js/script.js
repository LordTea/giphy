// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var API = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){
    // Get Value
    var search = $("#search-term").val();
    var giflist = [];
    
    // GET From API
    $.ajax({
        url: API,
        method: "GET",
        success: function(response){
            for (var i = 0; i < response["data"].length; i++){
                //if ((response.data[i].slug).includes("dog")){
                    giflist.push(response.data[0].images.original.url);
                //}
            }
        }
    });
    
    // Display
    $(".text-center").empty();
    $(".text-center").append("<img src='"+giflist[0]+"'>");
});

