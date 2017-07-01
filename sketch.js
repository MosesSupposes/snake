var s;
var scl = 20;

function setup() {
    createCanvas(600,600);
    s = new Snake();
    frameRate(10);
}

function draw() {
    background(51);
    s.update();
    s.show();
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            s.dir(0, -1);
            break;
        case DOWN_ARROW:
            s.dir(0, 1);
            break;
        case RIGHT_ARROW:
            s.dir(1, 0);
            break;
        case LEFT_ARROW:
            s.dir(-1, 0);
            break;
    }     
}
