var currency = 0;

function dispenser(){
    var item = prompt("Please enter item code:", "");
    if(item != null){
      if(item == "A1"){
        if(currency >= 1){
          document.getElementById("test").innerHTML = "Snickers Dispensed";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 1);
          currency = currency - 1;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
         }
      }
      if(item == "A2"){
        if(currency >= 1.50){
          document.getElementById("test").innerHTML = "Skittles Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 1.50);
          currency = currency - 1.50;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
          }
      }
      if(item == "A3"){
        if(currency >= 1.50){
          document.getElementById("test").innerHTML = "M&M's Dispensed";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 1.50);
          currency = currency - 1.50;
        }
        else{
            document.getElementById("test").innerHTML = "Nothing Dispensed";
            document.getElementById("test3").innerHTML = "You do not have enough money";
           }
      }
      if(item == "B1"){
        if(currency >= 2){
          document.getElementById("test").innerHTML = "Cheetos Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 2);
          currency = currency - 2;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
          }
      }
      if(item == "B2"){
        if(currency >= 2){
          document.getElementById("test").innerHTML = "Doritos Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 2);
          currency = currency - 2;
          }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
          }
      }
      if(item == "B3"){
        if(currency >= 1.75){
          document.getElementById("test").innerHTML = "Lay's Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 1.75);
          currency = currency - 1.75;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
          }
      }
      if(item == "C1"){
        if(currency >= 1.75){
          document.getElementById("test").innerHTML = "Ruffles Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 1.75);
          currency = currency - 1.75;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
          }
      }
      if(item == "C2"){
        if(currency >= 1.50){
          document.getElementById("test").innerHTML = "Funyuns Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 1.50);
          currency = currency - 1.50;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
         }
      }
      if(item == "C3"){
        if(currency >= 3){
          document.getElementById("test").innerHTML = "Jerkey Dispensed.";
          document.getElementById("test2").innerHTML = "Your balance is $" + (currency - 3);
          currency = currency - 3;
        }
        else{
          document.getElementById("test").innerHTML = "Nothing Dispensed";
          document.getElementById("test3").innerHTML = "You do not have enough money";
         }
      }
    }
  }
function add25Cents(){
  document.getElementById("test2").innerHTML = "Your balance is $" + (currency + .25);
  currency += .25;
}
function addOne(){
  document.getElementById("test2").innerHTML = "Your balance is $" + (currency + 1);
  currency += 1;
}
