var path,pathImg,jake,jakeImg,rightboundary,leftboundary,coin,coinImg

function preload(){
pathImg=loadImage("path.png")
jakeImg=loadImage("runner-1.png")
coinImg=loadImage("coin.png")

  //pre-load images
  
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5
  path.y=path.height/30;
  jake=createSprite(200,200,50,75)
  jake.addAnimation("running",jakeImg);
  jake.scale=0.05;
  coin=createSprite(200,50,50,50)
  coin.addImage(coinImg);
  coin.scale=0.4;
  rightboundary=createSprite(400,200,100,400)   
  rightboundary.visible=false
  leftboundary=createSprite(1,200,100,400)
  leftboundary.visible=false

  //create sprites here
}

function draw() {
 
  if (path.y>400){
    path.y=height/2
  }
  background("yellow");
  jake.x=World.mouseX

  jake.collide(rightboundary);
   jake.collide(leftboundary);

  drawSprites();
  

}
