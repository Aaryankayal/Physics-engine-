var moving_rect , fixed_rect


function setup() {
  createCanvas(800,800);
  moving_rect = createSprite(400, 200, 50, 50);
  //moving_rect.debug = true;
  moving_rect.shapeColor = "green"

  fixed_rect = createSprite(300, 200, 50, 50);
  //fixed_rect.debug = true;
  fixed_rect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  moving_rect.y = World.mouseY;
  moving_rect.x = World.mouseX;

  if(moving_rect.x - fixed_rect.x <= fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.x - moving_rect.x <= fixed_rect.width/2 + moving_rect.width/2
    && moving_rect.y - fixed_rect.y <= fixed_rect.height/2 + moving_rect.height/2
    && fixed_rect.y - moving_rect.y <= fixed_rect.height/2 + moving_rect.height/2){
  moving_rect.shapeColor = "red";
  fixed_rect.shapeColor = "red";
  }
  else{
    moving_rect.shapeColor = "green";
    fixed_rect.shapeColor = "green";

  }
  drawSprites();
}