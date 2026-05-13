let p1,p2;
let finishLine;
let win = false;
let winner = "";
//for the size of the balls and the color as well (took colors from html color codes)
function setup() {
  createCanvas(800, 400);
  userStartAudio();
  p1 = {x: 100,y: height * 0.35,speed: 0,color: color(0,255, 180)}; 
  p2 = { x: 100,y: height * 0.65,speed: 0,color: color(255, 80, 180)};
  finishLine = width -80;
  textAlign(CENTER, CENTER);
}

function draw() {
  background(99, 180, 207);
  drawTrack();
  drawPlayers();
  if (!win) {
    updatePlayers();
    checkWin();
  } 
  else {
    drawWinScreen();
  }
}

// for the track of the run game
function drawTrack() {
  stroke(60);
  strokeWeight(2);
  line(0, height * 0.5, width, height * 0.5);

  // for the finishing line of the game
  stroke(255);
  strokeWeight(6);
  line(finishLine, 50, finishLine, height - 50);
  noStroke();
  fill(10);
  textSize(14);
  text("FINISH", finishLine, 30);

  // instruction text for the players on each side (check on the screen to start the game)
  textSize(18);
  fill(0,255,180);
  text("Press 'A' for the cyan Runner", width / 2, height - 60);
  fill(255, 80, 180);
  text("Press 'L' for the Pink Runner", width / 2, height - 30);}


// the game characters
function drawPlayers() {
  noStroke();
//for the first player
  fill(p1.color);
  ellipse(p1.x, p1.y, 40);
//the second player
  fill(p2.color);
  ellipse(p2.x, p2.y, 40);
}

function updatePlayers() {
  // for the speed of each balls
  p1.speed *=0.75;
  p2.speed *=0.75;
// for the movement of each balls
  p1.x +=p1.speed;
  p2.x +=p2.speed;

  p1.x =constrain(p1.x, 0, width);
  p2.x =constrain(p2.x, 0, width);
}

//for the winning using if-else
function checkWin() {
  if (p1.x >= finishLine) {
    win = true;
    winner = "PLAYER 1 WINS!";
  }
  if (p2.x >= finishLine) {
    win = true;
    winner = "PLAYER 2 WINS!";
  }
}

//for the reset page after the player wins the game
function drawWinScreen() {
  background(235, 130, 52);
  fill(255);
  textSize(50);
  text(winner, width / 2, height / 2);
  textSize(18);
  fill(180);
  text("Press R to restart", width / 2, height / 2 + 60);
}

// for the keys on each side to function
function keyTyped() {
if (key === 'r' || key === 'R') {
    reset();
    return;
  }
  if (win) return;
  if (key === 'a'||key === 'A') {
    p1.speed +=10;
  }
  if (key === 'l'||key === 'L') {
    p2.speed +=10;
  }
}
 
// reset or to start the game again.
function reset() {
  p1.x = 100;
  p2.x = 100;
  p1.speed = 0;
  p2.speed = 0;
  p1.color = color(0, 255, 180);
  p2.color = color(255, 80, 180);
  win = false;
  winner = "";
}