var bob 
function setup() {
  createCanvas(400,400);
bob=createSprite(200,200,20,20)
bob.shapeColor ="green"
}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
   bob.position.x = bob.position.x -1 
  }
  if(keyIsDown(RIGHT_ARROW)){
    bob.position.x = bob.position.x +1 
   }
drawSprites()
}




