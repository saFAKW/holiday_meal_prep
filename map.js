// Initialize map
    const map = L.map('map').setView([0, 0], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Try to get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Set map view to user's location
        map.setView([lat, lon], 15);

        // Add marker for user's location
        const userMarker = L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b class="here">You are here</b>`).openPopup();

        // Search for nearby supermarkets using Overpass API
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${lat},${lon})["shop"="supermarket"];out;`;

        fetch(overpassUrl)
        .then(response => response.json())
        .then(data => {
            data.elements.forEach(el => {
            if (el.lat && el.lon) {
                const name = el.tags.name || "Unnamed supermarket";
                const website = el.tags.website || el.tags.url;

                // Popup text: name + website link if available
                let popupText = `<b class="popup-Text">${name}</b>`;
                if (website) {
                  popupText += `<br><a href="${website}" target="_blank">Visit website</a>`;
                  if (name == "Co-op Food"){
                    popupText += `<br><a href="https://shop.coop.co.uk/fruit-and-veg-deals" target="_blank"> <img class="deal" src = "https://images.ctfassets.net/5hwhsiyaz6z8/1onCTW7h4io9GQYXs18UdX/e579e095e1852fb9a9b66062df189d40/Fresh_3_-_2046_x_1150_px.png"><a>`
                  }
                  else if (name == "Morrisons"){
                    popupText += `<br><a href="https://groceries.morrisons.com/promotions?srsltid=AfmBOorSaj4ZoAHam0g3T5jcT_xbq936Z56CWJLkLuOPSl6VxnfHiquQ" target="_blank"> <img class="deal" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdwtcrN-cXY-P_GqfKXV6n3Gb1bvXi-3zxw&s"></a>`
                  }
                }

                L.marker([el.lat, el.lon])
                .addTo(map)
                .bindPopup(`<b>${name}</b>`);
            }
            });
        })
        .catch(err => console.error("Error fetching supermarkets:", err));
    }

    function error() {
        alert("Unable to retrieve your location.");
    }