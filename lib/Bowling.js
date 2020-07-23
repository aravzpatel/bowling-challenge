class Bowling {
  constructor() {
    this.frameOneScore = []
  }

  maxFrameScore = 10

  frameOneInput(first, second) {
    if(this.checkValidInput(first,second)){
      throw new Error("Incorrect scores entered")
    } else{
      this.frameOneScore.push(first, second)
    }
  }

  _checkValidInput(firstScore, secondScore){
    return firstScore + secondScore > this.maxFrameScore;
  };

  value(){
    return this.calculateScore(this.returnScore)
  }
  
  returnScore(callback){
    var value = callback();
    return value
  }
  
  calculateScore(){
    var scoreSum = this.frameOneScore.reduce(function(a,b){
      return a+b;
    },0)
    return scoreSum
  }
}

module.exports = Bowling