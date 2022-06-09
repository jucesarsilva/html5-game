import Engine from './Engine.js'

class Player extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.speed = 5;
    this.ready = false;
    this.respaw = false;
    this.timerRespaw = 0;

    /* properties characteristics - all below is public properties*/
    this.shotInterval = 20;
    this.timerShot = 0;
    this.fire = true;
    this.increment = 0.5;
    this.lastPosX = 0;
    this.lastPosY = 0;

    /* putting physics properties*/
    this.vy = 0;
    this.vx = 0;
    this.VelocMaxDown = this.speed;
    this.VelocMaxUp = -this.speed;
    this.VelocMaxRigth = this.speed;
    this.VelocMaxLeft = -this.speed;
    this.constFrenagem = 0.96;
  }

  getTimerRespaw() {
    return this.timerRespaw;
  }

  isRespaw() {
    if (this.respaw) {
      this.timerRespaw++;
      if (this.timerRespaw > 300) {
        this.respaw = false;
        this.timerRespaw = 0;
      }
    }
    return this.respaw;
  }

  play() {
    this.respaw = true;
  }
}

export default Player
