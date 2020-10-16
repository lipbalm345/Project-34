var dog, happyDog, database, foodS, foodStock;
var dogIMG, happyDogIMG;

function preload()
{
  dogIMG = loadImage("images/dogImg.png");
  happyDogIMG = loadImage("images/dogImg1");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(200,200,20,20);
  dog.addImage(dogIMG);
  
}


function draw() {  
  background(46,139,87);

  if(UP_ARROW) {
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }

  drawSprites();

  textSize(3);
  stroke(white);
  fill(white);
  
  text("Note: Press the UP_ARROW key to feed the dog :)",250,50);

}

function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {

  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x,
  })
}