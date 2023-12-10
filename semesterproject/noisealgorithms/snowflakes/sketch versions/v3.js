/** Setup function is called by p5 once */
function setup() {
    // Create a canvas that fills the browser window
    createCanvas(windowWidth, windowHeight);
    // Set black as the background color
    background(0);
    // Move the origin to the center of the canvas
    translate(width / 2, height / 2);
    // Set the stroke color to white
    stroke(255);
    // Set the stroke weight to 2 pixels
    strokeWeight(2);

    // Draw six arms of the snowflake
    const arms = 6;

    for (let armIndex = 0; armIndex < arms; armIndex++) {
        push();
        rotate(TWO_PI / arms * armIndex);
        drawSnowflakeArm();
        pop();
    }
}

/** Draws a single snowflake arm */
function drawSnowflakeArm() {
    // Divide the arm into 10 sections
    const sections = 10;
    // Set the armlength to 100 pixels
    const armLength = 100;

    beginShape();
    for (let sectionIndex = 0; sectionIndex <= sections; sectionIndex++) {
        // Calculate the length of the current arm section
        let armSectionLength = armLength / sections * sectionIndex;
        // Calculate the angle of the current arm section
        let angle = map(noise(sectionIndex * 0.2, frameCount * 0.01), 0, 1, -PI / 6, PI / 6);
        // Calculate the x and y coordinates of the current arm section
        let x = armSectionLength * cos(angle);
        let y = armSectionLength * sin(angle);
        // Draw a vertex at the x and y coordinates
        vertex(x, y);
    }
    endShape();
}