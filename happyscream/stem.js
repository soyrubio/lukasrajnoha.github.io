class Stem {
    constructor(root) {
        this.root = root;
        this.length = 400;
        this.a = 0;
        this.f = (y) => {
            return this.a * pow(y, 2);
        }
        
    }

    update = () => {
        this.a  = map(noise(frameCount * 0.002), 0, 1, -.001, .001);
    }

    getPositionAt = (n, position) => {
        const step = this.length * n;
        const x = position.x + this.f(step);
        const y = position.y - step;
        return new p5.Vector(x, y);
    }

    display = (size, position) => {
        this.update();
        beginShape();
        for (let i = 0; i < this.length * size; i++) {
            const x = position.x + this.f(i);
            const y = position.y - i;
            vertex(x, y);
        }
        endShape();
    }
}