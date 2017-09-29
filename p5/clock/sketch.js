// Original by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY

function setup() {
   createCanvas(400, 400);
   angleMode(DEGREES);
 }

 function draw() {
   background(0);
   translate(width/2, height/2);
   rotate(-90);
   
   let h = hour();
   let m = minute();
   let s = second();

   strokeWeight(8);
   stroke(255, 100, 150);
   noFill();
   let secondAngle = map(s, 0, 60, 0, 360);
   arc(0, 0, 300, 300, 0, secondAngle);

   stroke(150, 100, 255);
   let minuteAngle = map(m, 0, 60, 0, 360) + map(secondAngle, 0, 360, 0, 6);
   arc(0, 0, 280, 280, 0, minuteAngle);

   stroke(150, 255, 100);
   let hourAngle = map(h % 12, 0, 12, 0, 360) + map(minuteAngle, 0, 360, 0, 30);
   arc(0, 0, 260, 260, 0, hourAngle);

   push();
   rotate(secondAngle);
   strokeWeight(3);
   stroke(255, 100, 150);
   line(0, 0, 120, 0);
   pop();

   push();
   rotate(minuteAngle);
   strokeWeight(6);
   stroke(150, 100, 255);
   line(0, 0, 100, 0);
   pop();

   push();
   rotate(hourAngle);
   strokeWeight(9);
   stroke(150, 255, 100);
   line(0, 0, 75, 0);
   pop();

   strokeWeight(30);
   stroke(255);
   point(0, 0);
   
   noStroke();
   fill(255);
   textSize(24);
   
   push();
   rotate(90 + 360/12);
   textAlign(CENTER);
   for (let i = 1; i <= 12; i++) {
      text(i, 0, -height/4);
      rotate(30);
   }
   pop();
   
 }