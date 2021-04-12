
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ballObj = new Ball(400,650,90)
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  console.log(ballObj.radius)

  groundObject.display();
  dustbinObj.display();
  ballObj.display()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ballObj.body, ballObj.body.position, {x : 1500,y : 2500})
  }
}
