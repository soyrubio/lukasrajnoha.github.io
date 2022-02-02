class Kochlik {
    constructor(size) {
        this.size = size / 2;
    }

    display = (position) => {
        push()
        translate(position.x, position.y)
        beginShape();
        vertex(-this.size, 0);
        vertex(this.size, 0);
        vertex(.8 * this.size, this.size * 2);
        vertex(-.8 * this.size, this.size * 2);
        vertex(-this.size, 0);
        endShape();
        pop();
    }
}