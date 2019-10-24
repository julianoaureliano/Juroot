var img;

function preload() {
	
  
	img = loadImage("png/Jump(1).png");
}

function setup() {
	createCanvas(640, 640);
}

function draw() {
    image(img,0,0); 
}
