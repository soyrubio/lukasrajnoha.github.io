class Leaves {
    constructor(root) {
        this.root = root;

        this.leaves = [
            new Leaf(85, 20, 0, -130, this.root),
            new Leaf(60, 15, 0, -50, this.root)
        ]
    }

    display = (size, position) => {
        this.leaves.forEach(leaf => leaf.display(size, position));
    }
}

class Leaf {
    constructor(w, h, position, rotation, root) {
        this.w = w;
        this.h = h;
        this.position = position;
        this.rotation = rotation;
        this.root = root;
    }

    display = (size, position) => {
        push();

        translate(position.x, position.y);
        rotate(radians(this.rotation))

        const distanceBetweenLeaves = 15;

        const getC = (w, h) => {
            return (-4 * h) / pow(w, 2)
        }
        const getX0 = (c, h) => {
            return sqrt((-h) / c)
        }
        const getF = (c, x0, y0) => {
            return (x) => {
                return c * pow(x - x0, 2) + y0
            }
        }

        const c = getC(this.w, this.h);
        const x0 = getX0(c, this.h);

        let f = getF(c, x0, this.h);
        let f2 = getF(-c, x0, -this.h);

        beginShape();
        for (let i = 0; i < (this.w + 1); i++) {
            const x = i;
            const y = f(x);
            vertex(x * size, y * size);
        }
        endShape();

        beginShape();
        for (let i = 0; i < (this.w + 1); i++) {
            const x = i;
            const y = f2(x);
            vertex(x * size, y * size);
        }
        endShape();

        for (let i = distanceBetweenLeaves; i < this.w - distanceBetweenLeaves; i += distanceBetweenLeaves) {
            f = getF(c, x0, this.h);
            f2 = getF(-c, x0, -this.h);

            const x1 = i;
            const y1 = 0;
            const j = i + distanceBetweenLeaves;
            const x2 = j;

            let y2 = f(j);
            line(x1 * size, y1 * size, x2 * size, y2 * size);

            y2 = f2(j);
            line(x1 * size, y1 * size, x2 * size, y2 * size);
        }

        line(0, 0, this.w * size, 0);

        pop();
    }
}