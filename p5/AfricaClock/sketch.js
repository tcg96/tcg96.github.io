// Original by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY

var img;

function setup() {
    img = loadImage("africavinyl.jpg");
    createCanvas(1000, 1000);
    angleMode(DEGREES);
}

function draw() {
    background(img);
    translate(width/2, height/2);
    rotate(-90);
   
    var h = hour();
    var m = minute();
    var s = second(); 

    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    var secondAngle = map(s, 0, 60, 0, 360);
    var minuteAngle = map(m, 0, 60, 0, 360) + map(secondAngle, 0, 360, 0, 6);
    var hourAngle = map(h % 12, 0, 12, 0, 360) + map(minuteAngle, 0, 360, 0, 30);

    push();
    rotate(hourAngle);
    strokeWeight(20);
    stroke(100, 100, 50);
    line(-20, 0, 150, 0);
    pop();
	
    push();
    rotate(minuteAngle);
    strokeWeight(12);
    stroke(100, 100, 50);
    line(-20, 0, 220, 0);
    pop();
	
	push();
    rotate(secondAngle);
    strokeWeight(9);
    stroke(200, 0, 0);
    line(-20, 0, 270, 0);
    pop();

    strokeWeight(30);
    stroke(255);
    point(0, 0);

    noStroke();
    fill(255);
    textSize(24);
}