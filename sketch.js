var car;
var wall;

var speed ;
var weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="black";

  wall=createSprite(1500,200,60,400/2);
  wall.shapeColor=rgb (80,80,80);

}

function draw() {
  background("black"); 
  
  if(wall.x-car.x === (car.width + wall.width)/2){

    var deformation=Math.round(0.5*weight*speed*speed/22509);
    console.log(deformation);

    if(deformation>180)
    {
      car.shapeColor="red";
      textSize(20);
      text ("HARMFUL!",750,50);
    }
    if (deformation>100)
    {
      car.shapeColor="yellow";
      textSize(20);
      text ("Average",750,50);
    }
    if(deformation<100)
    {
      car.shapeColor="green";
      textSize(20);
      text ("good :)",750,50);
    } 
  }
  car.collide(wall);
  drawSprites();
}