var path,boy, leftboundary, rightboundary;
var pathImg,boyImg
function preload(){
  //pre-load images
  pathImg= loadImage("path.png");
  boyImg= loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY= 4;
  path.scale= 1.2;

 //creating boy running
 boy=createSprite(180,340,30,30);
 boy.addAnimation("BoyRunning",boyImg);
 boy.scale= 0.1;

 //creating left boundary
 leftboundary=createSprite(0,0,100,800);
 leftboundary.visible= false;

 //creating right boundary
 rightboundary=createSprite(410,0,100,800);
 rightboundary.visible= false;
}

function draw() {
  background(0);
  path.velocityY=4;
  boy.x= World.mouseX;

  edges= createEdgeSprites()
  boy.collide(edges);
  boy.collide(leftboundary);
  boy.collide(rightboundary);

  //code to reset the background
  if(path.y>400){
    path.y= height/2;
  }
drawSprites();
}
