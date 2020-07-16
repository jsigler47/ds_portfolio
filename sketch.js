let WIDTH = 1000;
let HEIGHT = 700;

let numPlanets;
let numStars;

let planets = [];
let stars = [];

function draw_text(){
  word = 'Dylan Sigler'
  textSize(32);
  text(word, 10, 30);
  fill(0, 102, 153);
  text(word, 10, 60);
  fill(0, 102, 153, 51);
  text(word, 10, 90);
}

function setup(){
  numPlanets = random(3,10);
  numStars = random(400,1000);
  createCanvas(WIDTH, HEIGHT);
  ellipseMode(CENTER)
  angleMode(DEGREES)
  
  for(i = 0; i < numPlanets; i++){
    planets[i] = new Planet(
      random(10, 35), //radius
      random(40, HEIGHT/2), //distance
      random(-1.6, 1.6)); //speed
  }
  for(i = 0; i < numStars; i++){
    stars[i] = new Star(random(WIDTH), random(HEIGHT), 1)
  }
}

function draw(){
  background(0);
  noStroke();
  fill(245, 255, 66);
  ellipse(WIDTH/2, HEIGHT/2,40,40);
    
  for(i = 0; i < numStars; i++){
    stars[i].star();
  }
  for (i = 0; i < numPlanets; i++){
    planets[i].planet();
  }
  draw_text();

class Planet{
  constructor(radius, distance, speed){
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.angle1 = random(0,500);
    this.angle2 = 0;
  }

  planet(){
    resetMatrix();
    push();
    translate(WIDTH/2,HEIGHT/2);
    rotate(this.angle1);
    this.angle1 = this.angle1 + this.speed
    fill(this.color);
    ellipse(this.distance, 0, this.radius);
    pop();
  }
}

class Star{
  constructor(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  star(){
    fill(255)
    ellipse(this.x, this.y, this.radius)
  }
}