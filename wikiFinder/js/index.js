var searchInput = '';


function searchWiki () {
  $.ajax( {
    url: 'https://en.wikipedia.org/w/api.php?',
    jsonp: 'callback',
    datatype: 'jsonp',
    data: {
      action: 'query',
      list: 'search',
      srsearch: searchInput,
      srlimit: '10',
      format: 'json',
      origin : '*',
    },
    success: function(data) {
      constructor(data);
}
  });
};

function constructor(data){
  $('#result-box').html("");
  
  $.each(data.query.search, function(index, value) {
    
    var title = '';
    var description='';
    var resultFinal ='';
    title += "<div class='well'><a href='https://en.wikipedia.org/wiki/" + value.title + "'><h3 class='titleResult'>" + value.title + "</h3></a>";
    description += "<p class='description'>" + value.snippet + "</p>"
    resultFinal = title + description + "</div>"
    
    
    $('#result-box').append(resultFinal);
         
         });
}

$(document).ready(function() {
  $(".btn").on("click", function() {
   searchInput = $(".search-query").val();
    searchWiki();
  });
});