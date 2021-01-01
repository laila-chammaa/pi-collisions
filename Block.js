class Block {
    constructor(x, w, v, m) {
        this.x = x;
        this.y = height - w;
        this.w = w;
        this.v = v;
        this.m = m;
    }

    collide(other) {
        //if the left side of this is greater than the right side of other
        return !(this.x > other.x + other.w || this.x + this.w < other.x)
    }

    hitWall() {
        return (this.x <= 0);
    }
    
    reverseV() {
        this.v *= -1;
    }

    bounce(other) {
        var sumM = this.m + other.m;
        //Elastic collision equation
        var newV = ((this.m - other.m) / sumM * this.v) + ((2 * other.m) / sumM * other.v);
        return newV;
    }

    update() {
        this.x += this.v
    }

    show() {
        fill(160,0,200)
        rect(this.x, this.y, this.w, this.w)
    }
}