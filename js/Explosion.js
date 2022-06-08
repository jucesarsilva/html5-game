/**
 * @author Julio Cesar Silva
 */
class Explosion extends Engine {
  constructor(_name, _cI, _iF, _url, _type) {
    super(_name, _cI, _iF, _url, _type)

    this.permission = true;
    this.index = 0;
  }

  isAnimation() {
    /** 
     * we count the length of the array less 2, because array began in 0 and we 
     * want show the ultimate sprite, so we decrease more 1
     */
    if (index > (sprite.length - 2)) {
      permission = true;
      index = 0;
    }

    return permission;
  };

  play(_x, _y) {
    x = _x;
    y = _y;
    index = 0;
    permission = false
  };

  Animation() {
    index++;
    if (!permission)
      return sprite[index];
  };
}
