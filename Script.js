const carrousel = document.querySelector('.carrousel');
const offres = document.querySelectorAll('.offre-vol');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
const offresVisible = 4; // Nombre d'offres visibles à la fois
let intervalId; // Variable pour stocker l'ID de l'intervalle

function updateCarrousel() {
    offres.forEach((offre, index) => {
        if (index >= currentIndex && index < currentIndex + offresVisible) {
            offre.style.display = 'block';
        } else {
            offre.style.display = 'none';
        }
    });
}

function nextSlide() {
    if (currentIndex + offresVisible < offres.length) {
        currentIndex++;
    } else {
        currentIndex = 0; // Retour au début si on atteint la fin
    }
    updateCarrousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = offres.length - offresVisible; // Aller à la fin si on est au début
    }
    updateCarrousel();
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 3000); // Défilement toutes les 3 secondes
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

nextButton.addEventListener('click', () => {
    stopAutoSlide(); // Arrêter le défilement automatique lors d'un clic manuel
    nextSlide();
    startAutoSlide(); // Redémarrer le défilement automatique
});

prevButton.addEventListener('click', () => {
    stopAutoSlide(); // Arrêter le défilement automatique lors d'un clic manuel
    prevSlide();
    startAutoSlide(); // Redémarrer le défilement automatique
});

carrousel.addEventListener('mouseenter', stopAutoSlide); // Arrêter le défilement au survol
carrousel.addEventListener('mouseleave', startAutoSlide); // Redémarrer le défilement à la sortie de la souris

updateCarrousel(); // Initialisation du carrousel
startAutoSlide(); // Démarrer le défilement automatique