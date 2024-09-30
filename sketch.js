function setup() {
    createCanvas(800, 600);
    background(0);
  
    for (let i = 0; i < 1000; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(3, 10);
      let colorR = random(100, 255);
      let colorG = random(100, 255);
      let colorB = random(100, 255);
  
      drawStar(x, y, size, color(colorR, colorG, colorB));
    }
  }
  
  function drawStar(x, y, radius, starColor) {
    fill(starColor);
    noStroke();
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = TWO_PI / 5 * i;
      let sx = x + cos(angle) * radius;
      let sy = y + sin(angle) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  