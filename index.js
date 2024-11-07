function generateCustomRandomNumber() {
    // Generate a random number between 1 and 10
    const randomChance = Math.floor(Math.random() * 10) + 1;

    let imageSrc;
    let description;

    // Determine the output based on the random number
    if (randomChance === 5) {
        imageSrc = 'image/wisdelit.jpeg'; // Replace with your image path
        description = 'HOLLY WISDELLLLL!!!!! WHAT A LUCK.';
    } else {
        imageSrc = 'image/Lbozo.jpeg'; // Replace with your image path
        description = 'L luck, L gambling, L BOZO LOL XD.';
    }

    // Update the image and description in the HTML
    const resultImage = document.getElementById('resultImage');
    const resultDescription = document.getElementById('resultDescription');

    resultImage.src = imageSrc;
    resultImage.alt = description;
    resultImage.style.display = 'block'; // Show the image
    resultDescription.textContent = description;
}