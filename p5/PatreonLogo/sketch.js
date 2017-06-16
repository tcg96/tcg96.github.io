function setup() {
  createCanvas(windowWidth, windowWidth/3); // you can change it to what you want, but if you don't use a 3/1 aspect ratio, it'll look more screwed up than the actual logo
  var s = width/3, t = s*2;
  var stickx = s/4, sticky = height-stickx*2; // x and y coordinates for the first stick
  var stickwidth = s/10.5;
  var circlex = s/1.75, circley = s/2.33;
  var diameter = height/2.8;
  // All of these measurements were done by eye, they're not accurate

  rectMode(CORNER);
  noStroke();

  // First let's draw the backgrounds
  fill(255); // white
  rect(0, 0, s, height); // first background

  fill("#F96854"); // patreon's orange (https://www.patreon.com/brand/guidelines)
  rect(s, 0, t, height); // second background

  fill("#052D49"); // patreon's blue
  rect(t, 0, width, height); // third background

  // Now we can draw the logo components
  // Fill was last set to blue, so let's use this to draw the first two sticks
  rect(stickx, stickx, stickwidth, sticky); // first stick
  rect(stickx + s, stickx, stickwidth, sticky); // second stick

  fill("#F96854"); // now we have to set the fill back to orange
  ellipse(circlex, circley, diameter, diameter); // first circle
  rect(stickx + t, stickx, stickwidth, sticky); // third stick that would be covered by the background if it was drawn earlier

  fill(255); // finally white
  ellipse(circlex + s, circley, diameter, diameter); // second circle
  ellipse(circlex + t, circley, diameter, diameter); // third circle
}

function draw() {

}