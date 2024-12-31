let playerState = "run";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function (e) {
  playerState = e.target.value;
});
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteAnimation = [];
const aniamtionState = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];
const playerImage = new Image();
playerImage.src = "./shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrame = 5;

aniamtionState.forEach((item, index) => {
  let frames = {
    loc: [],
  };
  for (let i = 0; i < item.frames; i++) {
    let positionX = i * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimation[item.name] = frames.loc;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameFrame / staggerFrame) % spriteAnimation[playerState].length;
  frameX = spriteWidth * position;
  frameY = spriteAnimation[playerState][position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
