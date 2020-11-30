var car1;
var car2;
var car3;
var car4;
var speed;
var stopper1,stopper2,stopper3,stopper4;

function setup() {
  createCanvas(10000,1000);
  car1=createSprite(100, 100, 50, 50);
  car1.shapeColor="pink";
  stopper1=createSprite(1200,115,50,120);
  stopper1.shapeColor="red"
  car2=createSprite(100, 250, 50, 50);
  stopper2=createSprite(1200,255,50,130);
  stopper2.shapeColor="red"
  car2.shapeColor="blue";
  stopper3=createSprite(1200,405,50,130);
  stopper3.shapeColor="red"
  car3=createSprite(100, 400, 50, 50);
  car3.shapeColor="yellow";
  stopper4=createSprite(1200,550,50,125);
  stopper4.shapeColor="red"
  car4=createSprite(100, 550, 50, 50);
  car4.shapeColor="green"

  car1.velocityX=30;
  car2.velocityX=20;
  car3.velocityX=35;
  car4.velocityX=25;
  

}

function draw() {
background("white")
  

  line(0,50,4000,50);
  line(0,330,4000,330);
  line(0,180,4000,180);
  line(0,480,4000,480);
  line(0,620,4000,620);
  

if(car2.x>1150){
  car2.velocityX=0;
  car2.shapeColor="lightgreen"
  Text("EXELLENT",200,100)
}
if(car2.x>850){
  car1.velocityX=0;
  car1.shapeColor="lightgreen"
  
}

if(car2.x>970){
  car4.velocityX=0;
  car4.shapeColor="lightgreen"
}

if(car2.x>740){
  car3.velocityX=0;
  car3.shapeColor="lightgreen"
}


  drawSprites();
}