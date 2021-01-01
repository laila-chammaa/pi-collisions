var block1, block2, wall, clack, count, countDiv, input, button;

//to make animation smoother, it increases the more collisions there are going to be
var timeSteps = 6;

function preload() {
  clack = loadSound('clack.wav');
}

function setup() {
  createCanvas(windowWidth, 400);
  var text = createDiv("How many digits of PI do you want?</br>Please don't go over 8 :(")
  text.style('margin-bottom', '20px')
  text.style('margin-top', '20px')
  input = createInput(1);
  button = createButton('submit');
  countDiv = createDiv(count);
  countDiv.style('font-size', '72pt')

  init(1)

}

function init(digits) {
  block1 = new Block(100, 20, 0, 1);
  const m2 = pow(100, digits - 1);
  block2 = new Block(300, 150, -3/timeSteps, m2);
  wall = new Block(0, 0, 0);
  count = 0;
}
  
function draw() {
    background(220);  
    var clackSound = false

    button.mousePressed(reEval)

    for (var i = 0; i < timeSteps; i++) {
      if (block1.collide(block2)) {
        var v1 = block1.bounce(block2);
        var v2 = block2.bounce(block1)
        block1.v = v1;
        block2.v = v2;
        clackSound = true
        count++
      }
      if (block1.hitWall()) {
        block1.reverseV();
        clackSound = true
        count++;
      }
      block1.update();
      block2.update();
      
    }
    block1.show();
    block2.show();
    if (clackSound) {
      clack.play();
    }

    countDiv.html(count)
}
  
function reEval() {
  if (input.value()) {
    console.log(typeof input.value())
    var digits = input.value()
    console.log(digits)
    block2.m = pow(100, digits - 1);
    timeSteps = pow(digits, 6)
    console.log(timeSteps)
    init(digits)
    draw()
  }
}