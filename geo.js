// Function to get and display the user's location on a map
function initializeMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Initialize Leaflet map centered on user's location
            var map = L.map('map').setView([lat, lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            // Add a marker for the user's location
            var marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup("You are here!").openPopup();

        }, function (error) {
            console.error("Error fetching GPS location: ", error);
            document.getElementById('status').textContent = 'Error getting location';
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        document.getElementById('status').textContent = 'Geolocation is not supported by your browser.';
    }
}

initializeMap();
