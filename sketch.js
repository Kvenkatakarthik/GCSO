var car,wall;
var speed,weight 



function setup() {
  createCanvas(1600,800);
  wall=createSprite(1000, 200, 10, 30);
car =createSprite(100, 200, 30, 10);
car.shapeColor="white"
speed=random(55,100)
weight=random(400,1500)
car.velocityX=speed

}

function draw() {
  background("black");  
if (wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0
var deformation=0.5*weight*speed*speed/22509
}
if(deformation>180){
car.shapeColor="red"

}
if(deformation<180 && deformation>100){
  car.shapeColor="yellow"
  
  }
  if(deformation<100){
    car.shapeColor="green"
    
    }

  drawSprites();
}