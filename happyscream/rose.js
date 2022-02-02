const COLORS = [
    [0, 32, 100],
    [33, 35, 100],
    [62, 29, 100],
    [110, 25, 100],
    [185, 39, 100],
    [217, 37, 100],
    [249, 30, 100],
    [300, 22, 100],
    [60, 1, 100]
]

const ROSE_ANIMATION_SPEED = .1/1000;

getRandomRoseId = () => {
    return round(random(12));
}

class Rose {
    constructor(size) {
        this.size = size;       
        this.dvals = {
            prev: 0,
            goal: 0
        }
        this.tvals = {
            prev: 0,
            goal: 0
        }
        this.nvals = {
            prev: 0,
            goal: 0
        }
        this.cvals = {
            prev: 0,
            goal: 0
        }
        this.size = size;
        this.isActive = false;
        this.isFinished = false;
        this.animationStep = 0;
        this.color = COLORS[floor(random(0, COLORS.length-.01))];
        this.rotationVelocity = random(-2, 2);
    }

    setGoal = (goal, size, t) => {
        if (size == undefined) {
            size = this.size;
        }
        
        this.finalGoal = goal;
        this.isActive = true;

        this.tvals = {
            prev: t, 
            goal: getT(getN(goal), getD(goal))
        }

        this.dvals = {
            prev: this.dvals.goal,
            goal: getD(goal)
        }

        this.nvals = {
            prev: this.nvals.goal,
            goal: getN(goal)
        }

        this.cvals = {
            prev: this.size,
            goal: size
        }

        if (t == undefined) {
            t = getT(this.nvals.goal, this.dvals.goal)
        }

        this.tvals = {
            prev: t, 
            goal: getT(getN(goal), getD(goal))
        }

        

        this.currentGoal = goal;
    }

    update = () => {
        if (this.isFinished == true) return;
        
        this.animationStep += ROSE_ANIMATION_SPEED * deltaTime;

        if (this.animationStep >= 1) {
            this.isFinished = true;
        }
    }

    display = (position) => {
        if (!this.isActive) return;
        this.update();

        push();

        stroke(this.color[0], this.color[1], this.color[2], 1);

        translate(position.x, position.y);
        let a = map(noise(frameCount * 0.002), 0, 1, -20, 20) + frameCount * .2;
        a *= this.rotationVelocity;
        rotate(radians(a))

        const lerpValue = easeInOutQuad(this.animationStep);
        const d = lerp(this.dvals.prev, this.dvals.goal, lerpValue);
        const n = lerp(this.nvals.prev, this.nvals.goal, lerpValue);
        const c = lerp(this.cvals.prev, this.cvals.goal, lerpValue);
        const t = lerp(this.tvals.prev, this.tvals.goal, lerpValue);
        //let shift = getShift(this.nvals.goal, this.cvals.goal, this.dvals.goal);
        //shift += map(lerpValue, 0, 1, 0, TWO_PI);
        const shift = 0;
        beginShape();
        for (var i = shift; i < t * TWO_PI + shift; i += 0.001) {
            let r = c * cos(d * i) + n;
            let x = r * cos(i);
            let y = r * sin(i);
            vertex(x, y);
        }
        endShape();

        pop();
    }
}

getD = (n) => {
    return n % 10 + 2;
}

getN = (n) => {
    return getD(n) * ceil(n / 10);
}

getC = (n) => {
    return n + 200;
}

getT = (n, d) => {
    let rec = (a, b) => {
        return b ? rec(b, a % b) : a;
    }
    return d / rec(round(n), round(d));
}

getShift = (n, c, d) => {
    const shift = acos(-n / c) / d;
    return isNaN(shift) ? 0 : shift;
}