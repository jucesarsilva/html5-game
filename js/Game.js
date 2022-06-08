/* Author: Julio Cesar da Silva - 17 May 2012.
   
**********************************************************	 
Give the credits for developers that spend most part of your time doing it!
	
PS: I'm sorry by my english!!!! ^^
*/

/* CREATE CANVAS FOR DRAW */
var canvas = window.document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/* CONFIG. FPS FOR SPECIFIC BROWSER */
window.requestAnimationFrame = (function () {
  //Check for each browser
  //@paul_irish function
  //Globalises this function to work on any browser as each browser has a different namespace for this
  return window.requestAnimationFrame || //Chromium 
    window.webkitRequestAnimationFrame || //Webkit
    window.mozRequestAnimationFrame || //Mozilla Geko
    window.oRequestAnimationFrame || //Opera Presto
    window.msRequestAnimationFrame || //IE Trident?

    function (callback, element) { //Fallback function
      window.setTimeout(callback, 1000 / 60);
    }
})();

/* the music theme of the game*/
var theme = new Audio("sounds/starcraft.mp3");
theme.loop = true;
theme.play();

/* Put the scenario with lateral scrolling*/
var bg_0 = new Background("bg_0", 0, 2, "images/bg/background_", "png");
var bg_1 = new Background("bg_1", 0, 2, "images/bg/background_", "png");

bg_0.setX(0);
bg_0.setY(0);

bg_1.setX(900);
bg_1.setY(0);

/* CREATE OBJECTS OF THE CLASSES*/
var player = new Player("player", 0, 2, "images/playerSprites/player_", "png");
/* we'll keep every player's shot inside of the array*/
var arrayObjPlayerShot = [];
var shotPlayerObjSound = [];

/* So, would like have more than one enemy, right? How can we do that? We not should create one by one, because that will spend much time.
 * Array is the answer! Creating a Array of the Objects of the type Enemy */
var arrayObjEnemies = [];
var arrayObjShotEnemies = [];
var arrayExplosionEnemies = [];
var explosionEnemiesObj = [];

/* We want to quickly apply changes. So, put a constant variable for quantity of the enemies*/
var qtdMaxEnemies = 5;
/* now putting the enemies in the same place*/
for (var n = 0; n < qtdMaxEnemies; n++) {
  enemy = new Enemy("enemy_" + n, 0, 1, "images/enemiesImage/enemy_", "png");
  arrayObjEnemies.push(enemy);

  var shotEnemy = new Shot("shot" + arrayObjShotEnemies.length, 0, 1, "images/shotEnemy/shot_", "png");
  shotEnemy.fireMoment = parseInt(200 + (Math.random() * 850));
  arrayObjShotEnemies.push(shotEnemy);

  /* creating the explosions for everybody*/
  var explosion = new Explosion("explosion" + arrayExplosionEnemies.length, 0, 32, "images/explosions/exp_", "png");
  arrayExplosionEnemies.push(explosion);

  //sound
  var explosionEnemies = new Audio("sounds/explosion.mp3");
  explosionEnemiesObj.push(explosionEnemies);
}

/* The object for key control*/
var keyboard = new KeyBoard();

var kills = 0;
var deads = 0;
var shots = 0;

