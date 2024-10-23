// Initialize the confetti
const confetti = new ConfettiGenerator({
    target: 'confetti-holder',
    max: 100, // Adjust max confetti pieces
    size: 1,
    animate: true,
    respawn: true,
    props: ['circle', 'square', 'triangle', 'line'], // Shapes of confetti
    colors: [
        [165, 104, 246], // Purple
        [230, 61, 135],  // Pink
        [0, 199, 228],   // Blue
        [253, 214, 126]  // Yellow
    ],
    clock: 25, // Speed of confetti generation
    rotate: true, // Allow confetti to rotate
    start_from_edge: true, // Start confetti from edges
    width: window.innerWidth, // Set canvas width
    height: window.innerHeight // Set canvas height
});

// Start the confetti animation
confetti.render();

// Show QR code when the button is clicked
document.getElementById("celebrate").addEventListener("click", function() {
    const qrCode = document.getElementById("qr-code");
    qrCode.classList.toggle("hidden"); // Toggle visibility of QR code
});
