import Engine from './Engine.js'

class Background extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.speed = 3;
  }
}

export default Background
