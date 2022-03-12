var runner,path;
var runnerImg,pathImg; 

 
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(200,200);
  runner.addAnimation("Runner", runnerImg);
  runner.velocityY = 4;
  runner.scale= 0.5;
 
//moving background 
 path = createSprite(200,200);
 path.addImage("path", pathImg);
 path.velocityY = 4;
 path.scale=1.2;
 path.x = path.width /2;
}

function draw() {
  background(0);

  //code to reset the background
  if(path.y > 400 ){
  path.y = height/2;
  }


drawSprite()
}
