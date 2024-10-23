// Initialize tsParticles
tsParticles.load("tsparticles", {
    preset: "confetti",
    particles: {
        number: {
            value: 100,
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
            },
        },
        size: {
            value: 10,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 5,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
            },
            push: {
                particles_nb: 4,
            },
            repulse: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// Show QR code on button click
document.getElementById("celebrate").addEventListener("click", function () {
    const qrCodeContainer = document.getElementById("qr-code");
    qrCodeContainer.classList.remove("hidden");

    // Create and display the QR code image
    const qrCodeImage = document.createElement("img");
    qrCodeImage.src = "qr-code-image.png"; // Reference your QR code image
    qrCodeImage.alt = "QR Code";
    qrCodeImage.style.width = "150px"; // Set width for the image
    qrCodeImage.style.height = "150px"; // Set height for the image
    qrCodeContainer.appendChild(qrCodeImage);
});
