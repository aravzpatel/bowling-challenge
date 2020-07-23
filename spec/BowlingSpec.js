describe('Bowling', function() {
  var Bowling = require('../lib/Bowling.js');
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  it("should return 2 when it is passed 1,1", function(){
    bowling.frameOneInput(1,1)
    // console.log("in the spec file")
    var result = bowling.calculateScore(bowling.returnScore);
    console.log(bowling.calculateScore(bowling.returnScore))
    console.log(bowling.returnScore(bowling.calculateScore))
    expect(bowling.calculateScore(bowling.returnScore)).toEqual(2);
  })

  xit("should return 10 when it is passed 1,9", function(){
    bowling.frameOneInput(1,9)
    expect(bowling.score()).toEqual(10)
  })

})