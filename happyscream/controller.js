const INIT = 0;
const IDLE = 1
const GROW = 2;
const FINISH_GROWTH = 3;
const GROWN = 4;
const FALL = 5;
const NONE = 6;

const ANIMATION_GROW_SPEED = .00015;

const AUDIO_IDLE_THRESHOLD = 5;
const AUDIO_GROW_THRESHOLD1 = .01;
const AUDIO_GROW_THRESHOLD2 = 5;

class FlowerController {
    constructor(flowerSettings) {
        this.flowerSettings = flowerSettings;
        this.animationEnd = 1;
        this.setState(NONE);
        this.audio = new Audio(this.start);
    }

    start = () => {
        this.audio.resumeLevel();
        while (this.audio.getRelativeLevel() > 1.5) {
        }
        this.setState(INIT);
        
    }

    setState = (state)  => {
        if (state == INIT) {
            this.flower = new Flower(this.flowerSettings);
            this.audio.stopLevel();
            this.audio.stopPitch();
        }

        if (state == IDLE) {

            this.audio.resumePitch();
        }

        if (state == GROW) {
            this.threshold = (this.audio.getLevel() / 3);
            this.animation = 0;
            this.speed = 0;
            this.growDirection = 1;
            this.flower.startGrowth();
        }

        if (state == FINISH_GROWTH) {
            this.audio.stopLevel();
            this.audio.stopPitch();
            this.flower.goalSize = 1;
            this.flower.initFinishGrowth();
        }

        if (state == GROWN) {
            this.audio.resumeLevel();
            setTimeout(() => {
                this.setState(FALL);
            }, 5000);
        }

        if (state == FALL) {
            this.audio.stopLevel();
        }


        this.animation = 0;
        this.state = state;

    }

    update = () => {
        if (this.state == INIT) {
            if (this.animation < this.animationEnd) {
                this.animation += .005;
            }
            this.flower.initState(this.animation);
            if (this.animation >= this.animationEnd) {
                this.setState(IDLE);
            }            
        }

        if (this.state == IDLE) {
            //console.log(this.audio.getRelativeLevel());
            if (this.audio.getRelativeLevel() > AUDIO_IDLE_THRESHOLD) {
                this.setState(GROW);
            }
        }
        
        if (this.state == GROW) {
            //console.log(this.threshold, this.audio.getLevel())
            //console.log(" - ", this.animation, this.speed, this.growDirection)
            if (this.growDirection == 1 && this.audio.getLevel() < this.threshold) {
                this.growDirection = -1;
            }

            if (this.growDirection == -1 && this.audio.getLevel() > this.threshold) {
                this.growDirection = 1;
            }

            this.speed = lerp(this.speed, ANIMATION_GROW_SPEED*this.growDirection*deltaTime, .05);
            this.animation += this.speed;

            this.flower.growState(easeInOutQuad(this.animation), this.audio.getNote());

            if (0 >= this.animation) {
                this.setState(IDLE);
            }

            if (this.animation >= this.animationEnd) {
                this.setState(FINISH_GROWTH);
            }

            
        }

        if (this.state == FINISH_GROWTH) {
            if (this.animation < this.animationEnd) {
                this.animation += .005
            }
            this.flower.finishGrowthState(easeInOutQuad(this.animation));

            if (this.animation >= this.animationEnd && this.flower.isFinished()) {
                this.setState(GROWN);
            }
        }

        if (this.state == GROWN) {
            this.flower.grownState();

            if (this.audio.getRelativeLevel() > AUDIO_IDLE_THRESHOLD) {
                this.setState(GROW);
            }
        }

        if (this.state == FALL) {
            if (this.animation < this.animationEnd) {
                this.animation += .005
            }

            this.flower.fallState(this.animation);

            if (this.animation >= this.animationEnd) {
                this.setState(INIT);
            }
        }
    }

    
} 

easeInOutQuad = (x) => {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
  }