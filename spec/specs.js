describe('countsDown', function() {
  it("counts down from a number, to zero", function() {
    expect(countsDown(10)).to.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});

describe('makesVerse', function(){
  it("turns a number into a verse from 99 Bottles of Beer", function(){
    expect(makesVerse(10)).to.equal("10 bottles of beer on the wall, 10 bottles of beer. Take one down, pass it around, 9 bottles of beer on the wall");
  });

  it("returns a particular string if the number of beers is 1", function(){
    expect(makesVerse(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take it down, pass it around, no bottles of beer on the wall. No bottles of beer on the wall, no bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.");
  });
});
