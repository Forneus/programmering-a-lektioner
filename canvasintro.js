"use strict";

var draw = startCanvas("maincanvas");

draw.circle(400, 225, 100, "red");

for (var i=0; i < 100; i+= 1) {
    // loop body
    draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor());
}

draw.clearScreen();

function drawRandomCircleTimeout() {
    draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor());
    if ( drawRandomCircleTimeout.count <100){
         drawRandomCircleTimeout.count+=1;
         window.setTimeout(drawRandomCircleTimeout, 250);
    }
}

drawRandomCircleTimeout.count=1;
drawRandomCircleTimeout();

function drawRandomCircle() {
    draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor());
}
//draw.canvas().onclick = drawRandomCircle;

function drawPositionedCircle(evt) {
    draw.circle(evt.pageX - draw.canvasX(), evt.pageY - draw.canvasY(), 10 + draw.randomInteger(50), draw.randomColor(), true);
}

draw.canvas().onclick = drawPositionedCircle;