/******************************************************************************************************************/
// Update game objects
function update() {
  /* keyboard event control by object of the type "KeyBoard" Class */
  if (keyboard.getKeyLeft()) {
    player.vx -= player.increment;
  }
  else if (keyboard.getKeyRight()) {
    player.vx += player.increment;
  }
  else {
    player.vx *= player.constFrenagem;
  }

  if (keyboard.getKeyUp()) {
    player.vy -= player.increment;
  }
  else if (keyboard.getKeyDown()) {
    player.vy += player.increment;
  }
  else {
    player.vy *= player.constFrenagem;
  }

  /* simulate a timer interval for player's shot*/
  player.timerShot++;
  if (player.timerShot > player.shotInterval) {
    player.fire = true;
  }

  if (keyboard.getKeySpace()) {
    if (!player.isRespaw()) {
      if (player.fire) {
        /* let's start create player's shot*/
        var shotPlayer = new Shot("shot" + arrayObjPlayerShot.length, 0, 1, "images/shotPlayer/shot_", "png");
        index = arrayObjPlayerShot.length;
        arrayObjPlayerShot.push(shotPlayer);

        /* catch the position conform player's spaceship*/
        arrayObjPlayerShot[index].setX(player.getX() + (player.getWidth() / 2));
        arrayObjPlayerShot[index].setY(player.getY() + (player.getHeight() / 2.5));

        arrayObjPlayerShot[index].setSpeed((player.getSpeed() / 4) + 7);

        /* we should reset the control variables for player's shot*/
        player.fire = false;
        player.timerShot = 0;

        shots++;

        var snd = new Audio("sounds/shoot.mp3");
        shotPlayerObjSound.push(snd);
        var index = (shotPlayerObjSound.length - 1)
        shotPlayerObjSound[index].play();
      }
    }
  }

  //control the max speed for up and down
  if (player.vy > player.VelocMaxDown)
    player.vy = player.VelocMaxDown;

  else if (player.vy < player.VelocMaxUp)
    player.vy = player.VelocMaxUp;

  //control the max speed for left and right
  if (player.vx > player.VelocMaxRigth)
    player.vx = player.VelocMaxRigth;

  else if (player.vx < player.VelocMaxLeft)
    player.vx = player.VelocMaxLeft;

  //update X,Y  by vector (vx, vy)
  if ((parseInt(player.getY()) > 0) && (parseInt(player.getY()) < (canvas.height - player.getHeight())) && (parseInt(player.getX()) > 0) && (parseInt(player.getX()) < (canvas.width - player.getWidth()))) {
    /* keep the last valid position*/
    player.lastPosX = parseInt(player.getX());
    player.lastPosY = parseInt(player.getY());

    /* this method move the object - object.move(x,y)*/
    player.setX(player.getX() + player.vx);
    player.setY(player.getY() + player.vy);

  }
  else {
    player.vy = 0;
    player.vx = 0;
    player.setX(player.lastPosX);
    player.setY(player.lastPosY);
  }

  /**************************** UPDATE for player's shot ********************************************************************/
  if (arrayObjPlayerShot.length > 0) {
    for (var l = 0; l < arrayObjPlayerShot.length; l++) {
      arrayObjPlayerShot[l].setX(arrayObjPlayerShot[l].getX() + arrayObjPlayerShot[l].getSpeed());

      if (arrayObjPlayerShot[l].getX() > canvas.width) {
        /* remove the object Shot of the array, when this out of screen */
        arrayObjPlayerShot.shift();
        shotPlayerObjSound.shift();
      }
    }
  }

  /*********************** UPDATE the moviment of the enemies *********************************************************/
  for (var i = 0; i < qtdMaxEnemies; i++) {
    /* for enemies moviment*/
    arrayObjEnemies[i].setX(arrayObjEnemies[i].getX() - arrayObjEnemies[i].getSpeed());

    if (arrayObjEnemies[i].getX() < -100) {
      arrayObjEnemies[i].randomPosition();
    }

    /* for enemies shot moviment*/
    if (arrayObjShotEnemies[i].fired == false) {
      arrayObjShotEnemies[i].setX(arrayObjEnemies[i].getX());
      arrayObjShotEnemies[i].setY(arrayObjEnemies[i].getY() + (arrayObjEnemies[i].getHeight() / 2.5));
      if ((arrayObjShotEnemies[i].getX() < arrayObjShotEnemies[i].fireMoment) && (arrayObjShotEnemies[i].getX() > arrayObjShotEnemies[i].fireMoment - 100)) {
        arrayObjShotEnemies[i].fired = true;
      }
    }
    else {
      arrayObjShotEnemies[i].setX(arrayObjShotEnemies[i].getX() - arrayObjShotEnemies[i].getSpeed());
      if (arrayObjShotEnemies[i].getX() < -70) {
        arrayObjShotEnemies[i].fired = false;
        arrayObjShotEnemies[i].fireMoment = parseInt(200 + (Math.random() * 850));
      }
    }

  }

  /********************************** UPDATE background **********************************************************/
  bg_0.setX(bg_0.getX() - bg_0.getSpeed());

  if (bg_0.getX() <= -canvas.width) {
    bg_0.setX(canvas.width);
  }

  bg_1.setX(bg_1.getX() - bg_1.getSpeed());

  if (bg_1.getX() <= -canvas.width) {
    bg_1.setX(canvas.width);
  }
};

/************************************************************************************************************************************************/
function checkAllColision() {
  // Collision between Spaceship's player && Enemies || Spaceship's player && enemies shots
  if (!player.isRespaw()) {
    for (var v = 0; v < arrayObjEnemies.length; v++) {
      if (isCollision(player, arrayObjEnemies[v])) {
        arrayExplosionEnemies[v].play(arrayObjEnemies[v].getX(), arrayObjEnemies[v].getY());
        arrayObjEnemies[v].randomPosition();
        deads++;
        explosionEnemiesObj[v].play();
        player.play();
      }
      //Collision between player && enemies shotting
      else if (isCollision(player, arrayObjShotEnemies[v])) {
        arrayObjShotEnemies[v].setX(-100);
        deads++;
        player.play();
      }
    }
  }

  if (arrayObjPlayerShot.length > 0) {
    for (var k = 0; k < arrayObjPlayerShot.length; k++) {
      for (var e = 0; e < arrayObjEnemies.length; e++) {
        // Collision between shotting player && Enemies    
        if (isCollision(arrayObjPlayerShot[k], arrayObjEnemies[e])) {
          arrayExplosionEnemies[e].play(arrayObjEnemies[e].getX(), arrayObjEnemies[e].getY());
          arrayObjEnemies[e].setX(-100);
          arrayObjPlayerShot[k].setX(2000);
          kills++;
          explosionEnemiesObj[e].play();
        }
        //Collision between player shotting && enemies shotting
        else if (isCollision(arrayObjPlayerShot[k], arrayObjShotEnemies[e])) {
          if (!player.isRespaw()) {
            arrayObjShotEnemies[e].setX(-100);

            arrayObjPlayerShot[k].setX(2000);

            kills++;
          }
        }
      }
    }
  }
}

