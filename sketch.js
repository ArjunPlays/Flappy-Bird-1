var bg, bg_image;
var fg, fg_image;
var bird, bird_image;
var pipe1, pipeTop_image;
var pipe2, pipeBot_image;


function preload(){
 bg_image = loadImage("bg.png") 
 fg_image =loadImage("fg.png")
 bird_image = loadImage("bird.png")
pipeTop_image = loadImage("pipeNorth.png")
pipeBot_image = loadImage("pipeSouth.png")


}
function setup() {
  createCanvas(288,512);
  
  bg = createSprite(150,250,10,10)
  bg.addImage(bg_image);

  fg = createSprite(150,480,288,50)
  fg.addImage(fg_image);

  bird = createSprite(20,256,15,15)
  bird.addImage(bird_image);

  pipe1Group = new Group();
  pipe2Group = new Group();

}

function draw() {
  background("green");

  fg.velocityX = -1;


  if(fg.x < 140){

    fg.x = fg.width/2;
  }

   if(keyDown("space")){
bird.y = bird.y -20;
}
else{
  bird.velocityY = 4;
}  
  
  
  
  movePipe();
    drawSprites();
  }

  function movePipe(){
if(frameCount % 80 === 0){
pipe1 = createSprite(130,0,15,20);
pipe1.addImage(pipeTop_image);
pipe1.velocityX = -2;
pipe1.y = random(0,30);
pipe1Group.add(pipe1);

pipe2 = createSprite(130,512,15,20);
pipe2.addImage(pipeBot_image);
pipe2.velocityX = -2;
pipe2.y = random(450,512);
pipe2Group.add(pipe2);




}



  

}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  