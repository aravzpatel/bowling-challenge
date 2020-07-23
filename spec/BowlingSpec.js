describe('Bowling', function() {
  var Bowling = require('../lib/Bowling.js');
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  it("should return 2 when it is passed 1,1", function(){
    bowling.frameOneInput(1,1)
    expect(bowling.calculateScore()).toEqual(2);
  })

  it("should return 10 when it is passed 1,9", function(){
    bowling.frameOneInput(1,9)
    expect(bowling.calculateScore()).toEqual(10)
  })

  describe("entering a false input", function(){
    it("should throw an error if given 1, 10", function(){
      expect(function(){
        bowling.frameOneInput(1,10);
      }).toThrowError("Incorrect scores entered")
    })
  })
})