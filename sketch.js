var ball


function setup() {
  createCanvas(800,800);
  ball = createSprite(100,100,100,100)
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    background("red")
    ball.x += 5
  }
  if(keyDown(LEFT_ARROW)){
    ball.x -= 5
  }
  if(keyDown(UP_ARROW)){
    ball.y -= 5
  }
  if(keyDown(DOWN_ARROW)){
    ball.y += 5
  }
  if(keyDown("w")){
    background("white");
  }
  if(keyDown("y")){
    background("yellow");
  }
  if(keyDown("b")){
    background("blue");
  }
drawSprites()
}




