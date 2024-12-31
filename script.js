document.getElementById('toggleLetterBtn').addEventListener('click', function() {
    const letter = document.getElementById('letter');
    const button = document.getElementById('toggleLetterBtn');
    letter.classList.toggle('hidden'); // Toggle visibility of the letter
    if (!letter.classList.contains('hidden')) {
        letter.style.display = 'block'; // Show the letter
        setTimeout(() => {
            letter.querySelector('.letter-content').classList.remove('hidden'); // Start the animation
        }, 10); // Delay to allow the display change to take effect
        button.textContent = 'Close'; // Change button text to Close
    } else {
        letter.style.display = 'none'; // Hide the letter
        letter.querySelector('.letter-content').classList.add('hidden'); // Reset the animation
        button.textContent = 'Open Letter'; // Change button text back to Open
    }
});