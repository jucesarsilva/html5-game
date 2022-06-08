import Background from './Background.js'
import Enemy from './Enemy.js'
import Player from './Player.js'
import Shot from './Shot.js'
import Explosion from './Explosion.js'
import KeyBoard from './KeyBoard.js'

class Core {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.arrayObjPlayerShot = [];
    this.shotPlayerObjSound = [];
    this.arrayObjEnemies = [];
    this.arrayObjShotEnemies = [];
    this.arrayExplosionEnemies = [];
    this.explosionEnemiesObj = [];
    this.qtdMaxEnemies = 5;
    this.kills = 0;
    this.deads = 0;
    this.shots = 0;

    this.startThemeMusic();
    this.startScenario();
    this.startPlayer();
    this.startCollections();
    this.startKeyboard();
  }

  startThemeMusic() {
    const sound = new Howl({
      src: ['../sounds/starcraft.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });

    sound.play();
  }

  startScenario() {
    this.bg_0 = new Background("bg_0", 0, 2, "images/bg/background_", "png");
    this.bg_1 = new Background("bg_1", 0, 2, "images/bg/background_", "png");

    this.bg_0.setX(0);
    this.bg_0.setY(0);

    this.bg_1.setX(900);
    this.bg_1.setY(0);
  }

  startPlayer() {
    this.player = new Player("player", 0, 2, "images/playerSprites/player_", "png");
    this.player.setX(this.canvas.width / 2);
    this.player.setY(this.canvas.height / 2);
    this.player.lastPosX = this.player.getX();
    this.player.lastPosY = this.player.getY();
  }

  startCollections() {
    for (let n = 0; n < this.qtdMaxEnemies; n++) {
      const enemy = new Enemy("enemy_" + n, 0, 1, "images/enemiesImage/enemy_", "png");
      this.arrayObjEnemies.push(enemy);

      const shotEnemy = new Shot("shot" + this.arrayObjShotEnemies.length, 0, 1, "images/shotEnemy/shot_", "png");
      shotEnemy.fireMoment = parseInt(200 + (Math.random() * 850));
      this.arrayObjShotEnemies.push(shotEnemy);

      const explosion = new Explosion("explosion" + this.arrayExplosionEnemies.length, 0, 32, "images/explosions/exp_", "png");
      this.arrayExplosionEnemies.push(explosion);

      const explosionEnemies = new Audio("sounds/explosion.mp3");
      this.explosionEnemiesObj.push(explosionEnemies);
    }

    for (let n = 0; n < this.qtdMaxEnemies; n++) {
      this.arrayObjEnemies[n].randomPosition(this.canvas);
    }
  }

  startKeyboard() {
    this.keyboard = new KeyBoard();
  }

  updateKeyboard() {
    this.keyboard.upDateKeys();
  }

  update() {
    this.updatePlayerPositions();
    this.updateEnemiesPositions();
    this.updateScenarioPositions();
  }

  updatePlayerPositions() {
    if (this.keyboard.getKeyLeft()) {
      this.player.vx -= this.player.increment;
    } else if (this.keyboard.getKeyRight()) {
      this.player.vx += this.player.increment;
    } else {
      this.player.vx *= this.player.constFrenagem;
    }

    if (this.keyboard.getKeyUp()) {
      this.player.vy -= this.player.increment;
    } else if (this.keyboard.getKeyDown()) {
      this.player.vy += this.player.increment;
    } else {
      this.player.vy *= this.player.constFrenagem;
    }

    this.player.timerShot++;
    if (this.player.timerShot > this.player.shotInterval) {
      this.player.fire = true;
    }

    if (this.keyboard.getKeySpace()) {
      if (!this.player.isRespaw()) {
        if (this.player.fire) {
          const shotPlayer = new Shot("shot" + this.arrayObjPlayerShot.length, 0, 1, "images/shotPlayer/shot_", "png");
          const indexShot = this.arrayObjPlayerShot.length;
          this.arrayObjPlayerShot.push(shotPlayer);

          this.arrayObjPlayerShot[indexShot].setX(this.player.getX() + (this.player.getWidth() / 2));
          this.arrayObjPlayerShot[indexShot].setY(this.player.getY() + (this.player.getHeight() / 2.5));

          this.arrayObjPlayerShot[indexShot].setSpeed((this.player.getSpeed() / 4) + 7);

          this.player.fire = false;
          this.player.timerShot = 0;

          this.shots++;

          const snd = new Audio("sounds/shoot.mp3");
          this.shotPlayerObjSound.push(snd);
          const index = (this.shotPlayerObjSound.length - 1)
          this.shotPlayerObjSound[index].play();
        }
      }
    }

    if (this.player.vy > this.player.VelocMaxDown) {
      this.player.vy = this.player.VelocMaxDown;
    } else if (this.player.vy < this.player.VelocMaxUp) {
      this.player.vy = this.player.VelocMaxUp;
    }

    if (this.player.vx > this.player.VelocMaxRigth) {
      this.player.vx = this.player.VelocMaxRigth;
    } else if (this.player.vx < this.player.VelocMaxLeft) {
      this.player.vx = this.player.VelocMaxLeft;
    }

    if ((parseInt(this.player.getY()) > 0) && (parseInt(this.player.getY()) < (this.canvas.height - this.player.getHeight())) && (parseInt(this.player.getX()) > 0) && (parseInt(this.player.getX()) < (this.canvas.width - this.player.getWidth()))) {
      this.player.lastPosX = parseInt(this.player.getX());
      this.player.lastPosY = parseInt(this.player.getY());

      this.player.setX(this.player.getX() + this.player.vx);
      this.player.setY(this.player.getY() + this.player.vy);
    } else {
      this.player.vy = 0;
      this.player.vx = 0;
      this.player.setX(this.player.lastPosX);
      this.player.setY(this.player.lastPosY);
    }

    if (this.arrayObjPlayerShot.length > 0) {
      for (let l = 0; l < this.arrayObjPlayerShot.length; l++) {
        this.arrayObjPlayerShot[l].setX(this.arrayObjPlayerShot[l].getX() + this.arrayObjPlayerShot[l].getSpeed());

        if (this.arrayObjPlayerShot[l].getX() > this.canvas.width) {
          this.arrayObjPlayerShot.shift();
          this.shotPlayerObjSound.shift();
        }
      }
    }
  }

  updateEnemiesPositions() {
    for (let i = 0; i < this.qtdMaxEnemies; i++) {
      this.arrayObjEnemies[i].setX(this.arrayObjEnemies[i].getX() - this.arrayObjEnemies[i].getSpeed());

      if (this.arrayObjEnemies[i].getX() < -100) {
        this.arrayObjEnemies[i].randomPosition(this.canvas);
      }

      if (this.arrayObjShotEnemies[i].fired == false) {
        this.arrayObjShotEnemies[i].setX(this.arrayObjEnemies[i].getX());
        this.arrayObjShotEnemies[i].setY(this.arrayObjEnemies[i].getY() + (this.arrayObjEnemies[i].getHeight() / 2.5));
        if ((this.arrayObjShotEnemies[i].getX() < this.arrayObjShotEnemies[i].fireMoment) && (this.arrayObjShotEnemies[i].getX() > this.arrayObjShotEnemies[i].fireMoment - 100)) {
          this.arrayObjShotEnemies[i].fired = true;
        }
      } else {
        this.arrayObjShotEnemies[i].setX(this.arrayObjShotEnemies[i].getX() - this.arrayObjShotEnemies[i].getSpeed());
        if (this.arrayObjShotEnemies[i].getX() < -70) {
          this.arrayObjShotEnemies[i].fired = false;
          this.arrayObjShotEnemies[i].fireMoment = parseInt(200 + (Math.random() * 850));
        }
      }
    }
  }

  updateScenarioPositions() {
    this.bg_0.setX(this.bg_0.getX() - this.bg_0.getSpeed());

    if (this.bg_0.getX() <= -this.canvas.width) {
      this.bg_0.setX(this.canvas.width);
    }

    this.bg_1.setX(this.bg_1.getX() - this.bg_1.getSpeed());

    if (this.bg_1.getX() <= -this.canvas.width) {
      this.bg_1.setX(this.canvas.width);
    }
  }

  checkAllColision() {
    if (!this.player.isRespaw()) {
      for (let v = 0; v < this.arrayObjEnemies.length; v++) {
        if (this.isCollision(this.player, this.arrayObjEnemies[v])) {
          this.arrayExplosionEnemies[v].play(this.arrayObjEnemies[v].getX(), this.arrayObjEnemies[v].getY());
          this.arrayObjEnemies[v].randomPosition(this.canvas);
          this.deads++;
          this.explosionEnemiesObj[v].play();
          this.player.play();
        } else if (this.isCollision(this.player, this.arrayObjShotEnemies[v])) {
          this.arrayObjShotEnemies[v].setX(-100);
          this.deads++;
          this.player.play();
        }
      }
    }

    if (this.arrayObjPlayerShot.length > 0) {
      for (let k = 0; k < this.arrayObjPlayerShot.length; k++) {
        for (let e = 0; e < this.arrayObjEnemies.length; e++) {
          if (this.isCollision(this.arrayObjPlayerShot[k], this.arrayObjEnemies[e])) {
            this.arrayExplosionEnemies[e].play(this.arrayObjEnemies[e].getX(), this.arrayObjEnemies[e].getY());
            this.arrayObjEnemies[e].setX(-100);
            this.arrayObjPlayerShot[k].setX(2000);
            this.kills++;
            this.explosionEnemiesObj[e].play();
          } else if (this.isCollision(this.arrayObjPlayerShot[k], this.arrayObjShotEnemies[e])) {
            if (!this.player.isRespaw()) {
              this.arrayObjShotEnemies[e].setX(-100);
              this.arrayObjPlayerShot[k].setX(2000);
              this.kills++;
            }
          }
        }
      }
    }
  }

  draw() {
    this.ctx.drawImage((this.bg_0.sprite[0]), this.bg_0.getX(), this.bg_0.getY());
    this.ctx.drawImage((this.bg_1.sprite[0]), this.bg_1.getX(), this.bg_1.getY());

    if (this.player.isRespaw) {
      if ((this.player.getTimerRespaw() % 3) == 0) {
        this.ctx.drawImage((this.player.sprite[0]), this.player.getX(), this.player.getY());
      }
      else {
        this.ctx.drawImage((this.player.sprite[1]), this.player.getX(), this.player.getY());
      }
    }
    else {
      this.ctx.drawImage((this.player.sprite[0]), this.player.getX(), this.player.getY());
    }

    if (this.arrayObjPlayerShot.length > 0) {
      for (let f = 0; f < this.arrayObjPlayerShot.length; f++) {
        this.ctx.drawImage((this.arrayObjPlayerShot[f].sprite[0]), this.arrayObjPlayerShot[f].getX(), this.arrayObjPlayerShot[f].getY());
      }
    }

    for (let j = 0; j < this.qtdMaxEnemies; j++) {
      this.ctx.drawImage(this.arrayObjShotEnemies[j].sprite[0], this.arrayObjShotEnemies[j].getX(), this.arrayObjShotEnemies[j].getY());
      this.ctx.drawImage((this.arrayObjEnemies[j].sprite[0]), this.arrayObjEnemies[j].getX(), this.arrayObjEnemies[j].getY());

      if (!this.arrayExplosionEnemies[j].isAnimation())
        this.ctx.drawImage(this.arrayExplosionEnemies[j].Animation(), this.arrayExplosionEnemies[j].getX(), this.arrayExplosionEnemies[j].getY());
    }

    this.ctx.drawImage((this.bg_0.sprite[1]), this.bg_0.getX() + 1, this.bg_0.getY());
    this.ctx.drawImage((this.bg_1.sprite[1]), this.bg_1.getX() + 1, this.bg_1.getY());

    this.ctx.fillStyle = "rgb(100, 250, 250)";
    this.ctx.font = "24px Helvetica";
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    this.ctx.fillText("D: " + this.deads, 10, 12);

    this.ctx.fillStyle = "rgb(100, 250, 250)";
    this.ctx.font = "24px Helvetica";
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    this.ctx.fillText("K: " + this.kills, 100, 12);

    this.ctx.fillStyle = "rgb(100, 250, 250)";
    this.ctx.font = "24px Helvetica";
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    this.ctx.fillText("Shots: " + this.shots, 200, 12);

    this.ctx.fillStyle = "rgb(100, 250, 250)";
    this.ctx.font = "24px Helvetica";
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    this.ctx.fillText("player.x: " + parseInt(this.player.getX()) + " player.y: " + parseInt(this.player.getY()), 600, 12);
  }

  isCollision(obj_01, obj_02) {
    let colision = false;

    if (obj_01.getX() <= (obj_02.getX() + obj_02.getWidth()) &&
      obj_02.getX() <= (obj_01.getX() + obj_01.getWidth()) &&
      obj_01.getY() <= (obj_02.getY() + obj_02.getHeight()) &&
      obj_02.getY() <= (obj_01.getY() + obj_01.getHeight())) {
      colision = true;
    }

    return colision;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.player.getReady()) {
      this.updateKeyboard();
      this.update();
      this.checkAllColision();
      this.draw();
    }
  }
}

export default Core