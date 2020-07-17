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


function draw_text(planets){
  let R = 255,
      G = 255,
      B = 255;

  fill(R, G, B)
  textAlign(CENTER);
  textSize(name_fontsize);
  text(name, 200, windowHeight - 100);

  push();
  translate(windowWidth / 2, windowHeight / 2);
  textAlign(LEFT);
  textSize(sub_fontsize);


  for(i = 0; i < links.length; i++){
  	push();
  	rotate(planets[i].angle1);
  	text(links[i], planets[i].distance, 0);
  	pop();
  }
  pop();
}

function draw_images(planets){
  push();
  imageMode(CENTER);
  translate(windowWidth / 2, windowHeight / 2);
  image(home_icon, 0, 0, 60, 60);
  for(i = 0; i < images.length; i++){
  	push();
  	rotate(planets[i].angle1);
	image(images[i], planets[i].distance, 0, planets[i].radius - 20, planets[i].radius - 20);
	pop();
  }  
  pop();
}

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
      random(-.2, .2)); //speed
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

  for (i = 0; i < numStars; i++) {
    stars[i].star();
  }
  for (i = 0; i < numPlanets; i++) {
    planets[i].planet();
  }
  
  //draw_text(planets)
  draw_images(planets)
  testButton.draw()
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

    //stroke(255)
    //line(0, 0, this.distance, 0);
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