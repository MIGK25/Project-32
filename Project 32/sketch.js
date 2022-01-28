const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine, world;
var blower, blowerMouth, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2, 50, 50, 50);
  blower = new Blower(width/2, height/2 + 65, 100, 90);
  blowerMouth = new BlowerMouth(width/2 - 150, height/2 + 100, 200, 20);

  button = createButton("Click To Blow");
  button.position(width/2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ball.display();
  blower.display();
  blowerMouth.display();
}

function blow() {
  Matter.Body.applyForce(ball.body, {x: 0, y: 0} , {x: 0, y: 0.05});
}