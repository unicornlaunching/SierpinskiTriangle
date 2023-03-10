const canvas = document.getElementById('sierpinski-triangle');
const ctx = canvas.getContext('2d');

function drawSierpinskiTriangle(x1, y1, x2, y2, x3, y3, depth) {
  // Base case: draw the triangle
  if (depth === 0) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
  } else {
    // Recursive case: draw the sub triangles
    const x4 = (x1 + x2) / 2;
    const y4 = (y1 + y2) / 2;
    const x5 = (x2 + x3) / 2;
    const y5 = (y2 + y3) / 2;
    const x6 = (x1 + x3) / 2;
    const y6 = (y1 + y3) / 2;

    drawSierpinskiTriangle(x1, y1, x4, y4, x6, y6, depth-1);
    drawSierpinskiTriangle(x4, y4, x2, y2, x5, y5, depth-1);
    drawSierpinskiTriangle(x6, y6, x5, y5, x3, y3, depth-1);
  }
}

ctx.fillStyle = '#fff';
drawSierpinskiTriangle(100, 100, 400, 100, 250, 350, 4);
