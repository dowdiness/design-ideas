let p5
export default function (_p5) {
  p5 = _p5
  var speed = 2;
  var posX = 0;
  p5.setup = _ => {
    var canvas = p5.createCanvas(window.innerWidth, window.innerHeight)
    canvas.parent("p5Canvas");
  }

  p5.draw = _ => {
    p5.background(0);
    const degree = p5.frameCount * 3;
    const y = p5.sin(p5.radians(degree)) * 50;
    p5.push();
    p5.translate(0, p5.height / 2);
    p5.ellipse(posX, y, 50, 50);
    p5.pop();

    posX += speed;
    if (posX > p5.width || posX < 0) {
      speed *= -1;
    }
  }
}
