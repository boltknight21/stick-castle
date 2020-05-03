const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rectangle1,rectangle2,rectangle3,rectangle4;
var triangle1,triangle2,triangle3;
var ground;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);
  rectangle1 = new  Rectangle(200,100,40,100);
  rectangle2 = new  Rectangle(250,100,40,100);
  rectangle3 = new  Rectangle(300,100,60,100,100);
  rectangle4 = new  Rectangle(350,100,40,100);
 /* triangle1 = new  Triangle(200,120,3);
  triangle2 = new  Triangle(300,120,3);
  triangle3 = new  Triangle(400,120,3);
  */
}

function draw() {
  background("yellow");
  Engine.update(engine); 

//rectangle(220,390,60,600);
//rectangle(100,390,200,400);
//rectangle(450,300,400,200);
//rectangle(680,390,60,500);
//fill(50,40,30);
//rectangle(450,350,100,200);
  fill(100,50,200);  
triangle(0,190,100,50,200,190);
triangle(300,190,100,50,200,190);
triangle(600,190,100,50,200,190);
  drawSprites();
}