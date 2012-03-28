var draw = startCanvas("maincanvas");


// field för bollen att studsa inom
var field = {
    x: 100,
    y: 50,
    width: 600,
    height:350,
};
// field.x   ^^^^^^
draw.strokeRect(field.x, field.y, field.width, field.height, "maroon");
// Värden för en cirkel = bollen
// Den startar i mitten
// Vinkeln är mellan 0 och 2 pi
var ball = {
    x:field.x+field.width / 2,
    y:field.y+field.height / 2,
    r:10,
    totspeed: 10,
    color:"blue",
    angle:Math.random() * Math.PI * 2,
    isMoving : false
};
// ball2 = ball; // Inte en kopia
var balls = []; // tom array
balls[0] = Object.create(ball);
balls[1] = Object.create(ball);
balls[2] = Object.create(ball);
balls[3] = Object.create(ball);
balls[4] = Object.create(ball);
balls[5] = Object.create(ball);
balls[6] = Object.create(ball);
balls[7] = Object.create(ball);
balls[8] = Object.create(ball);
balls[9] = Object.create(ball);
balls[10] = Object.create(ball);
balls[11] = Object.create(ball);
balls[12] = Object.create(ball);
balls[13] = Object.create(ball);
balls[14] = Object.create(ball);

var colors = ["red", "green", "blue", "fuchsia", "maroon", "red", "green", "blue", "fuchsia", "maroon"];
for ( var i = 0; i < balls.length; i += 1 ) {
    balls[i].color = colors[i];
    balls[i].angle = Math.random() * Math.PI * 2;
    // Räknas om när farten ändras
    balls[i].xSpeed = Math.cos(balls[i].angle) * balls[i].totspeed;
    balls[i].ySpeed = Math.sin(balls[i].angle) * balls[i].totspeed;
}
function moveBall() {
    // Rensa först bort spelplanen = radera bollen i dess förra posistion
    draw.clearRect(field.x, field.y, field.width, field.height);
    for ( var  i = 0; i < balls.length; i += 1 ) {
        // Kollisionsdetektera
        if ( balls[i].x < (field.x + balls[i].r / 2) ) {
            balls[i].xSpeed = Math.abs(balls[i].xSpeed);
        } else if ( balls[i].x > (field.x + field.width - balls[i].r / 2) ) {
            balls[i].xSpeed = -Math.abs(balls[i].xSpeed);
        } else if ( balls[i].y < (field.y + balls[i].r / 2) ) {
            balls[i].ySpeed = Math.abs(balls[i].ySpeed);
        } else if ( balls[i].y > (field.y + field.height - balls[i].r / 2) ) {
            balls[i].ySpeed = -Math.abs(balls[i].ySpeed);
        }

        // Räkna ut ny placering av bollen
        balls[i].x += balls[i].xSpeed;
        balls[i].y += balls[i].ySpeed;
        draw.circle(balls[i].x, balls[i].y, balls[i].r, balls[i].color, true);
    }
    // console.log(ball.angle * 180 / Math.PI);
    if ( ball.isMoving ) {
        // Om man tar bort denna flyttar bollen ett steg per klick
        setTimeout(moveBall, 20);
    }
}
moveBall();
// Start
document.getElementById("start").onclick = function () {
    if ( ball.isMoving) {
        return false;
    }
    ball.isMoving = true;
    moveBall();
    this.setAttribute("disabled", "disabled");
    document.getElementById("stop").removeAttribute("disabled");
};

document.getElementById("stop").
setAttribute("disabled", "disabled");
// Stopp
document.getElementById("stop").onclick = function () {
    ball.isMoving = false;
    document.getElementById("start").removeAttribute("disabled");
    this.setAttribute("disabled");
};
