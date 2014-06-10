
$(document).ready(function(){
 
  $('#movieSearch').submit(function(e){

    e.preventDefault();
    
    var userInput = $('#searchTerm').val();

    var request = $.ajax({
      url: "http://www.omdbapi.com/",
      type: "get",
      data: { : userInput },
      dataType: "json"
    });

    request.done(function(results){
      console.log(results);
      $.each(results["Search"], function(index, movie){
        $('#results').append("<li>" + movie["Title"] + "</li> ");  
      
      });
    });
}); 


});