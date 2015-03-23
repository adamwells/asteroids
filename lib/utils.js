(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  Asteroids.Util.inherits = function(parent) {
    function Surrogate () {}
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
  };
})();
