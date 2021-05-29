const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1500,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390+250,300,250,10);
  stand2 = new Stand(700+300,200,200,10);
 
  //level one
  block1 = new Block(300+250,275,30,40);
  console.log(block1);
  block2 = new Block(330+250,275,30,40);
  block3 = new Block(360+250,275,30,40);
  block4 = new Block(390+250,275,30,40);
  block5 = new Block(420+250,275,30,40);
  block6 = new Block(450+250,275,30,40);
  block7 = new Block(480+250,275,30,40);
  //level two
  block8 = new Block(330+250,235,30,40);
  block9 = new Block(360+250,235,30,40);
  block10 = new Block(390+250,235,30,40);
  block11 = new Block(420+250,235,30,40);
  block12 = new Block(450+250,235,30,40);
  //level three
  block13 = new Block(360+250,195,30,40);
  block14 = new Block(390+250,195,30,40);
  block15 = new Block(420+250,195,30,40);
  //top
  block16 = new Block(390+250,155,30,40);
  pentagon=new Pen(200,200,50,50);
  slingshot=new Lauch(pentagon.body,{x:200,y:200})


  block17 = new Block(300+640,175,30,40);
  block18 = new Block(330+640,175,30,40);
  block19 = new Block(360+640,175,30,40);
  block20 = new Block(390+640,175,30,40);
  block21 = new Block(420+640,175,30,40);
  block22 = new Block(330+640,130,30,40);
  block23 = new Block(360+640,105,30,40);
  block24 = new Block(390+640,130,30,40);
  block25 = new Block(360+640,145,30,40);
}
function draw() {
  background(190,240,250); 
  slingshot.display();
  textSize(20);
  fill("white");
  text("DRAG THE HEXAGONAL STONE AND REALEASE IT TO LAUCH TOWARD THE BLOCKS",250,50)

  ground.display();
  stand1.display();
stand2.display();

  pentagon.display();
  strokeWeight(2);
  stroke(15);
  tint(123,255,0)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 tint(0,255,255)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 tint(195,125,255)
  block13.display();
  block14.display();
  block15.display();
tint(255,0,0)
  block16.display();
 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
 tint(0,255,255)
  block22.display();
  block23.display();
  block24.display();
  tint(50,0,50)
  block25.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body, {x:mouseX, y:mouseY}) 
  }
  function mouseReleased(){
    slingshot.fly();
  }
  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(pentagon.body, {x:200, y:200}) 
    slingshot.attach(pentagon.body);
      }
    }
  
