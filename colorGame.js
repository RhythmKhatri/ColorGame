var colors=generateRandomColors(6)
var pickedColor=pickColor();
var messageDisplay=document.querySelector("#message");
var squares = document.querySelectorAll(".square"); 
for (var i = 0;i<squares.length; i++) 
{
 	squares[i].style.backgroundColor= colors[i];
 	squares[i].addEventListener("click",function(){
 	var clickedColor=this.style.backgroundColor;
 	console.log(clickedColor , pickedColor);
 	
	if(clickedColor===pickedColor)
	{
		var h1= document.querySelector("h1");
		h1.style.backgroundColor=clickedColor;
		messageDisplay.textContent="Correct!!";
		changeColor(clickedColor);
	}
	else
	{
		message.textContent="Try Again!!";
		this.style.backgroundColor="#232323"	;
	}

												})  
} 
var displayChange= document.querySelector("#change");
displayChange.textContent=pickedColor;

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	} 
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num)
{
	var arr = [];
	for(var i=0; i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}