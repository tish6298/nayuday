function showQRCode() {
    // The path to your QR code image stored in the repository
    let qrCodePath = "./qr-code-image.png"; // Replace with the exact file path of your QR code

    // Display the QR code by creating an image element
    let qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = `<img src="${qrCodePath}" alt="QR Code" width="150" height="150">`;
    
    // Show the QR code if hidden
    qrCodeDiv.classList.remove('hidden');
}
