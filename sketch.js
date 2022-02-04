// Global Variables
var gDebugMode = false;

// Setup code
function setup() {
  createCanvas(1200, 600);

  ellipseMode(CENTER);

  textSize(24);
  textAlign(LEFT);
}

// Draw code
function draw() {
  background(0);

  fill(240, 120, 0);
  ellipse(width / 2, heigh / 2, 200, 100);

  if (gDebugMode == true) {
    drawDebugInfo();
  }
}

function drawDebugInfo() {
  fill(255);
  text("X: " + mouseX + " Y: " + mouseY, 20, height - 20);
}