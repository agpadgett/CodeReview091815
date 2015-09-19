var countsDown = function(number) {
  var numberArray = [];
  for (var i = number; i > 0; i -= 1) {
    numberArray.push(i);
  }
  return numberArray;
}

var makesVerse = function(number){
  var numberMinus1 = number - 1;
  var verse;
  if(numberMinus1 === 0){
    verse = "1 bottle of beer on the wall, 1 bottle of beer." +
    " Take it down, pass it around, no bottles of beer on the wall."
    + " No bottles of beer on the wall, no bottles of beer. Go to the store, " +
    "buy some more, 99 bottles of beer on the wall.";
  } else if (numberMinus1 === 1){
    verse = number + " bottles of beer on the wall, " + number +
    " bottles of beer. Take 1 down, pass it around, 1 bottle of beer on the wall. "
  } else {
    verse = number + " bottles of beer on the wall, " + number +
    " bottles of beer. Take one down, pass it around, " + numberMinus1 + " bottles of beer on the wall. ";
  };
  return verse;
}



var makesSong = function(number){
  var numberArray = countsDown(number);
  var song = []
    for(var i = 0; i < numberArray.length; i++){
      var verse = makesVerse(numberArray[i]);
      song.push(verse);
    }
  return song;
}


$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    var numberInput = $("input#number_input").val();
    var result = makesSong(numberInput);

//  $(".song").text(result.join(""));
    $(".song").append(result.join(" <br> "));

    $("#result").show();
    event.preventDefault();
  });
});
