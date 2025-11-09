// Initialize the map at world view
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let currentMarker = null;

// Mapping some country names to ThemealDB areas (needed to get results)
const countryToThemealDB = {
    "United States": "American",
    "United Kingdom": "British",
    "Russia": "Russian",
    "South Korea": "Korean",
    "North Korea": "Korean",
    "Viet Nam": "Vietnamese",
    "Iran": "Iranian",
    "Egypt": "Egyptian",
    "Morocco": "Moroccan",
    "Turkey": "Turkish",
    "Greece": "Greek",
    "Czechia": "Czech",
    "Dominican Republic": "Dominican",
    "United Arab Emirates": "Emirati",
    "India": "Indian",
    "China": "Chinese",
    "Japan": "Japanese",
    "Italy": "Italian",
    "France": "French",
    "Spain": "Spanish",
    "Mexico": "Mexican",
    "Canada": "Canadian",
    "Thailand": "Thai",
    "Jamaica": "Jamaican",
    "Brazil": "Brazilian",
    "Argentina": "Argentine",
    "Australia": "Australian",
    "Ireland": "Irish",
    "Poland": "Polish",
    "Sweden": "Swedish",
    "Norway": "Norwegian",
    "Finland": "Finnish",
    "Germany": "German",
    "Portugal": "Portuguese",
    "Netherlands": "Dutch",
    "Hungary": "Hungarian",
    "Kenya": "Kenyan",
    "South Africa": "South African",
    "Colombia": "Colombian",
    "Peru": "Peruvian",
    "Cuba": "Cuban",
    "Lebanon": "Lebanese",
    "Sri Lanka": "Sri Lankan",
    "Philippines": "Filipino",
    "Indonesia": "Indonesian",
    "Malaysia": "Malaysian",
    "Singapore": "Singaporean",
    "Nepal": "Nepalese",
    "Bangladesh": "Bangladeshi",
    "Saudi Arabia": "Saudi Arabian",
    "Iraq": "Iraqi",
    "Afghanistan": "Afghan",
    "Thailand": "Thai",
    "Vietnam": "Vietnamese",
    "Cambodia": "Cambodian",
    "Laos": "Laotian",
    "Myanmar": "Burmese",
    "Taiwan": "Taiwanese",
    "Hong Kong": "Chinese",
    "Macau": "Chinese",
    "New Zealand": "New Zealand"

    // Add more mappings if needed
};

map.on('click', async function(e) {
    if (currentMarker) map.removeLayer(currentMarker);

    currentMarker = L.marker(e.latlng).addTo(map);

    const country = await getCountryFromLatLng(e.latlng.lat, e.latlng.lng);
    if (!country) {
        alert("Could not detect country at this location.");
        return;
    }

    const area = countryToThemealDB[country] || country; // fallback to country name

    document.getElementById("title").textContent = `Dishes from ${country}`;

    fetchDishes(area);
});

async function getCountryFromLatLng(lat, lng) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await res.json();
        return data.address.country;
    } catch (err) {
        console.error(err);
        return null;
    }
}

async function fetchDishes(area) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Loading dishes...</p>";

    try {
        const res = await fetch(`http://127.0.0.1:5000/get_dishes?area=${encodeURIComponent(area)}`);
        const data = await res.json();

        if (!data.meals) {
            resultDiv.innerHTML = `<p>No dishes found for this country (${area}).</p>`;
            return;
        }

        resultDiv.innerHTML = "";

        for (const meal of data.meals) {
            // Try Wikimedia first, fallback to MealDB image
            let imgUrl = meal.strMealThumb;
            try {
                const imgRes = await fetch(`http://127.0.0.1:5000/get_image?food=${encodeURIComponent(meal.strMeal)}`);
                const imgData = await imgRes.json();
                if (imgData.url) imgUrl = imgData.url;
            } catch (e) {
                console.log("Image fetch failed, fallback to MealDB image.");
            }

            const card = document.createElement("div");
            card.className = "meal-card";
            card.style.border = "1px solid #ccc";
            card.style.borderRadius = "8px";
            card.style.padding = "10px";
            card.style.marginBottom = "10px";
            card.style.display = "flex";
            card.style.gap = "10px";
            card.style.alignItems = "center";

            card.innerHTML = `
                <img src="${imgUrl}" alt="${meal.strMeal}" width="120" style="border-radius:6px;">
                <div style="flex-grow:1">
                    <h3 style="margin:0 0 5px 0;">${meal.strMeal}</h3>
                    <button class="wishlist-btn" style="background:#57c785; border:none; padding:6px 10px; border-radius:4px; color:white; cursor:pointer;">
                        Add to Wishlist
                    </button>
                </div>
            `;

            resultDiv.appendChild(card);

            card.querySelector(".wishlist-btn").addEventListener("click", () => {
                addToWishlist(meal.strMeal, imgUrl);
            });
        }
    } catch (err) {
        console.error(err);
        resultDiv.innerHTML = "<p style='color:red;'>Error fetching dishes. Try again later.</p>";
    }
}
