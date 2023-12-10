function setup() {
    // noiseSeed(38);
    // noiseSeed(58);
    // noiseSeed(78);
    // noiseSeed(89);
    // noiseSeed(94);
    // noiseSeed(95);
    // noiseSeed(98);
    noiseSeed(135);
    createCanvas(400, 400);
    background(0);

    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(2);

    // Number of arms
    const arms = 6;

    for (let i = 0; i < arms; i++) {
        push();
        rotate(TWO_PI / arms * i);
        drawSnowflakeArm();
        pop();

        push();
        rotate(TWO_PI / arms * i + PI / arms);
        scale(-1, 1);
        drawSnowflakeArm();
        pop();
    }
}

function drawSnowflakeArm() {
    const steps = 10;
    const length = 100;

    beginShape();
    for (let i = 0; i <= steps; i++) {
        let l = length / steps * i;
        let angle = map(noise(i * 0.2, frameCount * 0.01), 0, 1, -PI / 6, PI / 6);
        let x = l * cos(angle);
        let y = l * sin(angle);
        vertex(x, y);
    }
    endShape();
}