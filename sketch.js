const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling_shot;
var polygon,polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //ON STAND NUMBER ONE

  //level one
  block1 = new Darkblue(300,275,30,40);
  block2 = new Darkblue(330,275,30,40);
  block3 = new Darkblue(360,275,30,40);
  block4 = new Darkblue(390,275,30,40);
  block5 = new Darkblue(420,275,30,40);
  block6 = new Darkblue(450,275,30,40);
  block7 = new Darkblue(480,275,30,40);
  //level two
  block8 = new Blue(330,235,30,40);
  block9 = new Blue(360,235,30,40);
  block10 = new Blue(390,235,30,40);
  block11 = new Blue(420,235,30,40);
  block12 = new Blue(450,235,30,40);
  //level three
  block13 = new Cyan(360,195,30,40);
  block14 = new Cyan(390,195,30,40);
  block15 = new Cyan(420,195,30,40);
  //top
  block16 = new White(390,155,30,40);

  //ON STAND NUMBER TWO

  //level one
  block17 = new Darkblue(640,175,30,40);
  block18 = new Darkblue(670,175,30,40);
  block19 = new Darkblue(700,175,30,40);
  block20 = new Darkblue(730,175,30,40);
  block21 = new Darkblue(760,175,30,40);
  //level two
  block22 = new Blue(670,135,30,40);
  block23 = new Blue(700,135,30,40);
  block24 = new Blue(730,135,30,40);
  //top
  block25 = new Cyan(700,95,30,40);
  

  polygon = new Polygon(150,200,20,20)
  World.add(world,polygon);
  sling_shot = new Slingshot(polygon.body,{x: 150,y: 200});
  
}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("yellow")
  text("Press 'space' or 'r' to get another chance to shoot!",20,50) 

  ground.display();

  fill("yellow")
  stand1.display();
  stand2.display();
  
  //strokeWeight(2);
  //stroke(15);

//stand 1

  fill("darkblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("cyan");
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  block16.display();

//stand 2

  fill("darkblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("blue");
  block22.display();
  block23.display();
  block24.display();
  fill("cyan");
  block25.display();
 
  polygon.display();

  sling_shot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
  sling_shot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x: 150,y: 200})
    sling_shot.attach(polygon.body)
    sling_shot.bodyA 
  }
  if(keyCode === 82){
    Matter.Body.setPosition(polygon.body,{x: 150,y: 200})
    sling_shot.attach(polygon.body)
    sling_shot.bodyA
  }
}

