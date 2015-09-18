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
  } else {
    verse = number + " bottles of beer on the wall, " + number +
    " bottles of beer. Take one down, pass it around, " + numberMinus1 + " bottles of beer on the wall";
  };
  return verse;
}
