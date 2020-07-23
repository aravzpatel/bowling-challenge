class Bowling {
  constructor() {
    this.frameOneScore = []
  }

  frameOneInput(first, second) {
    this.frameOneScore.push(first, second)
  }

  value(){
    return this.calculateScore(this.returnScore)
  }
  
  returnScore(callback){
    var value = callback();
    return value
  }
  
  calculateScore(frame){
    var scoreSum = frame.reduce(function(a,b){
      return a+b;
    },0);
    // return callback(scoreSum)
    return scoreSum
  }
}

module.exports = Bowling