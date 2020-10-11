var frect;
var mrect;



function setup() {
  createCanvas(800,400);
  
  frect = createSprite(400, 200, 50, 30);
  mrect=createSprite(200,200,30,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  frect.shapeColor="green";
mrect.shapeColor="green";
mrect.x=mouseX;
mrect.y=mouseY;
mrect.debug=true;
frect.debug=true;
if (frect.x-mrect.x<mrect.width/2+frect.width/2&&mrect.x-frect.x<mrect.width/2+frect.width/2&& frect.y-mrect.y<mrect.height/2+frect.height/2&&mrect.y-frect.y<mrect.height/2+frect.height/2){
  frect.shapeColor="red";
  mrect.shapeColor="red";
}
}