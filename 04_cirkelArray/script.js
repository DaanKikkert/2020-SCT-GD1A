// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

// random kleuren
let colors = ["blue","purple","green","yellow","gold","black","red"]

// maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

circles = [];
for(let i =0; i<10; i++){
// hier kun je op de canvas tekenen
    let circleObject = {};
    circleObject.X = 400 + getRandomInt(0,width);
    circleObject.Y = 200 + getRandomInt(0,width);
    circleObject.radius = 40;
    circleObject.color = colors[getRandomInt(0, colors.length)];
    circleObject.speedX = 10;
    circleObject.speedY = 10;

    circleObject.draw = function(){
        context.beginPath();
        context.lineWidth = "5";
        context.fillStyle = circleObject.color;
        context.arc(circleObject.X,circleObject.Y,circleObject.radius,0,Math.PI*2);
        context.closePath();
        context.stroke();
        context.fill();
    }
    circleObject.update = function(){
        circleObject.X = circleObject.X + circleObject.speedX;
        circleObject.Y = circleObject.Y + circleObject.speedY;

//Y
        if(circleObject.Y > height - circleObject.radius){
            circleObject.speedY = - circleObject.speedY;
        }
        if(circleObject.Y < 0 + circleObject.radius){
            circleObject.speedY = - circleObject.speedY;
        }
//X
        if(circleObject.X > width - circleObject.radius){
            circleObject.speedX = - circleObject.speedX;
        }

        if(circleObject.X < 0 ){
            circleObject.speedX = -circleObject.speedX;
        }
    }

    circles.push(circleObject);
}

function anime(){
    context.clearRect(0,0,width,height);
    for (let i = 0; i<circles.length;i++){
        circles[i].update();
        circles[i].draw();
    }
}

setInterval(anime,10);

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1) + min)
}


