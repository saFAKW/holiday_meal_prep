let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
let culturePoints = parseInt(localStorage.getItem("culturePoints") || "0");
let completedCountries = new Set(JSON.parse(localStorage.getItem("completedCountries") || "[]"));

function updatePointsDisplay() {
    const pointsEl = document.getElementById("points-count");
    pointsEl.textContent = culturePoints;

    // Subtle highlight animation when points increase
    pointsEl.style.transition = "transform 0.3s ease, color 0.3s ease";
    pointsEl.style.transform = "scale(1.3)";
    pointsEl.style.color = "#fff6a3";
    setTimeout(() => {
        pointsEl.style.transform = "scale(1)";
        pointsEl.style.color = "white";
    }, 300);
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

// ========== ACHIEVEMENT BOARD ==========

function renderAchievements() {
    const board = document.getElementById("achievement-board");
    const list = document.getElementById("completed-countries-list");
    const msg = document.getElementById("achievement-msg");

    list.innerHTML = "";

    if (completedCountries.size === 0) {
        list.innerHTML = "<li>No countries completed yet — time to explore!</li>";
    } else {
        [...completedCountries].forEach(country => {
            const li = document.createElement("li");
            li.textContent = country;
            list.appendChild(li);
        });
    }

    // Fun messages
    if (culturePoints === 0) {
        msg.textContent = "Start your journey by trying a new dish!";
    } else if (culturePoints < 5) {
        msg.textContent = "You're becoming a true foodie traveler!";
    } else if (culturePoints < 10) {
        msg.textContent = "Amazing! You're collecting global flavors!";
    } else {
        msg.textContent = "You're a world cuisine master! 🌎";
    }
}

// Toggle open/close on badge click
document.getElementById("culture-points").addEventListener("click", () => {
    const board = document.getElementById("achievement-board");
    board.classList.toggle("open");
    renderAchievements();
});
