var gDebug = true;
var img;

function preload() {
  img = loadImage('drawing.png');
}
function setup() {
  createCanvas(600, 600);

  textSize(20);
  textAlign(LEFT);
}

function draw() {
  background(200);
  //image(img, 50, 10, 500, 550);

  noStroke();
  fill(235, 161, 129); //skin color
  ellipse(300, 100, 10, 10);
  ellipse(320, 100, 10, 10);
  ellipse(340, 105, 10, 10);
  ellipse(360, 125, 10, 10);

  if (gDebug == true) {
    drawDebugInfo();
  }
}

function drawDebugInfo() {
  fill(255);
  text("X: " + mouseX + "  Y: " + mouse7, 20, height - 20);
}