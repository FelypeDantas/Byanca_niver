const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width, height;
let scale = 1;
let growing = true;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function drawHeart(x, y, size) {
    ctx.beginPath();

    ctx.moveTo(x, y);

    ctx.bezierCurveTo(x - size, y - size, x - size * 2, y + size / 2, x, y + size * 2);
    ctx.bezierCurveTo(x + size * 2, y + size / 2, x + size, y - size, x, y);

    ctx.fillStyle = "red";
    ctx.shadowColor = "red";
    ctx.shadowBlur = 20;
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // 💓 efeito pulsar
    if (growing) {
        scale += 0.01;
        if (scale >= 1.1) growing = false;
    } else {
        scale -= 0.01;
        if (scale <= 0.9) growing = true;
    }

    drawHeart(width / 2, height / 3, 50 * scale);

    requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);

resize();
animate();