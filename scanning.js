// QR Code Scanner Setup
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function (content) {
    console.log('Scanned QR code content: ' + content);
    document.getElementById('status').textContent = 'QR Code found: ' + content;
    // Add logic here to check if the QR code matches a game location
});

// Start the camera for QR code scanning
Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
        document.getElementById('status').textContent = 'No camera available for scanning.';
    }
}).catch(function (e) {
    console.error(e);
});
