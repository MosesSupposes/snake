// Constructor
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    this.show = function() {
        fill(255) // white
        rect(this.x, this.y, 10,10)
    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
}