function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);

  // Face & nose
  strokeWeight(0);
  fill(235, 161, 129);

  drawFaceOutline();
  drawNose(305, 200);

  // Lips
  fill(200, 161, 129);
  drawLips(300, 245);

  // Between lips
  strokeWeight(1);
  stroke(200, 161, 129);

  line(265, 247, 303, 250);
  line(303, 250, 335, 247);

  // Eyes
  strokeWeight(0);
  fill(0);

  drawEye(235, 180);
  drawEye(315, 183);

  // Hair
  fill(84, 40, 20);
  drawHair();

  // Interactive shirt
  color = map(mouseY, 0, 300, 0, 255);
  fill(color);
  drawShirt();

  // Arms
  fill(235, 161, 129);
  drawBody();
}

/**
 * Draws a face outline
 */
function drawFaceOutline() {
  let sz = 10;

  ellipse(300, 100, sz, sz);
  ellipse(320, 100, sz, sz);
  ellipse(340, 105, sz, sz);
  ellipse(360, 125, sz, sz);
  ellipse(373, 150, sz, sz);
  ellipse(375, 170, sz, sz);
  ellipse(375, 190, sz, sz);
  ellipse(370, 210, sz, sz);
  ellipse(370, 230, sz, sz);
  ellipse(365, 250, sz, sz);
  ellipse(350, 265, sz, sz);
  ellipse(330, 280, sz, sz);
  ellipse(315, 292, sz, sz);
  ellipse(290, 292, sz, sz);
  ellipse(270, 285, sz, sz);
  ellipse(250, 275, sz, sz);
  ellipse(233, 260, sz, sz);
}

/**
 * Draws nose at (x, y)
 * @param {x,y} top of the nose
 */
function drawNose(x, y) {
  // Size of ellipse
  let sz = 4;

  // Nose outline
  ellipse(x, y, sz, sz);
  ellipse(x, y + 6, sz, sz);
  ellipse(x + 1, y + 12, sz, sz);
  ellipse(x + 3, y + 18, sz, sz);
  ellipse(x + 4, y + 24, sz, sz);
  ellipse(x, y + 26, sz, sz);
  ellipse(x - 5, y + 26, sz, sz);
}

/**
 * Draws a set of lips at (x,y)
 * @param {x,y} middle of the top lip
 */
function drawLips(x, y) {
  // Size of ellipse
  let sz = 3;

  // Top lip
  ellipse(x, y, sz, sz);
  ellipse(x - 6, y - 3, sz, sz);
  ellipse(x + 6, y - 3, sz, sz);
  ellipse(x - 12, y - 2.5, sz, sz);
  ellipse(x + 12, y - 2.5, sz, sz);
  ellipse(x - 18, y - 1.5, sz, sz);
  ellipse(x + 18, y - 1.5, sz, sz);
  ellipse(x - 24, y - 1, sz, sz);
  ellipse(x + 24, y - 1, sz, sz);
  ellipse(x - 30, y, sz, sz);
  ellipse(x + 30, y, sz, sz);
  ellipse(x - 36, y + 1, sz, sz);
  ellipse(x + 36, y + 1, sz, sz);

  // Bottom lip
  ellipse(x - 30, y + 5, sz, sz);
  ellipse(x + 30, y + 5, sz, sz);
  ellipse(x - 24, y + 7, sz, sz);
  ellipse(x + 24, y + 7, sz, sz);
  ellipse(x - 18, y + 8, sz, sz);
  ellipse(x + 18, y + 8, sz, sz);
  ellipse(x - 12, y + 9, sz, sz);
  ellipse(x + 12, y + 9, sz, sz);
  ellipse(x - 6, y + 10, sz, sz);
  ellipse(x + 6, y + 10, sz, sz);
  ellipse(x, y + 10, sz, sz);
}

/**
 * Draws eye brows, eye lids, and eye balls together
 * @param {x,y} very left of the eyelid 
 */
function drawEye(x, y) {

  // Eyelash
  let lashSize = 4;

  ellipse(x + 2, y - 22, lashSize, lashSize);
  ellipse(x + 8, y - 26, lashSize, lashSize);
  ellipse(x + 14, y - 30, lashSize, lashSize);
  ellipse(x + 22, y - 33, lashSize, lashSize);
  ellipse(x + 30, y - 33, lashSize, lashSize);
  ellipse(x + 30, y - 33, lashSize, lashSize);
  ellipse(x + 38, y - 31, lashSize, lashSize);
  ellipse(x + 45, y - 28, lashSize, lashSize);

  // Eyelid
  let lidSize = 6;

  ellipse(x + 6, y - 6, lidSize, lidSize);
  ellipse(x + 14, y - 10, lidSize, lidSize);
  ellipse(x + 23, y - 12, lidSize, lidSize);
  ellipse(x + 32, y - 12, lidSize, lidSize);
  ellipse(x + 42, y - 10, lidSize, lidSize);
  ellipse(x + 50, y - 5, lidSize, lidSize);

  // Eyeball
  ellipse(x + 32, y, 22, 22);
}

/**
 * Draws outline of hair
 */
