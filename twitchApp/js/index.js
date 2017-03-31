var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function userFilter() {
  $("#users").html('');
for (var i = 0; i < streamers.length; i++) {
        twitchData();
};

function twitchData () {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + streamers[i],
    type: 'GET',
    jsonp: 'callback',
    datatype: 'jsonp',
    data: {
      format: 'json',
    },
    headers: {
      'Client-ID': '5fuvkuvgiko6194haii0iuoik3zjom'
    },
    success: function(data) {

      constructor(data);  
      }     
});
};
};

function constructor(data){
  var playingNow = '';
  var name = '';
  var channelUrl = '';
  var thumbnail = '';
  name = data._links.self.substr(37);
  channelUrl = 'https://www.twitch.tv/' + name;
  if(data.stream === null) {
    playingNow = "offline";
    thumbnail = 'https://s-media-cache-ak0.pinimg.com/736x/69/7b/39/697b399ca80d1c688f7e517468e619c0.jpg'
  }
  else {
    playingNow = data.stream.game;
    thumbnail = data.stream.preview.medium;
  }
var thumbnailHtml = "<div class='card text-center userlist' style='width: 20rem'> <img class='card-img-top thumbnail' height='180' width='318' src='" + thumbnail +"' alt='Card image cap'>";
var nameHtml = "<div class='card-block'><h4 class='card-title'>" + name + "</h4>";
var playingNowHtml = "<p class='card-text'>" + playingNow + "</p>"
var channelUrl = "<a href='"+ channelUrl + "' class='btn btn-primary' target=_blank>View live streaming</div>";
  var constructorResult = thumbnailHtml + nameHtml + playingNowHtml + channelUrl;
  $('#users').append(constructorResult);
}

userFilter();

$(document).ready(function() {
  $("#buttonadd").on("click", function() {
   streamers.push($(".useradd").val());
    userFilter();
  });
  $("#buttonclear").on("click", function() {
    streamers = [];
    userFilter();
  });
});


//Alternative view
 /*var nameHtml = "<div class='card text-center userlist' style='width: 20rem'> <h2> User: " + name + "</h2> ";

  var playingNowHtml = "<p> Playing: "+ playingNow +"</p>";
  var thumbnailHtml = "<p><img class='img-fluid img-thumbnail' src='" + thumbnail + "' height='151' width='270'></p>"
  var channelUrl = "<p><a href='" + channelUrl +"' target=_blank><button class='btn btn-secondary'>View live streaming »</button></div>";*/