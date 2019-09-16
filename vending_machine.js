var currency = 0;
var inputCode = "";

/* Reads inputted code and dispenses selected item */
function dispenser(){
  if(inputCode != null){
    if(inputCode == "A1"){
      if(currency >= 1){
        document.getElementById("Dispensed").innerHTML = "Snickers Dispensed";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 1) + ".";
        currency = currency - 1;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
       }
    }
    if(inputCode == "A2"){
      if(currency >= 1.50){
        document.getElementById("Dispensed").innerHTML = "Skittles Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 1.50) + ".";
        currency = currency - 1.50;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
        }
    }
    if(inputCode == "A3"){
      if(currency >= 1.50){
        document.getElementById("Dispensed").innerHTML = "M&M's Dispensed";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 1.50) + ".";
        currency = currency - 1.50;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
          document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
          document.getElementById("noMoney").innerHTML = "You do not have enough money!";
          inputCode = "";
          document.getElementById("inputCode").innerHTML = inputCode;
         }
    }
    if(inputCode == "B1"){
      if(currency >= 2){
        document.getElementById("Dispensed").innerHTML = "Cheetos Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 2) + ".";
        currency = currency - 2;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
        }
    }
    if(inputCode == "B2"){
      if(currency >= 2){
        document.getElementById("Dispensed").innerHTML = "Doritos Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 2) + ".";
        currency = currency - 2;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
        }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
        }
    }
    if(inputCode == "B3"){
      if(currency >= 1.75){
        document.getElementById("Dispensed").innerHTML = "Lay's Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 1.75) + ".";
        currency = currency - 1.75;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
        }
    }
    if(inputCode == "C1"){
      if(currency >= 1.75){
        document.getElementById("Dispensed").innerHTML = "Ruffles Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 1.75) + ".";
        currency = currency - 1.75;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
        }
    }
    if(inputCode == "C2"){
      if(currency >= 1.50){
        document.getElementById("Dispensed").innerHTML = "Funyuns Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 1.50) + ".";
        currency = currency - 1.50;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
       }
    }
    if(inputCode == "C3"){
      if(currency >= 3){
        document.getElementById("Dispensed").innerHTML = "Jerkey Dispensed.";
        document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency - 3) + ".";
        currency = currency - 3;
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
      }
      else{
        document.getElementById("Dispensed").innerHTML = "Nothing Dispensed";
        document.getElementById("noMoney").innerHTML = "You do not have enough money!";
        inputCode = "";
        document.getElementById("inputCode").innerHTML = inputCode;
       }
    }
  }
}

/* Adds money to balance */
function add25Cents(){
  document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency + .25) + ".";
  currency += .25;
}
function addOne(){
  document.getElementById("newBalance").innerHTML = "Your balance is $" + (currency + 1) + ".";
  currency += 1;
}

/* Button Inputs */
function buttonA(){
  inputCode = inputCode + "A";
  document.getElementById("inputCode").innerHTML = inputCode;
}
function buttonB(){
  inputCode = inputCode + "B";
  document.getElementById("inputCode").innerHTML = inputCode;
}
function buttonC(){
  inputCode = inputCode + "C";
  document.getElementById("inputCode").innerHTML = inputCode;
}
function button1(){
  inputCode = inputCode + "1";
  document.getElementById("inputCode").innerHTML = inputCode;
}
function button2(){
  inputCode = inputCode + "2";
  document.getElementById("inputCode").innerHTML = inputCode;
}
function button3(){
  inputCode = inputCode + "3";
  document.getElementById("inputCode").innerHTML = inputCode;
}

/* Resets Code */
function resetCode(){
  inputCode = "";
  document.getElementById("inputCode").innerHTML = inputCode;
}