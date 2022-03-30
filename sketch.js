var caixa;
function setup() {
  createCanvas(400,400);
caixa=createSprite(170,170,30,30);

}

function draw() 
{
  background(200);
if (keyIsDown(RIGHT_ARROW)){
  caixa.position.x=caixa.position.x+2
}
if (keyIsDown(LEFT_ARROW)){
  caixa.position.x=caixa.position.x-2
} 
if (keyIsDown(UP_ARROW)){
  caixa.position.y=caixa.position.y-2
}
if (keyIsDown(DOWN_ARROW)){
  caixa.position.y=caixa.position.y+2
}










drawSprites()
}




