let dots = [50];
let neonColors = [];
let currentColor;

function setup() {
  createCanvas(800, 550);
  textFont();
  textAlign(CENTER,CENTER);

  // Neon palette for different colors effect.
  neonColors = [
    color(57, 255, 20),    // green
    color(255, 20, 147),   // pink
    color(0, 255, 255),    // cyan
    color(255, 255, 0),    // yellow
    color(180, 0, 255),    // purple
    color(255, 102, 0),    // orange
    color(0, 191, 255)     // blue
  ];

  // starting neon colors
  currentColor = random(neonColors);

  for (let x = 50; x < width; x += 25) {
    for (let y = 50; y < height; y += 25) {
      dots.push({
        x: x,
        y: y,
        ox: x,
        oy: y,
        active: false});
    }}
}

function draw() {
  background(10);
  // Instruction text for a clear understanding
  drawingContext.shadowBlur = 15;
  drawingContext.shadowColor = "#FFF491";
  fill(255);
  textSize(14);
  text(
    "Instruction: Keep holding the mouse to change colors", width / 2,40);
  
  // if mouse is pressed 
  if (mouseIsPressed) {
    currentColor = random(neonColors);
  }
  for (let d of dots) {
    let distance = dist(mouseX, mouseY, d.x, d.y);
    if (distance < 140) {
      let angle = atan2(d.y - mouseY, d.x - mouseX);

      // swirl motion
      angle += 0.2;
      let force = map(distance, 0, 140, 10, 0);
      d.x += cos(angle) * force;
      d.y += sin(angle) * force;
      d.active = true; 
    } 
    else
    {d.active = false;
    }

    // return home
    d.x = lerp(d.x, d.ox, 0.04);
    d.y = lerp(d.y, d.oy, 0.04);

    // color changes only when touched, keep holding and you will have multiple colors
    let c = d.active ? currentColor : color(180);

    // for the neon colors to glow.
    drawingContext.shadowBlur = d.active ? 20 : 0;
    drawingContext.shadowColor = c;

    fill(c);
    noStroke();
    rect(d.x, d.y, 12, 12, 3);
  }
}