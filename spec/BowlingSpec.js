describe("BowlingGame", function () {
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
  });

  it("should initialize an empty array length = 10 for the total frame score", function () {

    expect(bowlingGame.getFrameScore(0)).toEqual(0);
  });

  it("should initialize an empty array for the roll score", function () {

    expect(bowlingGame.getRolls(0, 0)).toEqual(0);
  });

  it("should initialize an empty array for the bonuses", function () {
    expect(bowlingGame.getBonus(0, 0)).toEqual(0);
  });

  describe("._isFirstRoll", function () {
    it("should return false after the first roll of the frame", function () {
      bowlingGame.throwBall(1);
      expect(bowlingGame._isFirstRoll()).toEqual(false);
    });

    it("should return true after for the first roll of the frame", function () {
      expect(bowlingGame._isFirstRoll()).toEqual(true);
    });
  });

  describe(".throwBall", function () {
    it("should throw an error when numbers of pins are not acceptable", function () {
      expect(function () {
        bowlingGame.throwBall(11)
      }).toThrow(new Error("Had too much White Russian? There must be a total of 10 pins for each frame.."));
    });

    it("should add the numbers of pins to the first roll", function () {
      bowlingGame.throwBall(5);
      expect(bowlingGame.getRolls(0, 0)).toEqual(5)
    });
    
  });

});