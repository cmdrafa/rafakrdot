$(document).ready(function() {
  
  var timerMins = 25;
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + timerMins*60*1000);
  var pause = false;
  
  var timerMinsBreak = 5;
  var currentTimeBreak = Date.parse(new Date());
  var deadlineBreak = new Date(currentTime + timerMinsBreak*60*1000);


  function getTimeRem(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    return {
      'total': t,
      'minutes': minutes,
      'seconds': seconds
        };
  };
  
  function breakTimerParser() {
    
    currentTimeBreak = Date.parse(new Date());
    deadlineBreak = new Date(currentTime + timerMinsBreak*60*1000);
    //console.log("Inside Break Parser");
    breakTimer(deadlineBreak);
    
  }
  
  function displayTime(endtime) {
    
      var timerinterval = setInterval(function(){
        var t = getTimeRem(endtime);
       // console.log(t.minutes + ":" + t.seconds);
       // console.log("total " + t.total);
        $("#timer").html(t.minutes + ":" + t.seconds);
        $("#pause").click(function(){
          pause = true;
          clearInterval(timerinterval);
        });
        
        $("#reset").click(function() {
          clearInterval(timerinterval);
          $("#timer").html(timerMins + ":00")
          $("#timerBreak").html(timerMinsBreak + ":00");
  });
        if(t.total<=0){
          clearInterval(timerinterval);
          var audio = new Audio("https://notificationsounds.com/soundfiles/b5b41fac0361d157d9673ecb926af5ae/file-sounds-727-good-morning.mp3");
          audio.play();
          breakTimerParser()
        }
      },1000);
    }
  
  function breakTimer(endtime) {
  //  console.log("Inside breakTimer");
    
    var timerintervalBreak = setInterval(function(){
      var t = getTimeRem(endtime);
      //console.log(t)
      $("#timerBreak").html(t.minutes + ":" + t.seconds);
      
      if(t.total<=0){
        clearInterval(timerintervalBreak);
        $("#timerBreak").html(timerMinsBreak + ":00")
        var audio = new Audio("https://notificationsounds.com/soundfiles/3dc4876f3f08201c7c76cb71fa1da439/file-and-a-happy-new-year-sms.mp3");
        audio.play();
        currentTime = Date.parse(new Date());
        deadline = new Date(currentTime + timerMins*60*1000);
        displayTime(deadline);
      }
    },1000); 
  }
  
  $("#start").click(function() {
    
    if(pause===false){
      currentTime = Date.parse(new Date());
      deadline = new Date(currentTime + timerMins*60*1000);
      console.log("DeadlineVar is: " + deadline);
      displayTime(deadline);
    }
    
    else{
      var pauseTimeStr = $("#timer").html();
      var pauseTimeArray = pauseTimeStr.split(":");
      var pauseTimeArrayNum = pauseTimeArray.map(Number);
      var pauseMins = pauseTimeArrayNum[0]*60
      var pauseTotal = (pauseMins + pauseTimeArrayNum[1])*1000;
      //console.log("Convertion: " + pauseTotal);
      currentTime = Date.parse(new Date());
      deadline = new Date(currentTime + pauseTotal)
      //console.log("DeadlineVar2 is: " + deadline);
      displayTime(deadline)
      pause = false;
    }
  })
  
  $("#minus").click(function() {
    if(timerMins > 5){
      timerMins -= 5;
      deadline = new Date(currentTime + timerMins*60*1000);
      $("#timer").html(timerMins + ":00")
    }
  });
  
  $("#plus").click(function() {
    timerMins += 5;
    deadline = new Date(currentTime + timerMins*60*1000);
    $("#timer").html(timerMins + ":00")
  });
  
  $("#minusBreak").click(function() {
    if(timerMinsBreak > 1){
      timerMinsBreak -= 1;
      deadlineBreak = new Date(currentTime + timerMinsBreak*60*1000);
      $("#timerBreak").html(timerMinsBreak + ":00");
    }
  })
  
  $("#plusBreak").click(function() {
    timerMinsBreak += 1;
    deadlineBreak = new Date(currentTime + timerMinsBreak*60*1000);
    $("#timerBreak").html(timerMinsBreak + ":00");
  })
  
  $("#reset").click(function() {
    timerMins = 25;
    timerMinsBreak = 5;
    $("#timer").html(timerMins + ":00")
    $("#timerBreak").html(timerMinsBreak + ":00");
  });
  
  
});