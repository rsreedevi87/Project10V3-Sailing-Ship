var ship,ship_sailing,edges;
var groundImage;


function preload(){
  ship_sailing=loadAnimation("ship-1.png","ship-2.png");
  groundImage=loadImage("sea.png");

}

function setup(){
   
  createCanvas(400,400);
 
  background('blue');
   
  ground=createSprite(200,180);
  ground.addImage(groundImage);
  ground.x=ground.width/8;
  ground.velocityX=-3;
  ground.scale=0.3;

  ship=createSprite(200,200,20,50);
  ship.addAnimation("sailing",ship_sailing);
  edges=createEdgeSprites();
  

  ship.scale=0.2;
  ship.x=100;
}
 
function draw() {
  
  background(0);
 
  ground.velocityX=-3;
   
  if(ground.x<0){
    ground.x=ground.width/8;
  }
  
  
  drawSprites();
}