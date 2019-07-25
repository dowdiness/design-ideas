<template>
  <canvas id="c">
    <h1>Hello!</h1>
  </canvas>
</template>

<style>
canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}
h1 {
  z-index: 1000;
  color: #eee;
  font-size: 8rem;
  width: 6rem;
  height: 3rem;
}
</style>

<script>
import { resizeCanvas } from "~/utilities/canvas.js"
import { map } from "~/utilities/math.js"
import Color from "color"
import SimplexNoise from "simplex-noise"

export default {
  mounted() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    var cH;
    var cW;
    var bgColor = "#fff";
    var animations = [];
    var circles = [];
    let lines = []
    let x, y;

    var resizeCanvas = function() {
      cW = window.innerWidth;
      cH = window.innerHeight;
      c.width = cW * devicePixelRatio;
      c.height = cH * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    function removeAnimation(animation) {
      var index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    (function init() {
      resizeCanvas();
      var simplex = new SimplexNoise()
      for(var i = 0; i < 25; i++) {
        let circle = {
          x: anime.random(0, cW),
          y: anime.random(0, cH),
          r: anime.random(20, 30),
          color: Color("#e2e8f0"),
          seed: Math.random()
        }
        circles.push(circle)

        let line = {
          x: anime.random(0, cW),
          y: anime.random(0, cH),
          l: anime.random(30, 130),
          color: Color("#edf2f7"),
          seed: Math.random()
        }
        lines.push(line)
      }
      window.addEventListener("resize", resizeCanvas);
    })();

    function handleAnimations () {
      var circleAnimation = anime({
      targets: circles,
      x: function(circle) {
        return circle.x < cW ? circle.x + 1 : 0
      },
      y: function(circle) {
        return circle.y < 0 ? circle.y - 1 : cH
      },
      loop: true,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      update: function() {
        for(let i = 0; i++; i < 30) {
          ctx.fillStyle =  "#cbd5e0";
          ctx.beginPath();
          ctx.arc(circles[i].x, circles[i].y, anime.random(20, 300), 0, Math.PI*2, false);
          ctx.fill();
          }
        }
      })

      animations.push(circleAnimation)
    }

    function circleAnime () {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cW, cH);
      circles.map((circle, i) => {
        if(circle.x < cW) {
          circle.x += 1
        } else {
          circle.x = 0
        }
        if(circle.y > 0) {
          circle.y -= 0.5
        } else {
          circle.y = cH
        }
        if (circle.seed < 1 && circle.seed > 0.1) {
          circle.seed += map(anime.random(0, 1000), 0, 1000, -0.05, 0.05)
        } else if (circle.seed > 1) {
          circle.seed -= map(anime.random(0, 1000), 0, 1000, 0, 0.05)
        } else if (circle.seed < 0.1) {
          circle.seed += map(anime.random(0, 1000), 0, 1000, 0, 0.05)
        }
        ctx.globalAlpha = circle.seed
        ctx.fillStyle = circle.color.string();
        ctx.beginPath();
        ctx.arc(circle.x , circle.y, circle.r, 0, Math.PI*2, false);
        ctx.fill();
      })
      ctx.strokeStyle = '#f7f7f7';
      lines.map(line => {
        if(line.x < cW) {
          line.x += 1
        } else {
          line.x = 0
        }
        if(line.y > 0) {
          line.y -= 0.5
        } else {
          line.y = cH
        }
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.l, line.y - line.l);
        ctx.closePath();
        ctx.stroke();

      })
      requestAnimationFrame(circleAnime)
    }
    requestAnimationFrame(circleAnime)
  },
  head(){
    return {
      script: [ 
        {src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/1.0.0/anime.min.js"}
      ]
    }
  }
}
</script>
