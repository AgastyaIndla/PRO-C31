var gameState;

var snake;
var msr = 20;
var food;

function setup() {
  createCanvas(600,600);
  snake = new Snake();

  frameRate(10);

  cLocation();
}

function cLocation(){
  var cols = floor(width/msr);
  var rows = floor(height/msr);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(msr);
}

function draw() {
  background(0,250);   
  if(snake.eat(food)){
    cLocation();
  }

  snake.death();
  snake.update();
  snake.visible();

  fill(255,20,80);
  rect(food.x,food.y,msr,msr);

}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.move(0, -1);
  }

  if(keyCode === DOWN_ARROW) {
    snake.move(0, 1);
  }

  if(keyCode === RIGHT_ARROW) {
    snake.move(1, 0);
  }

  if(keyCode === LEFT_ARROW) {
    snake.move(-1, 0);
  }
}