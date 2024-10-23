// script.js

// Initialize the confetti when the window loads
window.onload = function() {
    tsParticles.load("tsparticles", {
        preset: "confetti",
        options: {
            particleCount: 100,
            spread: 70,
            origin: {
                x: 0.5,
                y: 0.5,
            },
        },
    });
};

// Show QR code function
function showQRCode() {
    // Get the QR code container
    const qrCodeContainer = document.getElementById('qr-code');
    
    // Remove the 'hidden' class to display the QR code
    qrCodeContainer.classList.remove('hidden');
    
    // Create an image element for the QR code
    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = 'qr-code-image.png'; // Replace with the actual path to your QR code image
    qrCodeImage.alt = 'QR Code for Nayu\'s birthday';
    
    // Clear any existing content in the QR code container and append the new image
    qrCodeContainer.innerHTML = ''; // Clear previous content
    qrCodeContainer.appendChild(qrCodeImage);
    
    // Trigger the confetti
    triggerConfetti();
}

// Trigger the confetti
function triggerConfetti() {
    tsParticles.load("tsparticles", {
        preset: "confetti",
        options: {
            particleCount: 100,
            spread: 70,
            origin: {
                x: 0.5,
                y: 0.5,
            },
        },
    });
}

// Attach event listener to the button
document.getElementById("celebrate").addEventListener("click", showQRCode);
