var ctx = canvas.getContext("2d");

var duck = new Image();
duck.src = "https://artesient.github.io/ducksprite.png";

image.onload = function() {
    ctx.drawImage(duck, 0, 0);
}