function Frame (){
  this.rolls = [null, null];
  this.bonus = [null, null];
  this.throwCounter = 0;
}

 Frame.prototype = {
  frameTotal    : function(){
    return this.rolls[0] + this.rolls[1];
  },
  
  setRoll       : function( numberOfPins ) { 
    if (numberOfPins + this.frameTotal() <= 10){
      this.rolls[this.throwCounter] = numberOfPins;  
      this.throwCounter ++;  
      return;  
    } 
    throw Error("more than 10 pins");
  },

  setBonus       : function(bonus, index) {
    if (bonus <= 10) this.bonus[index] = bonus;
    else throw Error("bonus error");
  },

  hasStrike      :function(){
    if (this.rolls[0] === 10) return true;
    return false;
  },

  hasSpare      :function(){
    if (this.rolls[1] + this.rolls[0] === 10) return true;
    return false;
  },

  isOver         : function(){
    if (this.hasStrike()) return true
    return this.throwCounter === 2 ? true : false;
  }
}

function Frame10(){
  this.rolls = [null,null,null];
  this.throwCounter = 0;
}
Frame10.prototype = {
  setRoll       : function( numberOfPins ) { 
    if (numberOfPins <= 10) this.rolls[this.throwCounter] = numberOfPins;
    else throw Error("frame 10 pins error");
  },

  frameTotal    : function(){
    return this.rolls[0] + this.rolls[1] + this.rolls[3];
  },

  isOver        : function () {
    if (this.throwCounter === 2 && this.frameTotal() < 10 ) return true;
    if (this.throwCounter === 3) return true;
    false;
  }
}       


function Game(){
  this.frames = new Array(10);
  this.roundCounter = 0;

}
Game.prototype = {

  currentFrame    : function (){
                      return this.frames[this.roundCounter]
                    },

  isOver          : function (){
                      return this.roundCounter === 10

                    },
  totalScore      : function(){
                      sum = 0;
                      for(var i=0; i< this.frames.length; i++){
                          sum += this.frames[i].frameTotal();
                      }
                      return sum;
                    },

  bonusCalculator : function (){
    if ( this.roundCounter < 9  && this.roundCounter > 0 ){
      if ( this.frames[this.roundCounter - 1].hasStrike() ){
        this.frames[this.roundCounter - 1].bonus[0] = this.frames[this.roundCounter].rolls[0];
        this.frames[this.roundCounter - 1].bonus[1] += this.frames[this.roundCounter].rolls[1];
        if (this.frames[this.roundCounter - 2].hasStrike()) {
          this.frames[this.roundCounter - 2].bonus[1] += this.frames[this.roundCounter].rolls[0];
        }
    } else if (this.frames[this.roundCounter - 1].hasSpare()){
        this.frames[this.roundCounter - 1].bonus[0] = this.frames[this.roundCounter].rolls[0];
      }
    } else if (this.roundCounter === 9){
        if (this.frames[this.roundCounter - 1].hasSpare() ){
          this.frames[this.roundCounter - 1].bonus[0] = this.frames[this.roundCounter].rolls[0];

      } else if ( this.frames[this.roundCounter - 1].hasStrike() ){
          if (this.frames[this.roundCounter].hasStrike()){
            this.frames[this.roundCounter - 1].bonus[0] = this.frames[this.roundCounter].rolls[0];
          } else {
            this.frames[this.roundCounter - 1].bonus[0] = this.frames[this.roundCounter].rolls[0];
            this.frames[this.roundCounter - 1].bonus[1] = this.frames[this.roundCounter].rolls[1];
          }
      } 
    }
  },

  createFrame   : function(){
    if (this.roundCounter === 9) {
      this.frames[9] = new Frame10();}
    else {
 
      this.frames[this.roundCounter] = new Frame();}
  },

  throwBall     : function(numberOfPins){
    if (this.isOver()) throw Error("Game Over Dude! Total Score: " + this.totalScore())
    if (this.currentFrame() === undefined){
      this.createFrame();
    }
    this.currentFrame().setRoll(numberOfPins);
    if (this.currentFrame().isOver()){
      this.bonusCalculator();
      this.roundCounter ++;
    }
  }
}
