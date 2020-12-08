
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  var survivalTime=0;
  
}


function draw() {
  
createCanvas(400,400);
  
  if(keyDown("space") && monkey.y>180){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY = monkey.velocityY+0.9;
  monkey.collide(ground);
  
  bananaSpawn();
  obstacleSpawn();
   ground.x=ground.width/2;
  console.log(ground.x);
  
  stroke("black");
  textSize=20;
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time:",survivalTime,100,50);
  
  drawSprites();
  
}

function bananaSpawn(){
  if(frameCount%80===0){
    banana = createSprite(390,100,10,10);
    banana.y=Math.round(random(120,200));
    banana.addImage("banana.png",bananaImage);
    banana.scale=0.1;
    banana.lifetime=150;
    banana.velocityX=-4;
    bananaGroup.add(banana);
  }
}
function obstacleSpawn(){
  if(frameCount%200===0){
    obstacle = createSprite(390,320,2,2);
    obstacle.addImage("obstacle.png",obstacleImage);
    obstacle.scale=0.15;
    obstacle.lifetime=130;
    obstacle.velocityX=-4;
    obstacleGroup.add(obstacle);
  }
}




