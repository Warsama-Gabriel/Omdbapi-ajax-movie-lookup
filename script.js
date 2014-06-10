
$(document).ready(function(){
 
  $('#movieSearch').submit(function(e){
    e.preventDefault();
    var userInput = $('#searchTerm').val();

    var request = $.ajax({
      url: "http://www.omdbapi.com/",
      async: true,
      type: "get",
      data: { s: userInput },
      dataType: "json"
    });

    request.done(function(results){
      $.each(results["Search"], function(index, movie){
        $('#results').append("<li data-imdbid = " + movie['imdbID'] + ">" + movie["Title"] + "</li> ");  
      
      });
    });

    var details = $('#results').delegate('li', 'click', function(f){
      f.preventDefault();
      var inner = $(f.target).data("imdbid");
      $(this).toggle();
      
      var poster = $.ajax({
        url: "http://www.omdbapi.com/",
        async: true,
        type: "get",
        data: { i: inner },
        dataType: "json" 
      });

      poster.done(function(data){
        if (data["Poster"] == "N/A"){
          $('#movieDetails').append("<p>No picture available</p>");
        }
        else {
        $('#movieDetails').append("<img src='" + data["Poster"] + "'</img>");
        }
      });
    });
}); 


});