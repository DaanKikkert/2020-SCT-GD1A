// maak een variabele voor de canvas
var canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
var context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
var ballRadius = 30;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
let colors = ["red", "green", "blue", "purple", "pink"]

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
}


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}



setInterval(draw, 1);