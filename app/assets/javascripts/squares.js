var Squares = function() {
  this.graphics = game.add.graphics(160,160);
  game.allSquares.push(this);
}

Squares.prototype.move = function() {
  this.graphics.y += 30/game.turnDuration
}