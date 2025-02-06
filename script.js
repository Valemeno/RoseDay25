const backgroundMusic = document.getElementById('background-music');
document.body.addEventListener('click', () => {
    backgroundMusic.play();
});

// Function to set random starting positions for petals
function randomizePetals() {
    const petals = document.querySelectorAll('.petal-fall');
    petals.forEach(petal => {
        // Randomize starting position (top and left)
        const randomTop = Math.random() * 100; // Random value between 0% and 100%
        const randomLeft = Math.random() * 100; // Random value between 0% and 100%
        petal.style.top = `${randomTop}%`;
        petal.style.left = `${randomLeft}%`;
    });
}

// Call the function to randomize petals on page load
randomizePetals();