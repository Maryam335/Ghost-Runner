var towerImg,tower,doorImg,door,doorImg,doorsGroup,climber,climberImg,climberGroup, ghost, ghostImg
function preload(){
  towerImg=loadImage("tower.png")
  doorImg=loadImage("door.png")
  doorsGroup=new Group();
  climberImg=loadImage("climber.png")
  climberGroup=new Group();
  ghostImg=loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg)
  tower.velocityY=1
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost", ghostImg)
  ghost.scale=.5

  
}

function draw(){
  background(0)

  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
   if(keyDown("right_arrow")){
    ghost.x=ghost.x3
  }
   if(keyDown("space")){
    ghost.velocityY=-5
  }
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  ghost.velocityY=ghost.velocityY+.8
  spawnDoors()
  drawSprites();
}

function spawnDoors(){
  if(frameCount%240===0){
     var door=createSprite(200,-50)
     door.addImage("door",doorImg)
     var climber=createSprite(200,10)
     climber.addImage("climber",climberImg)
    
    door.x=Math.round(random(120,400))
    door.velocityY=1;
    door.lifetime=800;
    climber.x=door.x;
     climber.velocityY=1;
    climber.lifetime=800;
    climberGroup.add(climber)
    doorsGroup.add(door)
  }
}

function spawnClimbers(){
  if(frameCount%240===0){
    
    climber.x=Math.round(random(120,400))
   
  }
}

