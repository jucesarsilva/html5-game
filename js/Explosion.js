import Engine from './Engine.js'

class Explosion extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.permission = true;
    this.index = 0;
  }

  isAnimation() {
    if (this.index > (this.sprite.length - 2)) {
      this.permission = true;
      this.index = 0;
    }

    return this.permission;
  };

  play(_x, _y) {
    if ( _x && _y) {
      this.x = _x;
      this.y = _y;
      this.index = 0;
      this.permission = false
    }
  };

  Animation() {
    this.index++;
    if (!this.permission)
      return this.sprite[this.index];
  };
}

export default Explosion
