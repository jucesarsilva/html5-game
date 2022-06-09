import Engine from './Engine.js'

class Enemy extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.speed = 4;
    this.ready = false;
  }

  randomPosition(canvas) {
    this.x = (canvas.clientWidth + this.width) + (Math.random() * 500);
    this.y = (this.height + (Math.random() * (canvas.clientHeight - this.height)));
  };
}

export default Enemy