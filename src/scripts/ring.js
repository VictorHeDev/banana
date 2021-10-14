import Item from "./item.js";

export default class Ring extends Item {
  constructor(stage) {
    super(stage);
    this.spriteWidth = 512;
    this.spriteHeight = 512;
    // modifier must be the same
    this.width = 60;
    this.height = 60;
    this.x = Math.random() * 760; // canvas width is 800
    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = "src/images/ring.png";
    this.velY = Math.random() * 0.1 + 1;
    this.value = -100;

    // decrement life :(
  }
}
