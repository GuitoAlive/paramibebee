// AQUÍ PONES LA FECHA EN QUE EMPEZARON SU RELACIÓN (Año, Mes [0-11], Día)
// NOTA: En JS los meses van de 0 a 11. (Enero es 0, Febrero es 1, etc.)
// Ejemplo: 15 de Octubre de 2023 -> new Date(2023, 9, 15)
const startDate = new Date(2026, 8, 15); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = 
        `${days} días, ${hours} hs, ${minutes} min y ${seconds} seg`;
}

setInterval(updateTimer, 1000);
updateTimer();