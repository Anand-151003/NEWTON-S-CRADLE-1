
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bob;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite=createSprite(width/2, height-505, width,10);
	groundSprite.shapeColor=color(255);

	bob = new Bob(200,height-500 , 50);

	chain = new Chain(bob.body,ground.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   bob.display();
  chain.display();

  drawSprites();
 
}



