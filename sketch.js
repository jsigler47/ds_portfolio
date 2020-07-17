let numPlanets;
let numStars;

let planets = [];
let stars = [];
let links = [];
let images = [];

let email_icon;
let github_icon;

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

links = [email, github, linkedin];

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	for (i = 0; i < numStars; i++) {
      stars[i].x = random(windowWidth);
      stars[i].y = random(windowHeight);
 	}
}

function preload(){
	home_icon = loadImage('assets/images/home-5-128.png');
	email_icon = loadImage('assets/images/mail-128.png');
	github_icon = loadImage('assets/images/GitHub-Mark-Light-120px-plus.png');
	linkedin_icon = loadImage('assets/images/linkedin-5-128.png');
	images = [email_icon, github_icon, linkedin_icon];
}

function setup() {
  numPlanets = max(images.length, links.length);
  numStars = random(400, 1000);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1')

  ellipseMode(CENTER)
  angleMode(DEGREES)
  textFont('Verdana');

  for (i = 0; i < numPlanets; i++) {
    planets[i] = new Planet(
      random(50, 75), //radius
      random(80, windowHeight / 2), //distance
      random(-.2, .2), //speed
      images[i]);
  }
  for (i = 0; i < numStars; i++) {
    stars[i] = new Star(random(windowWidth), random(windowHeight), 1)
  }


  testButton = new Clickable(windowWidth / 2, windowHeight / 2);
  testButton.color = "#FFFFFF";
  testButton.strokeWeight = 2;
  testButton.text = "Press Me";
}

function draw() {
  background(0);
  noStroke();
  fill(245, 255, 66);
  ellipse(windowWidth / 2, windowHeight / 2, 90, 90);
  imageMode(CENTER);
  image(home_icon, windowWidth / 2, windowHeight / 2, 60, 60);

  for (i = 0; i < numStars; i++) {
    stars[i].star();
  }
  for (i = 0; i < numPlanets; i++) {
    planets[i].planet();
    planets[i].icon();
  }
  //testButton.draw()
}

class Planet {
  constructor(radius, distance, speed, image) {
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.angle1 = random(0, 360);
    this.angle2 = -this.angle1;
    this.image = image;

    if (this.speed == 0){
    	this.speed = .2;
    }
  }

  planet() {
    resetMatrix();
    push();
    translate(windowWidth / 2, windowHeight / 2);
    rotate(this.angle1);
    this.angle1 = this.angle1 + this.speed
    if (this.angle1 >= 360 || this.angle1 <= -360){
    	this.angle1 = 0;
    }
    fill(this.color);
    ellipse(this.distance, 0, this.radius);
    imageMode(CENTER);
    //image(this.image, this.distance, 0, this.radius - 20, this.radius - 20);
    //pop();
  }

  icon() {
    push();
    translate(this.distance, 0);
    rotate(this.angle2);
    this.angle2 = this.angle2 - this.speed
    fill(0, 0, 255);
    //ellipse(0, 0, this.radius / 2);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius - 20, this.radius - 20);
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