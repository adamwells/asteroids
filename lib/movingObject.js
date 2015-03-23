(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  function MovingObject (args) {
    this.pos = args[pos];
    this.vel = args[vel];
    this.rad = args[rad];
    this.col = args[col];
  }

  movingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    // wrap around
  };

  movingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.rad,
      0,
      2 * Math.PI,
      true
    );

    ctx.fill;
  };

  movingObject.isCollidedWith = function (other) {
    var distance = Math.sqrt(Math.pow(this.pos[0] - other.pos[0], 2) + Math.pow(this.pos[1] - other.pos[1], 2));
    if (distance < this.rad + other.rad) {
      return true;
    }
    return false;
  };
})();
