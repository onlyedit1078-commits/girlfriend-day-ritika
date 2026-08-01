function playMusic() {
    const music = document.getElementById("music");

    music.play().catch(() => {
        console.log("Autoplay blocked by browser");
    });
}

window.onload = function () {
    playMusic();

    const hearts = document.querySelector(".hearts");

    setInterval(() => {
        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animation = "float 5s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);
};

const style = document.createElement("style");

style.innerHTML = `
@keyframes float{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
