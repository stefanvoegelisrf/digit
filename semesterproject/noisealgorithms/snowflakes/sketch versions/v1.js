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

    drawSnowflakeArm();
}

/** Draws a single snowflake arm */
function drawSnowflakeArm() {
    // Divide the arm into 10 sections
    const sections = 1;
    // Set the armlength to 100 pixels
    const armLength = 100;

    beginShape();
    for (let sectionIndex = 0; sectionIndex <= sections; sectionIndex++) {
        // Calculate the x and y coordinates of the current arm section
        let x = armLength * sectionIndex;
        let y = armLength * sectionIndex;
        // Draw a vertex at the x and y coordinates
        vertex(x, y);
    }
    endShape();
}