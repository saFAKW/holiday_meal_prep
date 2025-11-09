const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let currentMarker = null;

// Mapping ThemealDB areas
const countryToThemealDB = {
    "United States": "American",
    "United Kingdom": "British",
    "Russia": "Russian",
    "France": "French",
    "Italy": "Italian",
    "Spain": "Spanish",
    "Germany": "German",
    "Mexico": "Mexican",
    "India": "Indian",
    "China": "Chinese",
    "Japan": "Japanese",
    "Morocco": "Moroccan",
    "Thailand": "Thai",
    "Canada": "Canadian",
    "Vietnam": "Vietnamese"
};

// ---------- MAP CLICK ----------
map.on('click', async function(e) {
    if (currentMarker) map.removeLayer(currentMarker);
    currentMarker = L.marker(e.latlng).addTo(map);

    const country = await getCountryFromLatLng(e.latlng.lat, e.latlng.lng);
    if (!country) {
        alert("Could not detect country at this location.");
        return;
    }

    const area = countryToThemealDB[country] || country;
    document.getElementById("title").textContent = `Dishes from ${country}`;
    fetchDishes(area, country);
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

// ---------- FETCH DISHES ----------
async function fetchDishes(area, country) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Loading dishes...</p>";

    try {
        const res = await fetch(`http://127.0.0.1:5000/get_dishes?area=${encodeURIComponent(area)}`);
        const data = await res.json();

        if (!data.meals) {
            resultDiv.innerHTML = `<p>No dishes found for ${country} (${area}).</p>`;
            return;
        }

        resultDiv.innerHTML = "";
        for (const meal of data.meals) {
            const imgRes = await fetch(`http://127.0.0.1:5000/get_image?food=${encodeURIComponent(meal.strMeal)}`);
            const imgData = await imgRes.json().catch(() => ({}));
            const imgUrl = imgData.url || meal.strMealThumb;

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
                addToWishlist(meal.strMeal, imgUrl, country);
            });
        }
    } catch (err) {
        console.error(err);
        resultDiv.innerHTML = "<p style='color:red;'>Error fetching dishes.</p>";
    }
}
