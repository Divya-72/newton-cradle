
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roofObject;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(330,200,350,40);

	bobObject1=new bob(200,500,70);
	bobObject2=new bob(270,500,70);
	bobObject3=new bob(340,500,70);
	bobObject4=new bob(410,500,70);
	bobObject5=new bob(480,500,70);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*4,0);
	rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*6,0);
	rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*8,0);
	rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*10,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(233);
  
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
 }
}

function drawLine(constraint){
 bobBodyPosition=constraint.bodyA.position;

 roofBodyPosition=constraint.bodyB.position;

 roofBodyOffset=constraint.pointB;
 roofBodyX=roofBodyPosition.x+roofBodyOffset.x;

 roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
 line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);

}


