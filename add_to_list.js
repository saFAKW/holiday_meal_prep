let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
let culturePoints = parseInt(localStorage.getItem("culturePoints") || "0");
let completedCountries = new Set(JSON.parse(localStorage.getItem("completedCountries") || "[]"));

function updatePointsDisplay() {
    document.getElementById("points-count").textContent = culturePoints;
}

function addToWishlist(name, img, country) {
    if (wishlist.some(item => item.name === name)) {
        alert("This dish is already in your wishlist!");
        return;
    }

    wishlist.push({ name, img, country, done: false });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
}

function renderWishlist() {
    let panel = document.getElementById("wishlist-panel");
    if (!panel) {
        panel = document.createElement("div");
        panel.id = "wishlist-panel";
        panel.className = "ingredients-sheet";
        panel.innerHTML = `
            <h2>My Wishlist</h2>
            <button class="close-btn">&times;</button>
            <div id="wishlist-items"></div>
        `;
        document.body.appendChild(panel);

        panel.querySelector(".close-btn").addEventListener("click", () => {
            panel.classList.remove("open");
        });

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "toggle-btn";
        toggleBtn.textContent = "Wishlist";
        toggleBtn.onclick = () => panel.classList.add("open");
        document.body.appendChild(toggleBtn);
    }

    const itemsDiv = document.getElementById("wishlist-items");
    itemsDiv.innerHTML = "";

    wishlist.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "ingredient-item";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "space-between";

        div.innerHTML = `
            <div style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" class="tick" ${item.done ? "checked" : ""}>
                <img src="${item.img}" width="60" style="border-radius:5px;">
                <span>${item.name}</span>
            </div>
            <button class="delete-btn" style="background:#e74c3c;color:white;border:none;border-radius:4px;padding:5px 8px;cursor:pointer;">✕</button>
        `;

        // Delete
        div.querySelector(".delete-btn").addEventListener("click", () => {
            wishlist.splice(index, 1);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            renderWishlist();
        });

        // Tick off
        div.querySelector(".tick").addEventListener("change", (e) => {
            wishlist[index].done = e.target.checked;
            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            if (e.target.checked && !completedCountries.has(item.country)) {
                completedCountries.add(item.country);
                culturePoints++;
                localStorage.setItem("culturePoints", culturePoints);
                localStorage.setItem("completedCountries", JSON.stringify([...completedCountries]));
                updatePointsDisplay();
            }
        });

        itemsDiv.appendChild(div);
    });
}

// Initialise everything
document.addEventListener("DOMContentLoaded", () => {
    renderWishlist();
    updatePointsDisplay();
});
