var tom,jerry,tom1Img,tom2Img,tom3Img,jerry1Img,jerry2Img,jerry3Img,bg,bgImg;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
tom1Img=loadAnimation("images/tomOne.png");
jerry1Img=loadAnimation("images/jerryOne.png");
jerry2Img=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerry3Img=loadAnimation("images/jerryFour.png");
tom2Img=loadAnimation("images/tomTwo.png","images/tomThree.png");
tom3Img=loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here



tom=createSprite(870,650);
tom.addAnimation("moving",tom1Img);
tom.scale=0.2;

jerry=createSprite(200,650);
jerry.addAnimation("dancing",jerry1Img);
jerry.scale=0.10;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x<100){
        tom.velocityX=0;
tom.addAnimation("walking",tom3Img);
tom.x=300;
tom.scale=0.2;
tom.changeAnimation("walking");
jerry.addAnimation("fighting",jerry3Img);
jerry.scale=0.10;
jerry.changeAnimation("fighting");
}

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("running",tom2Img);
    tom.changeAnimation("running");
    jerry.addAnimation("teasing",jerry2Img);
    jerry.frameDelay=25;
    jerry.changeAnimation("teasing");
}

}


