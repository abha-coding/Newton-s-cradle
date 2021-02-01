
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,300,40);

	bob1 = new Bob(280,500);
	bob2 = new Bob(340,500);
	bob3 = new Bob(400,500);
	bob4 = new Bob(460,500);
	bob5 = new Bob(520,500);

	rope1 = new Rope(roof.body,bob1.body);
	rope2 = new Rope(roof.body,bob2.body);
	rope3 = new Rope(roof.body,bob3.body);
	rope4 = new Rope(roof.body,bob4.body);
	rope5 = new Rope(roof.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  

  drawSprites();
 
}



