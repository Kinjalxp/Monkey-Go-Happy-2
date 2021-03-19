var monkey,monkey_moving;
var banana, banana_img,banana_group;
var Wallpaper,scene;
var Invisible_ground;
var score;
var PLAY = 1;
var END = 0;
var gameState = 1;
var stone,obstacle_img,obstacle_group;

function preload(){
  monkey_moving = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_img = loadImage("banana.png");  
  scene = loadImage("jungle.jpg"); 
  
  obstacle_img = loadImage("stone.png");
}



function setup() {
  createCanvas(400, 400);
  Wallpaper = createSprite(0,0,10,10);
  Wallpaper.addImage(scene);
  Wallpaper.scale = 1.25;
  Wallpaper.x = Wallpaper.width/2;
  Wallpaper.velocityX = -2;
 
  Invisible_ground = createSprite(10,380,400,10);
  Invisible_ground.visible = false;
  
  monkey = createSprite(50,340,10,10);
  monkey.addAnimation("moving",monkey_moving);
  monkey.scale = 0.15;
  
  banana_group = new Group();
  obstacle_group = new Group();
}


function draw() {
  background("White");
  
 monkey.collide(Invisible_ground); 
  
  if(gameState === PLAY)
  {
    if(keyDown("space") && monkey.y>=329){
    monkey.velocityY = -15  ;
    }

    monkey.velocityY = monkey.velocityY + 0.5;
 
    score = 0;
    
      stroke("white");
      textSize(20);
      fill("white");
      text("Score:" + score,300,50);
      score = 0;
  
   if(monkey.isTouching(banana_group))
    {
      score = score + 2;
      banana_group.destroyEach();
    }    
    
    
    Fruits();    
  }
  
  drawSprites();  
}

function Fruits()
{
  if(frameCount % 160 === 0)
  {
    banana = createSprite(400,165,10,10);
    banana.scale = 0.05;
    banana.velocityX = -2;
    banana.lifetime = 200;
    banana.addImage(banana_img);
    banana.y = random(50,100);
    banana_group.add(banana);
  }
}

function Stones(){
  if(frameCount % 260 === 0){
    stone = createSprite(400,200,10,10);
    stone.addImage(obstacle_img);
    stone.scale = 0.5;
    obstacle.velocityX = -3;
    obstacle_group.add(stone);
  }
  
}
