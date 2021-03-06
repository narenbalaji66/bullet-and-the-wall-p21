var bullet,wall;
var speed,weight,thickness;

function setup() {

  createCanvas(1300,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX= speed;

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {

  background(255,255,255);
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=color(225,0,0);
    }

    if (damage<10){
      wall.shapeColor=color(0,225,0);
    }

  }
  drawSprites();
  textSize(20)
  text("weight :"+weight,1000,50)
  text("speed :"+speed,1000,70)
  text("damage :"+damage,1000,90)
  text("thickness :"+thickness,1000,110)
}

function hasCollided(bullet,wall){
 bulletRightEdge=bullet.x +bullet.width;
 wallLeftEdge=wall.x;
 if (bulletRightEdge>=wallLeftEdge){
   return true
 }
 else{
   return false
 }
}