
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
      isStatic:false,
	  restitution:0.3,
	  friction: 0,
	  density: 1.2
	}


	Matter.Bodies.circle(100,200,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	right = new Ground(750,620,20,100);
  	left = new Ground(450,620,20,100);
	ground= new Ground(width/2,670,width,20);
	
	


	rectMode(CENTER);
  	ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(20);
  text("Press down arrow to stop moving", 200,250);
  text("Try to get the ball in the basket", 200,200);
  ground.show();
  right.show();
  left.show();
  keyPressed();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:1});
	}
}