/***********************************************************************************************************************/
// Draw everything - like a loop for render objects all time
function render() {
  /* IMPORTANT - for multiples layers is necessary to put in the correct order, take a look in the background below.
  we draw images of the index 0 first, of the class background, later we draw all object that we want that stay behind, 
  later we draw the image with index 1 of the class background*/
  /* render for background elements*/
  ctx.drawImage((bg_0.sprite[0]), bg_0.getX(), bg_0.getY());
  ctx.drawImage((bg_1.sprite[0]), bg_1.getX(), bg_1.getY());

  /* reference the player image*/
  if (player.isRespaw) {
    if ((player.getTimerRespaw() % 3) == 0)
      ctx.drawImage((player.sprite[0]), player.getX(), player.getY());
    else
      ctx.drawImage((player.sprite[1]), player.getX(), player.getY());
  }
  else {
    ctx.drawImage((player.sprite[0]), player.getX(), player.getY());
  }

  /* render for player's shot*/
  if (arrayObjPlayerShot.length > 0) {
    for (var f = 0; f < arrayObjPlayerShot.length; f++) {
      ctx.drawImage((arrayObjPlayerShot[f].sprite[0]), arrayObjPlayerShot[f].getX(), arrayObjPlayerShot[f].getY());
    }
  }

  for (var j = 0; j < qtdMaxEnemies; j++) {
    ctx.drawImage(arrayObjShotEnemies[j].sprite[0], arrayObjShotEnemies[j].getX(), arrayObjShotEnemies[j].getY());
    ctx.drawImage((arrayObjEnemies[j].sprite[0]), arrayObjEnemies[j].getX(), arrayObjEnemies[j].getY());
    /* explosion for all enemies*/
    if (!arrayExplosionEnemies[j].isAnimation())
      ctx.drawImage(arrayExplosionEnemies[j].Animation(), arrayExplosionEnemies[j].getX(), arrayExplosionEnemies[j].getY());
  }

  /* the last layer for background scenario*/
  ctx.drawImage((bg_0.sprite[1]), bg_0.getX() + 1, bg_0.getY());
  ctx.drawImage((bg_1.sprite[1]), bg_1.getX() + 1, bg_1.getY());

  // Score
  ctx.fillStyle = "rgb(100, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("D: " + deads, 10, 12);

  // Score
  ctx.fillStyle = "rgb(100, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("K: " + kills, 100, 12);

  // Status
  ctx.fillStyle = "rgb(100, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Shots: " + shots, 200, 12);

  // Position
  ctx.fillStyle = "rgb(100, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("player.x: " + parseInt(player.getX()) + " player.y: " + parseInt(player.getY()), 600, 12);
};

/***********************************************************************************************************************/
function isCollision(obj_01, obj_02) {
  var colision = false;
  // Collision between Spaceship's player && Enemies || Spaceship's player && enemies shots
  if (obj_01.getX() <= (obj_02.getX() + obj_02.getWidth()) &&
    obj_02.getX() <= (obj_01.getX() + obj_01.getWidth()) &&
    obj_01.getY() <= (obj_02.getY() + obj_02.getHeight()) &&
    obj_02.getY() <= (obj_01.getY() + obj_01.getHeight())) {
    colision = true;
  }
  return colision;
}

// The main game loop
function main() {
  /* clear the current canvas before update the news locations and configs. All elements !! - the
   clear method should come before all methods*/
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* this method should come before - is the order important? Yes!!*/
  requestAnimationFrame(main);
  /* another methods - with security on load in each class*/
  if (player.getReady() && enemy.getReady()) {
    update();
    checkAllColision();
    render();
  }
};

function initGame() {
  player.setX(canvas.width / 2);
  player.setY(canvas.height / 2);
  player.lastPosX = player.getX();
  player.lastPosY = player.getY();

  /* interval initial for X + final for X --- the same fort*/
  for (var k = 0; k < qtdMaxEnemies; k++) {
    arrayObjEnemies[k].randomPosition();
  }
}

/* the begining */
initGame();
main();