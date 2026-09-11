// Fecha de inicio (Año, Mes [0-11], Día)
const startDate = new Date(2023, 9, 15); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `${days} días, ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateTimer, 1000);
updateTimer();

// Generador de corazones flotantes en el fondo
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 600);