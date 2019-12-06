// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

function getRandomNumber(max)
{
    return Math.floor(Math.random()*max)
}

function drawCircle()
{
    context.beginPath()
    context.fillStyle = "red";
    context.arc(getRandomNumber(1000), getRandomNumber(1000), getRandomNumber(40),0,Math.PI*2);
    context.stroke();
    context.fill();
    context.closePath();
}

function animate(){
drawCircle();
}

setInterval(animate, 100);

