var bgX = 0;
var baseX = 0;
var state = 0;
var bird = {x: 0, y:0 ,vy: 0, ay: 1};
var i = 0;

function preload() {
    bgImg = loadImage("assets/sprites/background-day.png");
    baseImg = loadImage("assets/sprites/base.png");
    msgImg = loadImage("assets/sprites/message.png");
    overImg = loadImage("assets/sprites/gameover.png");
    birds = [];
    ["blue", "red", "yellow"].forEach((i) => {
        ["down", "mid", "up"].forEach((j) => {
            let path = `assets/sprites/${i}bird-${j}flap.png`;
            birds.push(loadImage(path));
    })});
}

function setup() {
    createCanvas(640, 480);
    let cvsWrapper = document.getElementById("canvasWrapper");
    let myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent(cvsWrapper);
    baseDisplayW = width;
    baseDisplayH = width / baseImg.width * baseImg.height;
    baseTop = height - baseDisplayH;
    let msgScale = width / msgImg.width * 0.9;
    msgDisplayW = msgImg.width * msgScale;
    msgDisplayH = msgImg.height * msgScale;
    msgTop = msgLeft = (width - msgDisplayW) / 2;
    let overScale = width / overImg.width * 0.9;
    overDisplayW = overImg.width * overScale;
    overDisplayH = overImg.height * overScale;
    overLeft = (width - overDisplayW) / 2;
    overTop = 0.2 * height;
    bird.reset = () => {
        bird.x = width / 2;
        bird.y = height / 2;
        bird.vy = 0;
        bird.ay = 0;
        bird.slope = 0;
        bird.dslope = .04;
        bird.ddslope = .0007;
        bird.id = Math.floor(Math.random()*3);
        bird.img = birds[bird.id*3+1];
        bird.wingCnt = 1;
        state = 0;
    }
    bird.fly = () => {
        bird.vy = -9;
        bird.ay = .4;
        bird.slope = -1;
        bird.dslope = .04;
        bird.wingCnt = 0;
        state = 1;
    }
    bird.die = () => {
        bird.img = birds[bird.id*3+1];
        state = 2;
    }
    bird.ground = () => {
        bird.vy = 0;
        bird.ay = 0;
        state = 3;
    }
    bird.reset();
}

function draw() {
    // background
    background(0);
    image(bgImg, bgX, 0, width, height);
    image(bgImg, bgX + width, 0, width, height);
    image(baseImg, baseX, baseTop, baseDisplayW, baseDisplayH);
    image(baseImg, baseX + width, baseTop, baseDisplayW, baseDisplayH);
    if (state === 0 || state === 1) {
        let bgDx = -.5;
        let baseDx = -3;
        bgX = bgX+bgDx <= -width ? bgX+bgDx+width : bgX+bgDx;
        baseX = baseX+baseDx <= -width ? baseX+baseDx+width : baseX+baseDx;
        bird.wingCnt = bird.wingCnt+1 >= 15 ? 0: bird.wingCnt+1;
        bird.img = birds[bird.id*3+Math.floor(bird.wingCnt/5)];
    }
    if (state === 0) {
        image(msgImg, msgLeft, msgTop, msgDisplayW, msgDisplayH);
    } else if (state === 1) {
        bird.vy += bird.ay;
        bird.y += bird.vy;
        bird.dslope += bird.ddslope;
        bird.slope += bird.dslope;
    } else if (state === 3) {
        image(overImg, overLeft, overTop, overDisplayW, overDisplayH);
    }

    push();
    imageMode(CENTER);
    translate(bird.x, bird.y);
    rotate(atan(bird.slope));
    image(bird.img, 0, 0);
    pop();
    if (bird.y + bird.img.width/2 > baseTop) {
        bird.die();
        bird.ground();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (state === 0) {
            bird.fly();
        } else if (state === 1) {
            bird.fly();
        } else if (state === 3) {
            bird.reset();
        }
    } else if (keyCode === 82) {
        bird.reset();
    }
    console.log(keyCode);
}
