let numPlanets;
let numStars;

let planets = [];
let stars = [];

let name = 'Dylan Sigler',
  font,
  name_fontsize = 32,
  sub_fontsize = 20,
  name_x,
  name_y;

let email = 'jsigler47@gmail.com',
  e_x,
  e_y;

let github = 'github',
  g_x,
  g_y;

let linkedin = 'linkedin',
  l_x,
  l_y;

function draw_text(){
  let R = 255,
      G = 255,
      B = 255;
  //R = map(mouseX, 0, windowWidth, 50, 255);
  //G = map(mouseY, 0, windowHeight, 50, 255);
  //B = map(mouseX + mouseY, 0, windowWidth + windowHeight, 50, 255);
  fill(R, G, B)
  textAlign(CENTER);
  textSize(name_fontsize);
  text(name, 200, windowHeight - 100);

  textAlign(LEFT);
  textSize(sub_fontsize);
  text(email, windowWidth - 300, 100)
  text(linkedin, windowWidth - 300, 125);
  text(github, windowWidth - 300, 150)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	for (i = 0; i < numStars; i++) {
      stars[i].x = random(windowWidth);
      stars[i].y = random(windowHeight);
 	}
}

function setup() {
  numPlanets = random(3, 10);
  numStars = random(400, 1000);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1')

  ellipseMode(CENTER)
  angleMode(DEGREES)
  textFont('Verdana');

  for (i = 0; i < numPlanets; i++) {
    planets[i] = new Planet(
      random(10, 35), //radius
      random(40, windowHeight / 2), //distance
      random(-1.6, 1.6)); //speed
  }
  for (i = 0; i < numStars; i++) {
    stars[i] = new Star(random(windowWidth), random(windowHeight), 1)
  }
}

function draw() {
  background(0);
  noStroke();
  fill(245, 255, 66);
  ellipse(windowWidth / 2, windowHeight / 2, 40, 40);

  for (i = 0; i < numStars; i++) {
    stars[i].star();
  }
  for (i = 0; i < numPlanets; i++) {
    planets[i].planet();
  }
  
  draw_text()
}

class Planet {
  constructor(radius, distance, speed) {
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.angle1 = random(0, 500);
  }

  planet() {
    resetMatrix();
    push();
    translate(windowWidth / 2, windowHeight / 2);
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