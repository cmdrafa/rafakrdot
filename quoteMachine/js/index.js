var actualQuote = '', actualAuthor = '';

function getQuote() {
$.ajax({
    headers: {
      "X-Mashape-Key": "RF1QodJR5lmshMLZVlANnMvS66tQp1TTOEDjsnK1cgtp2Sw6nt",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    success: function(response) {
      var r = JSON.parse(response);
      actualQuote = r.quote;
      actualAuthor = r.author;
      $("#quote-thing").text(r.quote);
      $("#author").html(r.author);
      $("#twitter-share").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + actualQuote + '" ' + actualAuthor));
    }
});
      };
  
$(document).ready(function() {
  getQuote();
  $("#get-quote").on("click", getQuote);
  $("#get-quote-button").on("click", getQuote);
});