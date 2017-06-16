var img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER);
  img = loadImage("bitch.png");
}

function draw() {
  image(img, mouseX, mouseY+55);
}