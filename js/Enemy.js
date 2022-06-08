/**
 * @author Julio Cesar Silva
 */
class Enemy extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.speed = 4;
    this.ready = false;

    /* PRIVATE properties should be used this way - just example - 
    we were get the parent canvas in the main class - where we have a element "canvas" */
    this.parent = window.document.getElementById("canvas");
    this.canvasWidth = parent.width;
    this.canvasHeight = parent.height;
  }

  /* About random position on screen - config. by interval*/
  randomPosition(_initX, _endX, _initY, _endY) {
    x = (canvasWidth + width) + (Math.random() * 500);
    y = (height + (Math.random() * (canvasHeight - height)));
  };
}
