// Fecha de inicio (Año, Mes [0-11], Día)
const startDate = new Date(2024, 2, 11); 

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

// Lógica para deslizar imágenes en los carruseles
const carouselIndex = {};

function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const slides = carousel.querySelector('.carousel-slides');
    const totalSlides = slides.children.length;

    if (!(carouselId in carouselIndex)) {
        carouselIndex[carouselId] = 0;
    }

    carouselIndex[carouselId] += direction;

    if (carouselIndex[carouselId] >= totalSlides) {
        carouselIndex[carouselId] = 0;
    } else if (carouselIndex[carouselId] < 0) {
        carouselIndex[carouselId] = totalSlides - 1;
    }

    const offset = -carouselIndex[carouselId] * 100;
    slides.style.transform = `translateX(${offset}%)`;
}