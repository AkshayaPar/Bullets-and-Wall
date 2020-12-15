// To create the variables
var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
// To create the canvas
createCanvas(1600,400);

// To give speed, weight and thickness random properties
speed=random(223, 321);
weight= random(30,52);
thickness=random(22, 83);

// To create the bullet sprite
bullet=createSprite(50, 200, 50, 5);
bullet.velocityX=speed;  
bullet.shapeColor=color("white");

// To create the wall sprite
wall=createSprite(1200,200, thickness, height/2);
wall.shapeColor=color(80, 80, 80);

// To calculate deformation using this formula 
deformation=0.5*weight*speed*speed/22500;
}
    
function draw() {

  background(0, 0, 0)

bullet.velocityX = speed;
// To change the color of the wall when the bullet collides 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
    drawSprites();
}

// To create function has collided
function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;e
  }
  return false;
}

