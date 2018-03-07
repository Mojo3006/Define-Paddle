var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

//Set up other variables for ball size and position
var ballRadius = 10
var ballColour = "#0095DD";
var paddleHeight = 10;
var paddleWidth = 75
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillstyle = ballColour;
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//draw the ball
	drawBall();

	//Bounce off the walls
	if(x+dx>canvas.width-ballRadius||x+dx<ballRadius){
		dx=-dx;
	
}
	if(y+dy>canvas.height-ballRadius||y+dy<ballRadius){
		dy=-dy;
		
}
	x += dx;
	y += dy;
}

//Define a paddle to hit ball
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillstyle = ballColour;
	ctx.fill();
	ctx.closePath();
}

	document.addEventListener("keyDown", keyDownHandler, false);
	document.addEventListener("keyUp", keyUpHandler, false);

	function keyDownHandler(e){
	if (e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if (e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}

	
	if (rightPressed) {
		paddleX += 7;
	}	
	else if(leftPressed) {
		paddleX -= 7;
		
	}
	

setInterval(draw, 10);