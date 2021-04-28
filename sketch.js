//Create variables - car, wall, speed and weight
var bullet,wall;
var  speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  //create a rectangle sprite which represents a car
  bullet = createSprite(200,250,50,50);
  //Create a Wall which is half the height of the canvas and whose width is 60 pixels.
  wall = createSprite(1200,200,thickness,height/2);
 //Set the speed and weight to random values 
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet.velocityX = speed;

}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall))
  {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
       return true;
  }
   return false;
}