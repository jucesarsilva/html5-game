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

    for (this.cI; this.cI < this.iF; this.cI++) {
      this.image = new Image();
      this.image.src = this.url + this.cI + "." + this.type;
      this.image.onload = () => {
        this.overWriteWidth(this.width);
        this.overWriteHeight(this.height);
        this.overWriteReady(true);
      };
      this.sprite.push(this.image);
    }
  }

  overWriteWidth(update) {
    this.width = update;
  };

  overWriteHeight(update) {
    this.height = update;
  };

  overWriteReady(update) {
    this.ready = update;
  };

  getWidth() {
    return this.width;
  };

  setWidth(update) {
    this.width = update;
  };

  getHeight() {
    return this.height;
  };

  setHeight(update) {
    this.height = update;
  };

  getReady() {
    return this.ready;
  };

  getX() {
    return this.x;
  };

  setX(update) {
    this.x = update;
  };

  getY() {
    return this.y;
  };

  setY(update) {
    this.y = update;
  };

  getSpeed = function () {
    return this.speed;
  };

  setSpeed = function (update) {
    this.speed = update;
  };
}