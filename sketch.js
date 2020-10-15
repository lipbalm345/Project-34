var dog, happyDog, database, foodS, foodStock;
var dogIMG, happyDogIMG;

function preload()
{
  dogIMG = loadImage("images/dogImg.png");
  happyDogIMG = loadImage("images/dogImg1");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,200,20,20);
  dog.addImage(dogIMG);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



