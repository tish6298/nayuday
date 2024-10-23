// script.js

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
}
