function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  // i took font from google fonts
  textFont("Pixelify Sans");
}

function draw() {
  background(5, 5, 15);
  translate(width / 2, height / 2);
  let hr = hour();
  let mn = minute();
  let sc = second();

  // Convert hour to 12-hour format
  let displayHr = hr % 12;
  if (displayHr == 0) displayHr = 12;

  // Draw glowing rings since i wanted it neon and to change the size of each ring
  drawRing(sc, 60, 250, color(0, 255, 255), 10, 25);
  drawRing(mn, 60, 200, color(255, 0, 255), 6, 25);
  drawRing(displayHr, 12, 150, color(57, 255, 20), 12, 15);

  // Center for the digital time display and the size adjustments
  noStroke();
  fill(255);
  textSize(48);
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(255);
  text(nf(displayHr, 2) + ":" + nf(mn, 2) + ":" + nf(sc, 2), 0, 0);
}

function drawRing(value, maxValue, radius, glowColor, size, glow) {
  for (let i = 0; i < maxValue; i++) {
    let angle = map(i, 0, maxValue, -90, 270);
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    if (i < value) {
      // Neon colors to glow.
      drawingContext.shadowBlur = glow;
      drawingContext.shadowColor = glowColor;
      fill(glowColor);
      textSize(size + 8);
    } else {
      drawingContext.shadowBlur = 0;
      fill(50);
      textSize(size);
    }
    noStroke();
    push();
    translate(x, y);
    rotate(angle + 90);

    // for the Numbers around ring
    text(i, 0, 0);
    pop();
  }
}
