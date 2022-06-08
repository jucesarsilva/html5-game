/**
 * @author Julio Cesar Silva
 */
class KeyBoard {
  constructor() {
    this.left = false;
    this.right = false;
    this.down = false;
    this.up = false;
    this.space = false;
    this.keysDown = {};

    window.addEventListener("keydown", (e) => {
      this.keysDown[e.keyCode] = true;
    }, false);
  
    window.addEventListener("keyup", (e) => {
      delete this.keysDown[e.keyCode];
    }, false);

    this.upDateKeys();
  }

  upDateKeys() {
    // requestAnimationFrame(this.upDateKeys);
    
    // key up
    if (38 in this.keysDown) {
      this.up = true;
    }
    //key down
    else if (40 in this.keysDown) {
      this.down = true;
    }
    //none
    else {
      this.down = false;
      this.up = false;
    }

    //key left
    if (37 in this.keysDown) {
      this.left = true;
    }
    //key right
    else if (39 in this.keysDown) {
      this.right = true;
    }
    //none
    else {
      this.left = false;
      this.right = false;
    }

    /* key for player's shot*/
    if (32 in this.keysDown) {
      this.space = true;
    }
    else {
      this.space = false;
    }
  };

  /* methods for update status of the public keys */
  getKeyUp() {
    return this.up;
  };

  getKeyDown() {
    return this.down;
  };

  getKeyLeft() {
    return this.left;
  };

  getKeyRight() {
    return this.right;
  };

  getKeySpace() {
    return this.space;
  };
}