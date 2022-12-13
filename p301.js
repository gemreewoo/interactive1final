// coffee stain
var curv = [];
var ci;
var curvy;
var randomarc;
var diameter = [];
var di;
var aX;
var aY;

//color
var col;
var opa = 0;

//loop pause
let paws = false;

// mug
var mug = [];
var mi;
var mugopa = 255;
var mR = 255;
var mG = 255;
var mB = 255;
var mX;
var mY;
//coffee
var coffeewidth;

//texts
var pottery
var workshop
var info
function preload() {
  col = loadImage('color.jpg');
  pottery=loadImage('pottery.png');
  workshop=loadImage('workshop.png');
  info=loadImage('info.png');
}
function setup() {
  createCanvas(1000, 563);
  background(234, 222, 137);
  randomarc = random(200);
  mX = width / 2;
  mY = height / 2;
  aX = width / 2;
  aY = height / 2;
  // curvy=curv[ci]
  coffeewidth=290
}

function draw() {
//texts
  image(pottery,0+10,0+10,width,height-20)
  frameRate(10);

  image(info,0,0,width,height)
  //coffee stain

  for (di = 7; di <= 10; di += 0.3) {
    // let staincolor=col.get(random(width),random(height))
    // stroke(staincolor);
    // opa=random(255) //opacity
    stroke(163, 111, 49, opa);
    strokeWeight(di - 5);
    noFill();
    arc(aX, aY, di * 30, di * 30, random(200), random(200));
    ci = random(5);
  }

  //mug
  // for ( mi = 0; mi <=random(10,11); mi = mi + 0.2) {
  //     stroke(mR,mG,mB,mugopa);
  //     noFill()
  //     strokeWeight(10);
  //     ellipse(aX,aY, mi*30, mi*30);
  // }

  //handle
  stroke(255)
  strokeWeight(30)
  line(mX,mY,mX+250,mY)
  
  //mug
  noStroke();
  fill(255, 255, 255, mugopa);
  ellipse(mX, mY, random(300, 311));
  
  //coffee
  fill(163, 111, 49, mugopa);
  ellipse(mX, mY, coffeewidth);

  if (mouseIsPressed) {
    mX = mouseX;
    mY = mouseY;
    opa = random(100, 255);
    coffeewidth=random(250,300)
  } else {
    opa = 0;
    aX = mX;
    aY = mY;
    coffeewidth=290
  }
  
    image(workshop,30,10,width-50,height-50)

  //tablecloth
  // vertical
  for (var y = 0; y < width; y += gapy) {
    // gapy=random(45,50)
    gapy = random(2, 5);
    //    let staincolor=col.get(random(width),random(height))
    // stroke(staincolor);
    stroke(234, 222, 137);
    strokeWeight(0.8);
    line(0, y, width, y);
  }

  for (var x = 0; x < width; x += gapx) {
    // gapx=random(45,50)
    gapx = random(2, 5);
    stroke(234, 222, 137);
    //   let staincolor=col.get(random(width),random(height))
    // stroke(staincolor);
    strokeWeight(0.8);
    line(x, 0, x, height);
  }

  //coffee stain
  for (di = 6; di <= 10; di += 0.3) {
    // let staincolor=col.get(random(width),random(height))
    // stroke(staincolor);
    // opa=random(255) //opacity
    stroke(163, 111, 49, opa);
    strokeWeight(di - 5);
    noFill();
    // arc(aX,aY,di*30,di*30,random(200),random(200))
    arc(aX, aY, di * 30, di * 30, randomarc, randomarc);

    ci = random(5);
  }
  stroke(163, 111, 49, opa);
  arc(aX, aY, di * 30, di * 25, randomarc, randomarc);
  

}



// function mousePressed(){
//   //when pressed
//   if(paws==false){
//     // mugopa=0
//     opa=random(100,255)
//     // noLoop();
//     paws=true;
//   }else{
//     mugopa=255
//     opa=0

//     // loop();
//     paws = false;  //when released
//   }
// }
