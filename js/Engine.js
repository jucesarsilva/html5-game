/**
 * @author Julio Cesar Silva
 */

class Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.ready = false;
    this.sprite = [];
    this.image;
    this.name = _name;
    this.type = _type;
    this.url = _url;
    this.iF = _iF;
    this.cI = _cI;

    for (cI; cI < iF; cI++) {
      this.image = new Image();
      this.image.src = url + cI + "." + type;
      this.image.onload = () => {
        overWriteWidth(this.width);
        overWriteHeight(this.height);
        overWriteReady(true);
      };
      this.sprite.push(this.image);
    }
  }

  overWriteWidth(update) {
    width = update;
  };

  overWriteHeight(update) {
    height = update;
  };

  overWriteReady(update) {
    ready = update;
  };

  getWidth() {
    return width;
  };

  setWidth(update) {
    width = update;
  };

  getHeight() {
    return height;
  };

  setHeight(update) {
    height = update;
  };

  getReady() {
    return ready;
  };

  getX() {
    return x;
  };

  setX(update) {
    x = update;
  };

  getY() {
    return y;
  };

  setY(update) {
    y = update;
  };

  getSpeed = function () {
    return speed;
  };

  setSpeed = function (update) {
    speed = update;
  };
}