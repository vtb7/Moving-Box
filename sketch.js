var box;
function setup() {
  createCanvas(700,700);
box=createSprite(400,400,50,50);

}

function draw() 
{

  background(30);
drawSprites();
if (keyDown("left")) {
 box.x=box.x-5;
 
}
if (keyDown("right")) {
 box.x=box.x+5;
}
if (keyDown("up")) {
 box.y=box.y-5;
}
if (keyDown("down")) {
 box.y=box.y+5;
}
}


