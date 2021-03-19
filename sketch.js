let img;

function preload() {
  img = loadImage('water_stateOfPlay.jpg');
}

function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  background(43, 50, 76);

  image(img, 900, 175, 550, 400);
  fill(255);
  textFont("Impact", 50);

  text("Not everyone has access to clean water and sanitation", 430, 70);
  text(" ｡｡･:*˚✧｡Let's talk about it ｡｡･:*˚:✧｡", 600, 130);
  noStroke()
  fill(85, 118, 185);
  rect(555, 175, 280, 130);
  fill(43, 50, 76);
  textSize(95);
  text("1 in 3", 597, 280);

  textSize(25);
  fill(255);
  textFont("times new roman", 30);
  text("people globally do not have", 520, 340);
  text("access to safe drinking water", 520, 375);
  fill(124, 160, 212);
  rect(0, 0, 200, 1000);
  rect(1800, 0, 200, 1000);
  fill (255);
  text ("Ayan Derie",30,40);
  textFont ("impact",35);
  fill (124, 160, 212);
  text ("Major Causes Of Water Scarcity:",420,435);
  textFont ("times new roman",30);
  fill (255);
  text("• Climate change",420,485)
  text ("• Overuse and wastage of water",420,524);
  text ("• Increased human consumption",420,560);
  text ("• Droughts and Floods.",420,600);
  text ("• Increased pollution",420,640);



}
