
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var box, box1, box2;
var ground, ball;

function preload()
{
	dustbin = loadImage("Images/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	box = new Ground(600, 330, 10, 100);
	box1 = new Ground(780, 330, 10, 100);
	box2 = new Ground(690, 365, 180, 10);
	
	ground = new Ground(400, 380, 800, 20);
	ball = new Ball(200, 100, 35);
	
	
	//Create the Bodies Here.
	
	// paperBall = ellipse(50, 46, 55, 55)
	
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  ground.display();
  box.display();
  box1.display();
  box2.display();
  imageMode(CENTER)
 image(dustbin, 690, 315, 180, 100)
}

function keyPressed(){
	if (keyCode === 38){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85});
	}
}

