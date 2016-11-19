var canvas;
var context;

var tankWidth = 15;
var tankHeight = 25;
var tankX = 50;
var tankY = 50;
var tankSpeed = 0;
var tankRotation = 0;
var tankRotationSpeed = 0;

function main()
{
	canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
   
    document.addEventListener("keydown", function(event) {
       event.preventDefault();
	   if (event.key == "w")
		   tankSpeed = .5;
	   if (event.key == "s")
		   tankSpeed = -.5;
	   if (event.key == "d")
		   tankRotationSpeed = .02;
	   if (event.key == "a")
		   tankRotationSpeed = -.02;
	});
   
    document.addEventListener("keyup", function(event) {
       event.preventDefault();
	   if (event.key == "w")
		   tankSpeed = 0;
	   if (event.key == "s")
		   tankSpeed = 0;
	   if (event.key == "a")
		   tankRotationSpeed = 0;
	   if (event.key == "d")
		   tankRotationSpeed = 0;
	});
	
	draw();
}

function clearScreen()
{
	context.resetTransform();
	
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBackground()
{
	context.resetTransform();
	
    context.fillStyle="#00FF00";
	context.beginPath();
	context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
	context.closePath();
}

function drawTank()
{
	context.resetTransform();
	context.translate(tankX, tankY);
	context.rotate(tankRotation);
	context.translate(-tankWidth / 2, -tankHeight / 2);
	
    context.fillStyle="#FF0000";
	context.beginPath();
	context.rect(0, 0, tankWidth, tankHeight);
    context.fill();
	context.closePath();
}

function draw()
{ 
    requestAnimationFrame(draw);
	
	clearScreen();
	
	drawBackground();
	
	drawTank();
	
	tankX = tankX + tankSpeed * Math.cos(tankRotation + Math.PI / 2);
	tankY = tankY + tankSpeed * Math.sin(tankRotation + Math.PI / 2);
	tankRotation = tankRotation + tankRotationSpeed;
}