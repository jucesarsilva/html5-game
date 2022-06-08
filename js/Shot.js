import Engine from './Engine.js'

class Shot extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.fired = false;
    this.fireMoment = 0;
    this.speed = 7;
    this.PFS = 25;
  }
}

export default Shot