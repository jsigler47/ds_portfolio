let WIDTH = 1000;
let HEIGHT = 700;

let numPlanets;
let numStars;

let planets = [];
let stars = [];

let words = 'Dylan Sigler',
  font,
  bounds,
  fontsize = 32,
  x,
  y;

function preload(){
  font = loadFont('assets/AstroSpace-0Wl3o.otf')
}

function setup() {
  numPlanets = random(3, 10);
  numStars = random(400, 1000);
  createCanvas(WIDTH, HEIGHT);
  textAlign(CENTER, CENTER);
  ellipseMode(CENTER)
  angleMode(DEGREES)
  
  textFont(font);
  textSize(fontsize);
  bounds = font.textBounds(words, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;

  for (i = 0; i < numPlanets; i++) {
    planets[i] = new Planet(
      random(10, 35), //radius
      random(40, HEIGHT / 2), //distance
      random(-1.6, 1.6)); //speed
  }
  for (i = 0; i < numStars; i++) {
    stars[i] = new Star(random(WIDTH), random(HEIGHT), 1)
  }
}

function draw() {
  let time = millis();
  background(0);
  noStroke();
  fill(245, 255, 66);
  ellipse(WIDTH / 2, HEIGHT / 2, 40, 40);

  for (i = 0; i < numStars; i++) {
    stars[i].star();
  }
  for (i = 0; i < numPlanets; i++) {
    planets[i].planet();
  }
  
  text(words, 200, 500);
  bounds = font.textBounds(words, x, y, fontsize);
  
   if (
     mouseX >= bounds.x &&
     mouseX <= bounds.x + bounds.w &&
     mouseY >= bounds.y &&
     mouseY <= bounds.y + bounds.h
   ) {
     x += random(-5, 5);
     y += random(-5, 5);
   }
}

class Planet {
  constructor(radius, distance, speed) {
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.angle1 = random(0, 500);
    this.angle2 = 0;
  }

  planet() {
    resetMatrix();
    push();
    translate(WIDTH / 2, HEIGHT / 2);
    rotate(this.angle1);
    this.angle1 = this.angle1 + this.speed
    fill(this.color);
    ellipse(this.distance, 0, this.radius);
    pop();
  }
}

class Star {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  star() {
    fill(255)
    ellipse(this.x, this.y, this.radius)
  }
}