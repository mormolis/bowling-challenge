game = new Game();

console.log("5+3");

game.throwBall(5);
game.throwBall(3);

console.log(game.frames[0].rolls)
console.log(game.frames[0].bonus)
console.log("--------");

console.log("5+5");

game.throwBall(5);
game.throwBall(5);
console.log(game.frames[1].rolls)
console.log(game.frames[1].bonus)
console.log("--------");

console.log("3+5");

game.throwBall(3);
game.throwBall(5);
console.log(game.frames[2].rolls)
console.log(game.frames[1].bonus)
console.log("--------");

console.log("10");

game.throwBall(10);

console.log(game.frames[3].rolls)
console.log(game.frames[2].bonus)
console.log("--------");