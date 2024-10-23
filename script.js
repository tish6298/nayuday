// script.js

// Include the library
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/tsParticles@1.30/dist/tsParticles.min.js";
script.onload = function() {
  const script2 = document.createElement('script');
  script2.src = "https://cdn.jsdelivr.net/npm/tsparticles-preset-confetti@1.30/dist/tsparticles.preset.confetti.min.js";
  script2.onload = function() {
    // Initialize the confetti
    function initConfetti() {
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

    // Show QR code function
    function showQRCode() {
      // Get the QR code container
      const qrCodeContainer = document.getElementById('qr-code');
      
      // Remove the 'hidden' class to display the QR code
      qrCodeContainer.classList.remove('hidden');
      
      // Create an image element for the QR code
      const qrCodeImage = document.createElement('img');
      qrCodeImage.src = 'path/to/your-qr-code.png'; // Replace with the actual path to your QR code image
      qrCodeImage.alt = 'QR Code for Nayu\'s birthday';
      
      // Clear any existing content in the QR code container and append the new image
      qrCodeContainer.innerHTML = ''; // Clear previous content
      qrCodeContainer.appendChild(qrCodeImage);
      
      // Trigger the confetti
      triggerConfetti();
    }

    // Initialize the confetti when the script loads
    initConfetti();
  };
  document.head .appendChild(script2);
};
document.head.appendChild(script);
