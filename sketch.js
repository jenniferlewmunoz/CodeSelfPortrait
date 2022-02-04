
// Setup code goes here
function setup() {
  createCanvas(600, 600);
}

//ellipse(x-cord, y-cord, width, height)

// Draw code goes here
function draw() {
  background(209);

  // Face shape
  noStroke();
  fill(210, 180, 140);
  ellipse(width / 2, 250, 250, 300);
  ellipse(width / 2, 300, 250, 220);

  // Mouth
  fill(168, 100, 50);

  // bl= bottom lips, tl = top lip
  var bl1 = 345;
  var bl2 = 360;
  var tl = 335;

  quad(235, bl1, 365, bl1, 310, bl2, 290, bl2);
  triangle(235, bl1, 310, bl1, 290, tl);
  triangle(365, bl1, 290, bl1, 310, tl);

  // Eyes
  fill(0);
  ellipse(250, 250, 25, 25);
  ellipse(350, 250, 25, 25);
}