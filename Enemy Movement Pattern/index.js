/** @type{HTMLCanvasElement}*/
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = document.documentElement.clientWidth);
const CANVAS_HEIGHT = (canvas.height = document.documentElement.clientHeight);
const nubmerOfEnemies = 50;
let idVal = 1;
let frameSpeed = 0;
const enemiesArray = [];
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "./enemies/enemy1.png";
    this.spriteWidth = 293;
    this.spriteHeight = 150;
    this.id = idVal;
    this.width = this.spriteWidth / 3;
    this.height = this.spriteHeight / 3;
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
    this.speed = Math.random() * 4 - 2;
    this.frames = 0;
    this.flapSpeed = Math.floor(Math.random() * 4 + 2);
    idVal = idVal + 1;
  }
  update() {
    if ((frameSpeed * this.flapSpeed) % 2 == 0) {
      this.frames = this.frames < 4 ? ++this.frames : 0;
      this.x += Math.random() * 5 - 2.5;
      this.y += Math.random() * 5 - 2.5;
      if (this.x < 0) {
        this.x = 2.5;
      }
      if (this.y < 0) {
        this.y = 2.5;
      }
      if (this.x > canvas.width - this.width) {
        this.x = canvas.width - this.width;
      }
      if (this.y > canvas.height - this.height) {
        this.y = canvas.height - this.height;
      }
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frames * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < nubmerOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((enemy, index) => {
    enemy.update();
    enemy.draw();
  });
  frameSpeed = frameSpeed + 1;
  requestAnimationFrame(animate);
}

animate();
