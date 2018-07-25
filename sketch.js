var angle = 0.0;
var speed = 0.005;
var prayerNumber;
var prayerAmmount;
var bckgrndPos;
var background;
var background2;
var prayer1;
var prayer2;
var prayer3;
var prayer4;
var cabeza;

function preload() {
	bckgrnd = loadImage("assets/background.jpg");
	bckgrnd2 = loadImage("assets/background2.jpg");
	prayer1 = loadImage("assets/pryer1.png");
	prayer2 = loadImage("assets/pryer2.png");
	prayer3 = loadImage("assets/pryer3.png");
	prayer4 = loadImage("assets/pryer4.png");
	cabeza = loadImage("assets/cabeza.png");
	noFill();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	getRandomValues();
}

function draw() {
	
	var mapped1=map(mouseX, 0, width, 10, 300);
	var mapped2=map(mouseY, 0, height, 10, 300);
	
	if (bckgrndPos == 1){
		background(bckgrnd);
	}
	else{
		background(bckgrnd2);	
	}
	
	image(cabeza, width/2-cabeza.width/2, height/2 - cabeza.height/2, cabeza.width, cabeza.height);
	
	push();	
	translate(width/2, height/2);
	rotate(angle);	
	for (var i=0; i<prayerAmmount; i++) {
		push();
		rotate(i*TWO_PI/prayerAmmount);
		translate(0, mapped1*1.5);
		//image(getPrayer(), 0, 0, 60, 90);
		for (var j=0; j<prayerAmmount; j++) {
			push();
			rotate(j*TWO_PI/prayerAmmount);
			translate(0, mapped2);
			image(getPrayer(), 0, 0, 60, 90);
				for (var k=0; k<prayerAmmount; k++) {
				push();
				rotate(k*TWO_PI/prayerAmmount);
				translate(0, mapped2);
				image(getPrayer(), 0, 0, 60, 90);
				pop();
			}
			pop();
		}
		pop();
	}
	pop();	
	angle += speed;
}

function mouseClicked() {
	getRandomValues();
}

function getRandomValues(){
	prayerNumber = int(random(1, 5));
	prayerAmmount = int(random(3, 7));
	bckgrndPos = int(random(1, 3));
}

function getPrayer(){
	if (prayerNumber == 1){
		return prayer1;
	} 
	if (prayerNumber == 2){
		return prayer2;
	} 
	if (prayerNumber == 3){
		return prayer3;
	} 
	if (prayerNumber == 4){
		return prayer4;
	} 
}