game = new Game();

console.log("5+3 frame 0");

game.throwBall(5);
game.throwBall(3);

console.log(game.frames[0].rolls)
console.log(game.frames[0].bonus)
console.log("--------");

console.log("5+5 frame 1");

game.throwBall(5);
game.throwBall(5);
console.log(game.frames[1].rolls)
console.log(game.frames[0].bonus)
console.log("--------");

console.log("3+5 frame 2");

game.throwBall(3);
game.throwBall(5);
console.log(game.frames[2].rolls)
console.log(game.frames[1].bonus)
console.log("--------");

console.log("10 frame 3");

game.throwBall(10);

console.log(game.frames[3].rolls)
console.log(game.frames[2].bonus)
console.log("--------");

console.log("10 frame 4");

game.throwBall(10);

console.log(game.frames[4].rolls)
console.log("frame 3 bonus", game.frames[3].bonus)
console.log("frame 2 bonus",game.frames[2].bonus)
console.log("--------");


console.log("3,3 frame 5");

game.throwBall(3);
game.throwBall(3);
console.log(game.frames[5].rolls)
console.log("frame 4 bonus",game.frames[4].bonus)
console.log("frame 3 bonus", game.frames[3].bonus)
console.log("frame 2 bonus",game.frames[2].bonus)
console.log("--------");