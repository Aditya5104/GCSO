var bullet,wall;
var speed,weight;
var deformation;
var thickness

function setup() {
  createCanvas(1600,400);

bullet =createSprite(50,200,50,10)
wall= createSprite(1500,200,thickness,height/2)
wall.shapeColor=(80,80,80)
speed=random(55,90)
weight=random(30,52)
thickness=random(223,321)
bullet.shapeColor="white"
}

function draw() {
  background(255,255,255);  
  drawSprites();

bullet.velocityX= speed;

if (bullet.isTouching(wall))
bullet.velocityX=0
var deformation=0.5 * weight * speed * speed/22509;
if (deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if (deformation<100){
  bullet.shapeColor=color(0,255,0);
}
if (deformation<180 && deformation>100){
  bullet.shapeColor=color(230,230,0)
}
}