const music = document.getElementById("music");

function playMusic() {
    if (music) {
        music.play().catch(() => {});
    }
}

document.addEventListener("click", playMusic, { once: true });

setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.animation = "floatHeart 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 350);

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatHeart{
0%{
transform:translateY(0) scale(1);
opacity:1;
}
100%{
transform:translateY(-110vh) scale(1.8);
opacity:0;
}
}
`;

document.head.appendChild(style);
