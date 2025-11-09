// const map = L.map('map').setView([0, 0], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// maxZoom: 19,
// attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// if (navigator.geolocation) {
// navigator.geolocation.getCurrentPosition(success, error);
// } else {
// alert("Geolocation is not supported by this browser.");
// }

// function success(position) {
// const lat = position.coords.latitude;
// const lon = position.coords.longitude;
// map.setView([lat, lon], 15);

// L.marker([lat, lon])
//     .addTo(map)
//     .bindPopup(`<b class="here">You are here</b>`)
//     .openPopup();

// const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${lat},${lon})["shop"="supermarket"];out;`;

// fetch(overpassUrl)
//     .then(response => response.json())
//     .then(data => {
//     data.elements.forEach(el => {
//         if (el.lat && el.lon) {
//         const name = el.tags.name || "Unnamed supermarket";
//         const website = el.tags.website || el.tags.url;

//         // Popup text: name + website link if available
//         let popupText = `<b>${name}</b>`;
//         if (website) {
//                   popupText += `<br><a href="${website}" target="_blank">Visit website</a>`;
//                   if (name == "Co-op Food"){
//                     popupText += `<br><a href="https://shop.coop.co.uk/fruit-and-veg-deals" target="_blank"> <img class="deal" src = "https://images.ctfassets.net/5hwhsiyaz6z8/1onCTW7h4io9GQYXs18UdX/e579e095e1852fb9a9b66062df189d40/Fresh_3_-_2046_x_1150_px.png"><a>`
//                   }
//                   else if (name == "Morrisons"){
//                     popupText += `<br><a href="https://groceries.morrisons.com/promotions?srsltid=AfmBOorSaj4ZoAHam0g3T5jcT_xbq936Z56CWJLkLuOPSl6VxnfHiquQ" target="_blank"> <img class="deal" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdwtcrN-cXY-P_GqfKXV6n3Gb1bvXi-3zxw&s"></a>`
//                   }
//                 }


//         L.marker([el.lat, el.lon])
//             .addTo(map)
//             .bindPopup(popupText);
//         }
//     });
//     })
//     .catch(err => console.error("Error fetching supermarkets:", err));
// }

// function error() {
// alert("Unable to retrieve your location.");
// }
// Initialize map centered on world
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let supermarketLayer = L.layerGroup().addTo(map);

// Try to get user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    alert("Geolocation is not supported by this browser.");
}

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Center map to user’s location
    map.setView([lat, lon], 13);

    // Add user marker
    L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<b class="here">You are here</b>`)
        .openPopup();
}

// Handle geolocation errors
function error() {
    console.warn("Unable to retrieve location — showing global map.");
}

// Fetch supermarkets for current visible map area
async function fetchSupermarketsInView() {
    const bounds = map.getBounds();
    const south = bounds.getSouth();
    const west = bounds.getWest();
    const north = bounds.getNorth();
    const east = bounds.getEast();

    // Overpass query for supermarkets in bounding box
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];
        (
          node["shop"="supermarket"](${south},${west},${north},${east});
          way["shop"="supermarket"](${south},${west},${north},${east});
          relation["shop"="supermarket"](${south},${west},${north},${east});
        );
        out center;`;

    try {
        const response = await fetch(overpassUrl);
        const data = await response.json();

        // Clear old markers
        supermarketLayer.clearLayers();

        // Add markers for supermarkets
        data.elements.forEach(el => {
            const lat = el.lat || (el.center && el.center.lat);
            const lon = el.lon || (el.center && el.center.lon);
            if (!lat || !lon) return;

            const name = el.tags?.name || "Unnamed supermarket";
            const website = el.tags?.website || el.tags?.url;

            // Build popup content
            let popupText = `<b>${name}</b>`;
            if (website) {
                popupText += `<br><a href="${website}" target="_blank">Visit website</a>`;
            }

            // Add custom deals for specific chains
            if (name.includes("Co-op")) {
                popupText += `<br><a href="https://shop.coop.co.uk/fruit-and-veg-deals" target="_blank">
                    <img class="deal" src="https://images.ctfassets.net/5hwhsiyaz6z8/1onCTW7h4io9GQYXs18UdX/e579e095e1852fb9a9b66062df189d40/Fresh_3_-_2046_x_1150_px.png" width="150">
                </a>`;
            } else if (name.includes("Morrisons")) {
                popupText += `<br><a href="https://groceries.morrisons.com/promotions?srsltid=AfmBOorSaj4ZoAHam0g3T5jcT_xbq936Z56CWJLkLuOPSl6VxnfHiquQ" target="_blank">
                    <img class="deal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdwtcrN-cXY-P_GqfKXV6n3Gb1bvXi-3zxw&s" width="150">
                </a>`;
            }

            L.marker([lat, lon])
                .addTo(supermarketLayer)
                .bindPopup(popupText);
        });

        console.log(`Loaded ${data.elements.length} supermarkets in current view`);
    } catch (err) {
        console.error("Error fetching supermarkets:", err);
    }
}

// Fetch supermarkets whenever map movement ends
map.on("moveend", fetchSupermarketsInView);

// Initial load
fetchSupermarketsInView();
