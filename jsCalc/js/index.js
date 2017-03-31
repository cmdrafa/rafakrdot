$(document).ready(function() {
  var entry = '';
  var digitAcum = '';
  var result = '';
  var decCont = 0; //Decimal cont
  var displayVar = '';
  var operatorCont = 0; //Operator cont
  
  $("button").click(function() {
    entry = $(this).attr('value');
    digitAcum += entry;
    displayVar += entry
    console.log("Digit Acum on click "+ digitAcum);
    $("#value").html(displayVar);
    
    if(entry === 'CE' || entry === 'C') {
      entry = '';
      digitAcum = '';
      displayVar = '';
      result = 0;
      console.log("Cleaning " + digitAcum)
      decCont = 0;
      operatorCont = 0;
      $("#value").html('0');
    }
    
    if(entry === 'erase'){
      displayVar = digitAcum.slice(0, -6);
      digitAcum = digitAcum.slice(0, -6);
      $("#value").html(displayVar);
      if (displayVar === ''){
        $("#value").html('0')
      }
      
    }
    
    if(entry === '+' || entry === '/' || entry === '-' || entry === '*' ) {
      operatorCont += 1;
      if(operatorCont > 1) {
        digitAcum = digitAcum.slice(0, -1);
        displayVar = displayVar.slice(0, -1);
        console.log("Display on op " + displayVar)
      }
      else {
        $("#value").html(entry);
        entry = '';
        displayVar = '';
        decCont = 0;
      }
    }
    
    if(entry === '.') {
      decCont += 1;
      if(decCont > 1) {
        displayVar = displayVar.slice(0, -1);
        digitAcum = digitAcum.slice(0, -1);
        $("#value").html(displayVar);
      }
    }
    
    if (entry === '=') {
      if(digitAcum === '=') {
        $("#value").html(result)
        displayVar = '';
        digitAcum = '';
      }
        else if (digitAcum === result) {
          $("#value").html(digitAcum);
        }
      else {
        digitAcum = digitAcum.slice(0, -1);
        console.log(digitAcum);
        result = eval(digitAcum);
        $("#value").html(result);
        digitAcum = result;
        displayVar = result;
        decCont = 0;
        operatorCont = 0;
      }
    }
    });
  });