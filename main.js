canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	backgroundtag=new Image();
    backgroundtag.onload=uploadBackground;
    backgroundtag.src=background_image;
    rovertag=new Image();
    rovertag.onload=uploadgreencar;
    rovertag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundtag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	
	ctx.drawImage(rovertag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{if(greencar_y<=350){
	greencar_y=greencar_y+10;
	uploadBackground();
	uploadgreencar();
}
}
	

function left()
{
	if(greencar_x>=0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x<=750){
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadgreencar();
	}
}