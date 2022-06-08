/**
 * @author Julio Cesar Silva
 */
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
    this.VelocMaxDown = speed;
    this.VelocMaxUp = -speed;
    this.VelocMaxRigth = speed;
    this.VelocMaxLeft = -speed;
    this.constFrenagem = 0.96;
  }

  getTimerRespaw() {
    return timerRespaw;
  }

  isRespaw() {
    if (respaw) {
      timerRespaw++;
      if (timerRespaw > 300) {
        respaw = false;
        timerRespaw = 0;
      }
    }
    return respaw;
  }

  play() {
    respaw = true;
  }
};
