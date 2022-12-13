var xspeed=0.5
var x
function setup() {
  createCanvas(400, 400);
  x=width/2
}

function draw() {
  background(255);
//   sky
  fill(120, 176, 255);
  noStroke();
  rect(0,0,width,height);
//   grass
  fill(100, 161, 90);
  rect(0,height-70,width,70);
  // // cloud
  // fill(255);
  // ellipse(70,120,30,30)
  // ellipse(50,120,30,30) 
// sun
  fill(226, 44, 44);
  ellipse(width/2+40,height/2-10,280,280);
//   house
  fill(255);
  // rect(190,320,20,10);
    rect(width/2,height-80,20,10);

//   roof
  fill(255)
  triangle(width/2,height-80,width/2+20,height-80,width/2+10,height-120);
// // door
//   fill(230);
//   rect(193,325,5,5);
//   window
   fill(230);
  rect(width/2+5,height-80,5,5);
// cloud
  fill(255);
  ellipse(x-120,height-300,30,30)
  ellipse(x-100,height-300,30,30)
  ellipse(x-80,height-300,30,30) 
  x=x-xspeed
  if((x-80)<-100){
    x=width+100
  }
  
//   road
  fill(80, 124, 73);
  quad(width/2,height-70,width/2+20,height-70,width/2,height,width/2-40,height);
}