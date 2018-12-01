$(document).ready(function() {
// Make our variables global to the runtime of our application  
  var quotanectar = Math.floor(Math.random() * (120 - 18 + 18) ) + 18;
  var scorenectar = 0;
  var honeysuccess = 0;
  var nohoney = 0;
  var addNumber = 0;
  var a = 0;
  var b = 0;

//Create an array for the flower random numbers
  var flowerArray = [];
  for(var i = 0; i < 4; i++){
    j = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    flowerArray.push(j);
  }
  console.log(flowerArray);

//quotanector to html
  $("#quotanectar").text(quotanectar);


function clearUpAdd(quotanectar, scorenectar){
  flowerArrayPlace = "";
  quotanectar = quotanectar;
  scorenectar = scorenectar;
  addNumber = "";
}

function clearUpRound(honeysuccess, nohoney){
  scorenectar = 0;
  quotanectar = 0;
  addNumber = 0;
  honeysuccess = honeysuccess;
  nohoney = nohoney;
  $("#scorenectar, #quotanectar, #operator, #result").empty();
  quotanectar = Math.floor(Math.random() * (120 - 18 + 18) ) + 18;
  $("#quotanectar").text(quotanectar);
}

//onclick event for flowers
$(".flower").on("click", function(quotanector, scorenector) {
//check to see if score goes over quota value
    if (scorenectar < quotanectar){
        var flowerArrayPlace = $(this).data('placement');
        console.log("var d: " + flowerArrayPlace); 
        var a = parseInt(flowerArrayPlace);
        console.log(flowerArray[a]);
        addNumber = flowerArray[a];
        var b = parseInt(addNumber);
        console.log("addNumber: " + b);
// grab the value of the flower card and display it in scorenectar
        scorenectar = b + scorenectar;
        $('#scorenectar').text(scorenectar);
        console.log("scorenectar: " + scorenectar);
        clearUpAdd();
    } else if (scorenectar === quotanectar){
        honeysuccess++;
        $('#honeysuccess').text(honeysuccess);
        alert('You WIN! Play again?');
        clearUpRound(honeysuccess);
    } else if (scorenectar > quotanectar){
        nohoney++;
        console.log("no honey" + nohoney);
        $('#nohoney').text(nohoney);  
        alert("You Lose. Play another round?");
        clearUpRound(nohoney);
      }
  });





 


}); //close doc ready function

