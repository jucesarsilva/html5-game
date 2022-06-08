import Core from './Core.js'

window.requestAnimationFrame = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||

    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
})();

window.onload = function() {
  const core = new Core();

  function loopCore() {
    requestAnimationFrame(loopCore);
    core.render()
  };

  loopCore();
}