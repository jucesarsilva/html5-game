!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function i(e){return t.exports=i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,i(e)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){var r=i(8);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){var r=i(9).default,s=i(10);t.exports=function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){"use strict";var r=i(7),s=i.n(r)()((function(t){return t[1]}));s.push([t.i,"html,body{margin:0px;padding:0px;overflow:hidden}.main{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#000;padding:10px}#canvas{border:4px solid #fff}@media (max-width: 1024px){#canvas{width:100%}}\n",""]),e.a=s},function(t,e,i){"use strict";var r,s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a=[];function o(t){for(var e=-1,i=0;i<a.length;i++)if(a[i].identifier===t){e=i;break}return e}function h(t,e){for(var i={},r=[],s=0;s<t.length;s++){var n=t[s],h=e.base?n[0]+e.base:n[0],l=i[h]||0,u="".concat(h," ").concat(l);i[h]=l+1;var c=o(u),y={css:n[1],media:n[2],sourceMap:n[3]};-1!==c?(a[c].references++,a[c].updater(y)):a.push({identifier:u,updater:g(y,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var s=i.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=n(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,c=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function y(t,e,i,r){var s=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=c(e,s);else{var n=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function p(t,e,i){var r=i.css,s=i.media,n=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,d=0;function g(t,e){var i,r,s;if(e.singleton){var n=d++;i=f||(f=l(e)),r=y.bind(null,i,n,!1),s=y.bind(null,i,n,!0)}else i=l(e),r=p.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=h(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<i.length;r++){var s=o(i[r]);a[s].references--}for(var n=h(t,e),l=0;l<i.length;l++){var u=o(i[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}i=n}}}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(r)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(s[a]=!0)}for(var o=0;o<t.length;o++){var h=[].concat(t[o]);r&&s[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},function(t,e){function i(e,r){return t.exports=i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,i(e,r)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function i(e){return t.exports=i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,i(e)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){"use strict";i.r(e);var r=i(0),s=i.n(r),n=i(1),a=i.n(n),o=i(3),h=i.n(o),l=i(4),u=i.n(l),c=i(2),y=i.n(c),p=function(){function t(e,i,r,n,a){s()(this,t),this.width=0,this.height=0,this.x=0,this.y=0,this.speed=0,this.ready=!1,this.sprite=[],this.image,this.name=e,this.type=a,this.url=n,this.iF=r,this.cI=i;var o=this;for(this.cI;this.cI<this.iF;this.cI++)this.image=new Image,this.image.src=this.url+this.cI+"."+this.type,this.image.onload=function(){o.overWriteWidth(this.width),o.overWriteHeight(this.height),o.overWriteReady(!0)},this.sprite.push(this.image)}return a()(t,[{key:"overWriteWidth",value:function(t){this.width=t}},{key:"overWriteHeight",value:function(t){this.height=t}},{key:"overWriteReady",value:function(t){this.ready=t}},{key:"getWidth",value:function(){return this.width}},{key:"setWidth",value:function(t){this.width=t}},{key:"getHeight",value:function(){return this.height}},{key:"setHeight",value:function(t){this.height=t}},{key:"getReady",value:function(){return this.ready}},{key:"getX",value:function(){return this.x}},{key:"setX",value:function(t){this.x=t}},{key:"getY",value:function(){return this.y}},{key:"setY",value:function(t){this.y=t}},{key:"getSpeed",value:function(){return this.speed}},{key:"setSpeed",value:function(t){this.speed=t}}]),t}();function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=y()(t);if(e){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return u()(this,i)}}var d=function(t){h()(i,t);var e=f(i);function i(t,r,n,a,o){var h;return s()(this,i),(h=e.call(this,t,r,n,a,o)).speed=3,h}return a()(i)}(p);function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=y()(t);if(e){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return u()(this,i)}}var m=function(t){h()(i,t);var e=g(i);function i(t,r,n,a,o){var h;return s()(this,i),(h=e.call(this,t,r,n,a,o)).speed=4,h.ready=!1,h}return a()(i,[{key:"randomPosition",value:function(t){this.x=t.clientWidth+this.width+500*Math.random(),this.y=this.height+Math.random()*(t.clientHeight-this.height)}}]),i}(p);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=y()(t);if(e){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return u()(this,i)}}var b=function(t){h()(i,t);var e=v(i);function i(t,r,n,a,o){var h;return s()(this,i),(h=e.call(this,t,r,n,a,o)).speed=5,h.ready=!1,h.respaw=!1,h.timerRespaw=0,h.shotInterval=20,h.timerShot=0,h.fire=!0,h.increment=.5,h.lastPosX=0,h.lastPosY=0,h.vy=0,h.vx=0,h.VelocMaxDown=h.speed,h.VelocMaxUp=-h.speed,h.VelocMaxRigth=h.speed,h.VelocMaxLeft=-h.speed,h.constFrenagem=.96,h}return a()(i,[{key:"getTimerRespaw",value:function(){return this.timerRespaw}},{key:"isRespaw",value:function(){return this.respaw&&(this.timerRespaw++,this.timerRespaw>300&&(this.respaw=!1,this.timerRespaw=0)),this.respaw}},{key:"play",value:function(){this.respaw=!0}}]),i}(p);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=y()(t);if(e){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return u()(this,i)}}var w=function(t){h()(i,t);var e=x(i);function i(t,r,n,a,o){var h;return s()(this,i),(h=e.call(this,t,r,n,a,o)).fired=!1,h.fireMoment=0,h.speed=7,h.PFS=25,h}return a()(i)}(p);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=y()(t);if(e){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return u()(this,i)}}var j=function(t){h()(i,t);var e=O(i);function i(t,r,n,a,o){var h;return s()(this,i),(h=e.call(this,t,r,n,a,o)).permission=!0,h.index=0,h}return a()(i,[{key:"isAnimation",value:function(){return this.index>this.sprite.length-2&&(this.permission=!0,this.index=0),this.permission}},{key:"play",value:function(t,e){t&&e&&(this.x=t,this.y=e,this.index=0,this.permission=!1)}},{key:"Animation",value:function(){if(this.index++,!this.permission)return this.sprite[this.index]}}]),i}(p),S=function(){function t(){var e=this;s()(this,t),this.left=!1,this.right=!1,this.down=!1,this.up=!1,this.space=!1,this.keysDown={},window.addEventListener("keydown",(function(t){e.keysDown[t.keyCode]=!0}),!1),window.addEventListener("keyup",(function(t){delete e.keysDown[t.keyCode]}),!1),this.upDateKeys()}return a()(t,[{key:"upDateKeys",value:function(){38 in this.keysDown?this.up=!0:40 in this.keysDown?this.down=!0:(this.down=!1,this.up=!1),37 in this.keysDown?this.left=!0:39 in this.keysDown?this.right=!0:(this.left=!1,this.right=!1),32 in this.keysDown?this.space=!0:this.space=!1}},{key:"getKeyUp",value:function(){return this.up}},{key:"getKeyDown",value:function(){return this.down}},{key:"getKeyLeft",value:function(){return this.left}},{key:"getKeyRight",value:function(){return this.right}},{key:"getKeySpace",value:function(){return this.space}}]),t}(),E=function(){function t(){s()(this,t),this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.arrayObjPlayerShot=[],this.shotPlayerObjSound=[],this.arrayObjEnemies=[],this.arrayObjShotEnemies=[],this.arrayExplosionEnemies=[],this.explosionEnemiesObj=[],this.qtdMaxEnemies=5,this.kills=0,this.deads=0,this.shots=0,this.startThemeMusic(),this.startScenario(),this.startPlayer(),this.startCollections(),this.startKeyboard()}return a()(t,[{key:"startThemeMusic",value:function(){new Howl({src:["../sounds/starcraft.mp3"],autoplay:!0,loop:!0,volume:.5}).play()}},{key:"startScenario",value:function(){this.bg_0=new d("bg_0",0,2,"images/bg/background_","png"),this.bg_1=new d("bg_1",0,2,"images/bg/background_","png"),this.bg_0.setX(0),this.bg_0.setY(0),this.bg_1.setX(900),this.bg_1.setY(0)}},{key:"startPlayer",value:function(){this.player=new b("player",0,2,"images/playerSprites/player_","png"),this.player.setX(this.canvas.width/2),this.player.setY(this.canvas.height/2),this.player.lastPosX=this.player.getX(),this.player.lastPosY=this.player.getY()}},{key:"startCollections",value:function(){for(var t=0;t<this.qtdMaxEnemies;t++){var e=new m("enemy_"+t,0,1,"images/enemiesImage/enemy_","png");this.arrayObjEnemies.push(e);var i=new w("shot"+this.arrayObjShotEnemies.length,0,1,"images/shotEnemy/shot_","png");i.fireMoment=parseInt(200+850*Math.random()),this.arrayObjShotEnemies.push(i);var r=new j("explosion"+this.arrayExplosionEnemies.length,0,32,"images/explosions/exp_","png");this.arrayExplosionEnemies.push(r);var s=new Audio("sounds/explosion.mp3");this.explosionEnemiesObj.push(s)}for(var n=0;n<this.qtdMaxEnemies;n++)this.arrayObjEnemies[n].randomPosition(this.canvas)}},{key:"startKeyboard",value:function(){this.keyboard=new S}},{key:"updateKeyboard",value:function(){this.keyboard.upDateKeys()}},{key:"update",value:function(){this.updatePlayerPositions(),this.updateEnemiesPositions(),this.updateScenarioPositions()}},{key:"updatePlayerPositions",value:function(){if(this.keyboard.getKeyLeft()?this.player.vx-=this.player.increment:this.keyboard.getKeyRight()?this.player.vx+=this.player.increment:this.player.vx*=this.player.constFrenagem,this.keyboard.getKeyUp()?this.player.vy-=this.player.increment:this.keyboard.getKeyDown()?this.player.vy+=this.player.increment:this.player.vy*=this.player.constFrenagem,this.player.timerShot++,this.player.timerShot>this.player.shotInterval&&(this.player.fire=!0),this.keyboard.getKeySpace()&&!this.player.isRespaw()&&this.player.fire){var t=new w("shot"+this.arrayObjPlayerShot.length,0,1,"images/shotPlayer/shot_","png"),e=this.arrayObjPlayerShot.length;this.arrayObjPlayerShot.push(t),this.arrayObjPlayerShot[e].setX(this.player.getX()+this.player.getWidth()/2),this.arrayObjPlayerShot[e].setY(this.player.getY()+this.player.getHeight()/2.5),this.arrayObjPlayerShot[e].setSpeed(this.player.getSpeed()/4+7),this.player.fire=!1,this.player.timerShot=0,this.shots++;var i=new Audio("sounds/shoot.mp3");this.shotPlayerObjSound.push(i);var r=this.shotPlayerObjSound.length-1;this.shotPlayerObjSound[r].play()}if(this.player.vy>this.player.VelocMaxDown?this.player.vy=this.player.VelocMaxDown:this.player.vy<this.player.VelocMaxUp&&(this.player.vy=this.player.VelocMaxUp),this.player.vx>this.player.VelocMaxRigth?this.player.vx=this.player.VelocMaxRigth:this.player.vx<this.player.VelocMaxLeft&&(this.player.vx=this.player.VelocMaxLeft),parseInt(this.player.getY())>0&&parseInt(this.player.getY())<this.canvas.height-this.player.getHeight()&&parseInt(this.player.getX())>0&&parseInt(this.player.getX())<this.canvas.width-this.player.getWidth()?(this.player.lastPosX=parseInt(this.player.getX()),this.player.lastPosY=parseInt(this.player.getY()),this.player.setX(this.player.getX()+this.player.vx),this.player.setY(this.player.getY()+this.player.vy)):(this.player.vy=0,this.player.vx=0,this.player.setX(this.player.lastPosX),this.player.setY(this.player.lastPosY)),this.arrayObjPlayerShot.length>0)for(var s=0;s<this.arrayObjPlayerShot.length;s++)this.arrayObjPlayerShot[s].setX(this.arrayObjPlayerShot[s].getX()+this.arrayObjPlayerShot[s].getSpeed()),this.arrayObjPlayerShot[s].getX()>this.canvas.width&&(this.arrayObjPlayerShot.shift(),this.shotPlayerObjSound.shift())}},{key:"updateEnemiesPositions",value:function(){for(var t=0;t<this.qtdMaxEnemies;t++)this.arrayObjEnemies[t].setX(this.arrayObjEnemies[t].getX()-this.arrayObjEnemies[t].getSpeed()),this.arrayObjEnemies[t].getX()<-100&&this.arrayObjEnemies[t].randomPosition(this.canvas),0==this.arrayObjShotEnemies[t].fired?(this.arrayObjShotEnemies[t].setX(this.arrayObjEnemies[t].getX()),this.arrayObjShotEnemies[t].setY(this.arrayObjEnemies[t].getY()+this.arrayObjEnemies[t].getHeight()/2.5),this.arrayObjShotEnemies[t].getX()<this.arrayObjShotEnemies[t].fireMoment&&this.arrayObjShotEnemies[t].getX()>this.arrayObjShotEnemies[t].fireMoment-100&&(this.arrayObjShotEnemies[t].fired=!0)):(this.arrayObjShotEnemies[t].setX(this.arrayObjShotEnemies[t].getX()-this.arrayObjShotEnemies[t].getSpeed()),this.arrayObjShotEnemies[t].getX()<-70&&(this.arrayObjShotEnemies[t].fired=!1,this.arrayObjShotEnemies[t].fireMoment=parseInt(200+850*Math.random())))}},{key:"updateScenarioPositions",value:function(){this.bg_0.setX(this.bg_0.getX()-this.bg_0.getSpeed()),this.bg_0.getX()<=-this.canvas.width&&this.bg_0.setX(this.canvas.width),this.bg_1.setX(this.bg_1.getX()-this.bg_1.getSpeed()),this.bg_1.getX()<=-this.canvas.width&&this.bg_1.setX(this.canvas.width)}},{key:"checkAllColision",value:function(){if(!this.player.isRespaw())for(var t=0;t<this.arrayObjEnemies.length;t++)this.isCollision(this.player,this.arrayObjEnemies[t])?(this.arrayExplosionEnemies[t].play(this.arrayObjEnemies[t].getX(),this.arrayObjEnemies[t].getY()),this.arrayObjEnemies[t].randomPosition(this.canvas),this.deads++,this.explosionEnemiesObj[t].play(),this.player.play()):this.isCollision(this.player,this.arrayObjShotEnemies[t])&&(this.arrayObjShotEnemies[t].setX(-100),this.deads++,this.player.play());if(this.arrayObjPlayerShot.length>0)for(var e=0;e<this.arrayObjPlayerShot.length;e++)for(var i=0;i<this.arrayObjEnemies.length;i++)this.isCollision(this.arrayObjPlayerShot[e],this.arrayObjEnemies[i])?(this.arrayExplosionEnemies[i].play(this.arrayObjEnemies[i].getX(),this.arrayObjEnemies[i].getY()),this.arrayObjEnemies[i].setX(-100),this.arrayObjPlayerShot[e].setX(2e3),this.kills++,this.explosionEnemiesObj[i].play()):this.isCollision(this.arrayObjPlayerShot[e],this.arrayObjShotEnemies[i])&&(this.player.isRespaw()||(this.arrayObjShotEnemies[i].setX(-100),this.arrayObjPlayerShot[e].setX(2e3),this.kills++))}},{key:"draw",value:function(){if(this.ctx.drawImage(this.bg_0.sprite[0],this.bg_0.getX(),this.bg_0.getY()),this.ctx.drawImage(this.bg_1.sprite[0],this.bg_1.getX(),this.bg_1.getY()),this.player.isRespaw?this.player.getTimerRespaw()%3==0?this.ctx.drawImage(this.player.sprite[0],this.player.getX(),this.player.getY()):this.ctx.drawImage(this.player.sprite[1],this.player.getX(),this.player.getY()):this.ctx.drawImage(this.player.sprite[0],this.player.getX(),this.player.getY()),this.arrayObjPlayerShot.length>0)for(var t=0;t<this.arrayObjPlayerShot.length;t++)this.ctx.drawImage(this.arrayObjPlayerShot[t].sprite[0],this.arrayObjPlayerShot[t].getX(),this.arrayObjPlayerShot[t].getY());for(var e=0;e<this.qtdMaxEnemies;e++)this.ctx.drawImage(this.arrayObjShotEnemies[e].sprite[0],this.arrayObjShotEnemies[e].getX(),this.arrayObjShotEnemies[e].getY()),this.ctx.drawImage(this.arrayObjEnemies[e].sprite[0],this.arrayObjEnemies[e].getX(),this.arrayObjEnemies[e].getY()),this.arrayExplosionEnemies[e].isAnimation()||this.ctx.drawImage(this.arrayExplosionEnemies[e].Animation(),this.arrayExplosionEnemies[e].getX(),this.arrayExplosionEnemies[e].getY());this.ctx.drawImage(this.bg_0.sprite[1],this.bg_0.getX()+1,this.bg_0.getY()),this.ctx.drawImage(this.bg_1.sprite[1],this.bg_1.getX()+1,this.bg_1.getY()),this.ctx.fillStyle="#fff",this.ctx.font="24px Helvetica",this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.fillText("Deads: "+this.deads,10,12),this.ctx.fillStyle="#fff ",this.ctx.font="24px Helvetica",this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.fillText("Kills: "+this.kills,120,12)}},{key:"isCollision",value:function(t,e){var i=!1;return t.getX()<=e.getX()+e.getWidth()&&e.getX()<=t.getX()+t.getWidth()&&t.getY()<=e.getY()+e.getHeight()&&e.getY()<=t.getY()+t.getHeight()&&(i=!0),i}},{key:"render",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.player.getReady()&&(this.updateKeyboard(),this.update(),this.checkAllColision(),this.draw())}}]),t}(),_=i(6),k=i.n(_),P=i(5),X={insert:"head",singleton:!1};k()(P.a,X),P.a.locals,e.default=(window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},void(window.onload=function(){var t=new E;!function e(){requestAnimationFrame(e),t.render()}()}))}]);