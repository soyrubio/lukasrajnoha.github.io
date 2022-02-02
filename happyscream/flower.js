const POT_SIZE = 100;
const MAX_GROW_SPEED = .002
;


class Flower {
  constructor(flowerSettings) {
    this.flowerSettings = flowerSettings;
    this.position = new p5.Vector(flowerSettings.x, flowerSettings.y - flowerSettings.potSize - 3);
    this.stem = new Stem(this, flowerSettings.stemSize);
    this.leaves = new Leaves(this);
    this.kochlik = new Kochlik(flowerSettings.potSize);
    this.roses = [new Rose(flowerSettings.roseSize, 200), new Rose(flowerSettings.roseSize / 2, 400), new Rose(flowerSettings.roseSize / 3, 500)]
  }

  startGrowth = () => {
    this.size = 0;
    this.goalSize = 0;
    this.speed = 0;
    this.possibleRoses = {};
  }

  initDisplay = () => {
    noFill();
    strokeWeight(1);
    background(75, 18, 44);
    background(159, 71, 11);
    stroke(60, 15, 65);
    stroke(153, 58, 42);
  }

  growState = (size, id) => {
    // changes
    this.size = size;

    if (id != undefined) {
      const roseId = getRoseId(id);
      if (roseId in this.possibleRoses) {
        this.possibleRoses[roseId] += deltaTime;
      } else {
        this.possibleRoses[roseId] = deltaTime;
      }
    }

    // display
    this.initDisplay();
    this.stem.display(this.size, this.position);
    this.kochlik.display(this.position);
  }
  
  grownState = () => {
    this.initDisplay();
    this.stem.display(this.size, this.position);
    const roseCenter = new p5.Vector(this.stem.getPositionAt(this.size, this.position));
    this.roses.forEach((rose) => { rose.display(roseCenter); })
    this.leaves.display(1, this.position);
    this.kochlik.display(this.position);
  }

  updateSpeedAndSize = () => {
    this.speed = lerp(this.speed, this.goalSize - this.size, .01);
    this.speed = min(this.speed, MAX_GROW_SPEED);
    this.size += this.speed;
  }

  finishGrowthState = (animation) => {
    this.initDisplay()
    this.stem.display(this.size, this.position);
    const roseCenter = new p5.Vector(this.stem.getPositionAt(this.size, this.position));
    this.roses.forEach((rose) => { rose.display(roseCenter, animation); })
    this.leaves.display(animation, this.position);
    this.kochlik.display(this.position);
  }

  initFinishGrowth = () => {
    let sortedPossibleRoses = Object.keys(this.possibleRoses).map((key) => {
      return [key, this.possibleRoses[key]];
    });
    sortedPossibleRoses.sort((a, b) => { return b[1] - a[1]});
    for (let i = 0; i < 3; i++) {
      if (i < this.possibleRoses.length) {
        this.roses[i].setGoal(sortedPossibleRoses[i][0], undefined, 0);
      } else {
        this.roses[i].setGoal(getRandomRoseId(), undefined, 0);
      }
    }
    this.animation = 0;
    this.size = 1;
  }

  isFinished = () => {
    return this.roses.every((rose) => rose.isFinished);
  }

  fallState = (animation) => {
    animation = easeInOutQuad(animation)
    const positionShift = this.position.x * -2 * animation;
    const newPosition = p5.Vector.add(this.position, new p5.Vector(positionShift, 0));

    this.initDisplay()
    this.stem.display(this.size, newPosition);
    const roseCenter = new p5.Vector(this.stem.getPositionAt(this.size, newPosition));
    this.roses.forEach((rose) => { rose.display(roseCenter); })
    this.leaves.display(1, newPosition);
    this.kochlik.display(newPosition);
  }

  initState = (animation) => {
    animation = easeInOutQuad(animation);
    const positionShift = this.position.x * -2 * (1 - animation);
    const newPosition = p5.Vector.add(this.position, new p5.Vector(positionShift, 0));

    this.initDisplay()
    this.kochlik.display(newPosition);
  }
}

getRoseId = (n) => {
  return n;
} 