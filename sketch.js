var name = "Avni";

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  console.log(name);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}