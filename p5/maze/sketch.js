// Original by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// 10PRINT
// Video coming soon

var x = 0;
var y = 0;
var spacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(3);
  if (random(1) < .5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}