function drawHair() {

  let sz = 8;

  // Left side of hair
  ellipse(308, 72, sz, sz);
  ellipse(290, 65, sz, sz);
  ellipse(270, 64, sz, sz);
  ellipse(250, 72, sz, sz);
  ellipse(230, 90, sz, sz);
  ellipse(215, 115, sz, sz);
  ellipse(200, 160, sz, sz);
  ellipse(193, 190, sz, sz);
  ellipse(185, 220, sz, sz);
  ellipse(190, 240, sz, sz);
  ellipse(185, 260, sz, sz);
  ellipse(185, 260, sz, sz);
  ellipse(178, 280, sz, sz);
  ellipse(170, 300, sz, sz);
  ellipse(155, 325, sz, sz);
  ellipse(135, 340, sz, sz);
  ellipse(120, 360, sz, sz);
  ellipse(105, 390, sz, sz);

  ellipse(150, 340, sz, sz);
  ellipse(140, 360, sz, sz);
  ellipse(135, 380, sz, sz);
  ellipse(127, 400, sz, sz);
  ellipse(130, 420, sz, sz);

  ellipse(205, 260, sz, sz);
  ellipse(202, 280, sz, sz);
  ellipse(198, 300, sz, sz);
  ellipse(190, 320, sz, sz);
  ellipse(178, 340, sz, sz);
  ellipse(165, 360, sz, sz);
  ellipse(150, 380, sz, sz);
  ellipse(143, 400, sz, sz);
  ellipse(140, 420, sz, sz);
  ellipse(142, 435, sz, sz);
  ellipse(145, 450, sz, sz);

  ellipse(225, 300, sz, sz);
  ellipse(220, 315, sz, sz);
  ellipse(210, 330, sz, sz);

  ellipse(300, 98, sz, sz);
  ellipse(280, 105, sz, sz);
  ellipse(260, 125, sz, sz);
  ellipse(250, 140, sz, sz);
  ellipse(235, 165, sz, sz);
  ellipse(230, 190, sz, sz);
  ellipse(225, 230, sz, sz);
  ellipse(230, 250, sz, sz);
  ellipse(230, 250, sz, sz);
  ellipse(240, 290, sz, sz);
  ellipse(255, 330, sz, sz);
  ellipse(260, 345, sz, sz);

  ellipse(250, 100, sz, sz);
  ellipse(270, 85, sz, sz);
  ellipse(235, 120, sz, sz);
  ellipse(225, 140, sz, sz);

  // Right side of hair
  ellipse(330, 68, sz, sz);
  ellipse(355, 80, sz, sz);
  ellipse(370, 100, sz, sz);
  ellipse(385, 130, sz, sz);
  ellipse(393, 150, sz, sz);
  ellipse(393, 150, sz, sz);
  ellipse(405, 175, sz, sz);
  ellipse(400, 190, sz, sz);
  ellipse(403, 210, sz, sz);
  ellipse(403, 235, sz, sz);
  ellipse(405, 260, sz, sz);
  ellipse(405, 260, sz, sz);
  ellipse(407, 280, sz, sz);
  ellipse(410, 305, sz, sz);
  ellipse(415, 320, sz, sz);

  ellipse(382, 250, sz, sz);
  ellipse(384, 270, sz, sz);
  ellipse(388, 290, sz, sz);
}

/**
 * Draws a shirt
 */
function drawShirt() {

  let sz = 8;

  // Line of ellipses across the chest
  for (let i = 207; i < 380; i += 20) {
    ellipse(i, 400, sz, sz);
  }

  // Top left arm curve
  ellipse(215, 375, sz, sz);
  ellipse(213, 350, sz, sz);
  ellipse(206, 320, sz, sz);

  // Top right arm curve
  ellipse(365, 375, sz, sz);
  ellipse(367, 350, sz, sz);
  ellipse(374, 320, sz, sz);

  // Over right shoulder
  ellipse(400, 324, sz, sz);
  ellipse(425, 333, sz, sz);
  ellipse(444, 352, sz, sz);
  ellipse(460, 375, sz, sz);
  ellipse(475, 400, sz, sz);

  // Left shirt cuff
  ellipse(110, 405, sz, sz);
  ellipse(120, 425, sz, sz);
  ellipse(150, 420, sz, sz);
  ellipse(166, 430, sz, sz);
  ellipse(182, 438, sz, sz);

  // Right shirt cuff
  ellipse(450, 408, sz, sz);
  ellipse(430, 417, sz, sz);
  ellipse(406, 430, sz, sz);
  ellipse(475, 425, sz, sz);

  // Left chest
  ellipse(184, 465, sz, sz);
  ellipse(190, 492, sz, sz);
  ellipse(100, 400, sz, sz);
  ellipse(100, 400, sz, sz);

  // Right chest
  ellipse(405, 456, sz, sz);
  ellipse(395, 487, sz, sz);
}

/**
 * Draws the portrait's neck, and arms
 */
function drawBody() {

  let sz = 10;

  // Neck
  ellipse(340, 288, sz, sz);
  ellipse(333, 311, sz, sz);
  ellipse(325, 334, sz, sz);
  ellipse(250, 310, sz, sz);
  ellipse(354, 314, sz, sz);

  // Left Arm
  ellipse(120, 410, sz, sz);
  ellipse(118, 436, sz, sz);
  ellipse(117, 460, sz, sz);
  ellipse(119, 486, sz, sz);

  // Right Arm
  ellipse(466, 410, sz, sz);
  ellipse(468, 433, sz, sz);
  ellipse(470, 454, sz, sz);
  ellipse(468, 480, sz, sz);

}

