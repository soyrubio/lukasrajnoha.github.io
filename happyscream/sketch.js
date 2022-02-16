const GROW_SPEED = .5;
const NOISE_SCALE = .01;
const SEED = 0;
const STEM = 1;
const FLOWER = 2;
const DONE = 3;

let color;
let cnv;
let canvas;

let audio;
let flower;
let controller;
let stream;

async function setup() {
  getAudioContext().suspend();
  stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  const height = document.querySelector('.main').offsetHeight;
  const width = document.querySelector('.main').offsetWidth;
  cnv = createCanvas(width, height);
  cnv.parent("sketch_container");

  const flowerSettings = {
    x: min(500, width/2),
    y: height,
    roseSize: (height - 100) / 3,
    potSize: (height - 100) / 4,
    stemSize: (height - 100) / 2
  }

  colorMode(HSB, 360, 100, 100, 1);

  noLoop();

  controller = new FlowerController(flowerSettings);
}

function mousePressed() {
  userStartAudio();
}

function draw() {
  controller.update();
}



