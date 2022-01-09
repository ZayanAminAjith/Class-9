var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30)
}

function draw() 
{
  background("black");
  drawSprites()
 if(keyDown("a") || keyDown(LEFT_ARROW)) {
   box.x -=3
 }

 if(keyDown("d") || keyDown(RIGHT_ARROW)) {
  box.x +=3
}

if(keyDown("w") || keyDown(UP_ARROW)) {
  box.y -=3
}

if(keyDown("s") || keyDown(DOWN_ARROW)) {
  box.y +=3
}
}




