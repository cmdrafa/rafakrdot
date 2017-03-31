var apikey = "8fa54a30d2771f7dae9d138dab8eeb2b";
var units = 'metric';

function getWeather (){
 $.getJSON("http://ip-api.com/json/?callback=?",
           function(data){
   var lat = data.lat;
   var lon = data.lon;
   ajaxCall(lat, lon);
 }
);
  function ajaxCall(lat, lon) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&APPID=' + apikey +'&units=' + units,
    datatype: 'json',
    success: function(data) {
      constructor(data);
    }
  });  
}
}

function constructor(data){
  var weatherId = data.weather[0].id;
  $("#main-weather").text(data.weather[0].main);
  $("#city").text(data.name);
  $("#country").text(data.sys.country);
  $("#temp").text(data.main.temp);
  setIcon(weatherId);
}

function setIcon(weatherId){
  var now = new Date().getHours();
  var icon ='';
  if(now <= 17 && now >= 6) {
    icon = 'wi-owm-day-' + weatherId;
  }
  else {
    icon = 'wi-owm-night-' + weatherId;
  }
  $("i.shit").toggleClass(icon);    
}

$(document).ready(function() {
  getWeather();
  $(".imperial").on("click", function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    units = "imperial";
    getWeather();
  });
  $(".metric").on("click", function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    units = "metric";
    getWeather();
  });
});
  
$(".jumbotron").css("background-color", function() {
  var now = new Date().getHours();
  if(now <= 17 && now >= 5) {  
    return '#2196F3';
  }
  else {
    return '#37474F';
  }
});